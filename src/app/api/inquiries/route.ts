import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(inquiries);
}

export async function POST(req: Request) {
  const { name, email, phone, destination, subject, message } = await req.json();

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const inquiry = await prisma.inquiry.create({
    data: { name, email, phone, destination: destination || null, subject: subject || null, message },
  });

  return NextResponse.json(inquiry, { status: 201 });
}
