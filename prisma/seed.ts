import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const dbUrl = new URL(process.env.DATABASE_URL!);
dbUrl.searchParams.set("connectionLimit", "1");
const adapter = new PrismaMariaDb(dbUrl.toString());
const prisma = new PrismaClient({ adapter });

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@travelboxholidays.com" },
    update: {},
    create: {
      email: "admin@travelboxholidays.com",
      name: "Admin",
      password: "Admin@1234",
      role: "admin",
    },
  });

  console.log("Seeded user:", admin.email, "| role:", admin.role);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
