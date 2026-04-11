import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const destination = await prisma.destination.findUnique({
    where: { id },
    include: { highlights: { orderBy: { order: "asc" } } },
  });
  if (!destination) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(destination);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const { highlights = [], ...data } = body;

  await prisma.destinationHighlight.deleteMany({ where: { destinationId: id } });

  const destination = await prisma.destination.update({
    where: { id },
    data: {
      ...data,
      highlights: {
        create: highlights.map((text: string, i: number) => ({ text, order: i })),
      },
    },
    include: { highlights: { orderBy: { order: "asc" } } },
  });

  return NextResponse.json(destination);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  await prisma.destination.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
