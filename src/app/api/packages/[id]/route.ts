import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = await prisma.package.findUnique({
    where: { id },
    include: {
      highlights: { orderBy: { order: "asc" } },
      inclusions: { orderBy: { order: "asc" } },
      exclusions: { orderBy: { order: "asc" } },
      itinerary:  { orderBy: { day:   "asc" } },
    },
  });
  if (!pkg) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(pkg);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const { highlights = [], inclusions = [], exclusions = [], itinerary = [], ...data } = body;

  await prisma.packageHighlight.deleteMany({ where: { packageId: id } });
  await prisma.packageInclusion.deleteMany({ where: { packageId: id } });
  await prisma.packageExclusion.deleteMany({ where: { packageId: id } });
  await prisma.packageItinerary.deleteMany({ where: { packageId: id } });

  const pkg = await prisma.package.update({
    where: { id },
    data: {
      ...data,
      highlights: { create: highlights.map((text: string, i: number) => ({ text, order: i })) },
      inclusions: { create: inclusions.map((text: string, i: number) => ({ text, order: i })) },
      exclusions: { create: exclusions.map((text: string, i: number) => ({ text, order: i })) },
      itinerary:  { create: itinerary.map((item: { day: number; title: string; description: string }) => item) },
    },
    include: {
      highlights: { orderBy: { order: "asc" } },
      inclusions: { orderBy: { order: "asc" } },
      exclusions: { orderBy: { order: "asc" } },
      itinerary:  { orderBy: { day:   "asc" } },
    },
  });

  return NextResponse.json(pkg);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  await prisma.package.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
