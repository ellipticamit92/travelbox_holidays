import "server-only";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

function createPrismaClient() {
  const url = new URL(process.env.DATABASE_URL!);
  url.searchParams.set("connectionLimit", "1");
  url.searchParams.set("acquireTimeout", "30000");
  const adapter = new PrismaMariaDb(url.toString());
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
