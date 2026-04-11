import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const destinations = await prisma.destination.findMany({
    include: { highlights: { orderBy: { order: "asc" } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(destinations);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { highlights = [], ...data } = body;

  const destination = await prisma.destination.create({
    data: {
      ...data,
      highlights: {
        create: highlights.map((text: string, i: number) => ({ text, order: i })),
      },
    },
    include: { highlights: { orderBy: { order: "asc" } } },
  });

  return NextResponse.json(destination, { status: 201 });
}
