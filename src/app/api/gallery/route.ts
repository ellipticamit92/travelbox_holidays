import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { cloudinary } from "@/lib/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(images);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const name = (formData.get("name") as string) || null;
  const destination = (formData.get("destination") as string) || null;

  if (!file) {
    return NextResponse.json({ error: "Image file is required" }, { status: 400 });
  }

  // Convert File to buffer for Cloudinary upload
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploaded = await new Promise<{ secure_url: string }>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: "travelbox_gallery", resource_type: "image" },
        (error, result) => {
          if (error || !result) return reject(error);
          resolve(result);
        }
      )
      .end(buffer);
  });

  const image = await prisma.galleryImage.create({
    data: {
      imageUrl: uploaded.secure_url,
      name: name ?? "",
      destination: destination ?? "",
    },
  });

  return NextResponse.json(image, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const image = await prisma.galleryImage.findUnique({ where: { id } });
  if (!image) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Extract public_id from Cloudinary URL and delete from Cloudinary
  const publicId = image.imageUrl
    .split("/")
    .slice(-2)
    .join("/")
    .replace(/\.[^.]+$/, "");
  await cloudinary.uploader.destroy(publicId);

  await prisma.galleryImage.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
