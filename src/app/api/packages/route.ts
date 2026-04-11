import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const packages = await prisma.package.findMany({
    include: {
      highlights:  { orderBy: { order: "asc" } },
      inclusions:  { orderBy: { order: "asc" } },
      exclusions:  { orderBy: { order: "asc" } },
      itinerary:   { orderBy: { day:   "asc" } },
    },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(packages);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { highlights = [], inclusions = [], exclusions = [], itinerary = [], ...data } = body;

  const pkg = await prisma.package.create({
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

  return NextResponse.json(pkg, { status: 201 });
}
