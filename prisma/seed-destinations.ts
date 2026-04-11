import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { allDestinations } from "../src/data/destinations";

const dbUrl = new URL(process.env.DATABASE_URL!);
dbUrl.searchParams.set("connectionLimit", "1");
const adapter = new PrismaMariaDb(dbUrl.toString());
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const dest of allDestinations) {
    const created = await prisma.destination.upsert({
      where: { slug: dest.id },
      update: {
        name: dest.name,
        subtitle: dest.subtitle,
        image: dest.image,
        category: dest.category,
        description: dest.description,
        bestTimeToVisit: dest.bestTimeToVisit,
        currency: dest.currency ?? null,
        language: dest.language ?? null,
        packages: dest.packages ?? 0,
      },
      create: {
        slug: dest.id,
        name: dest.name,
        subtitle: dest.subtitle,
        image: dest.image,
        category: dest.category,
        description: dest.description,
        bestTimeToVisit: dest.bestTimeToVisit,
        currency: dest.currency ?? null,
        language: dest.language ?? null,
        packages: dest.packages ?? 0,
      },
    });

    await prisma.destinationHighlight.deleteMany({
      where: { destinationId: created.id },
    });

    await prisma.destinationHighlight.createMany({
      data: dest.highlights.map((text, i) => ({
        destinationId: created.id,
        text,
        order: i,
      })),
    });

    console.log(`✓ ${dest.name}`);
  }

  console.log(`\nSeeded ${allDestinations.length} destinations.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
