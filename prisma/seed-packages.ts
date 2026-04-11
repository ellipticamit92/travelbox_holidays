import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { allPackages } from "../src/data/packages";

const dbUrl = new URL(process.env.DATABASE_URL!);
dbUrl.searchParams.set("connectionLimit", "1");
const adapter = new PrismaMariaDb(dbUrl.toString());
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const pkg of allPackages) {
    const created = await prisma.package.upsert({
      where: { slug: pkg.id },
      update: {
        title: pkg.title,
        destination: pkg.destination,
        duration: pkg.duration,
        groupSize: pkg.groupSize,
        price: pkg.price,
        originalPrice: pkg.originalPrice,
        rating: pkg.rating,
        reviews: pkg.reviews,
        image: pkg.image,
        featured: pkg.featured,
        category: pkg.category,
        type: pkg.type,
        description: pkg.description,
      },
      create: {
        slug: pkg.id,
        title: pkg.title,
        destination: pkg.destination,
        duration: pkg.duration,
        groupSize: pkg.groupSize,
        price: pkg.price,
        originalPrice: pkg.originalPrice,
        rating: pkg.rating,
        reviews: pkg.reviews,
        image: pkg.image,
        featured: pkg.featured,
        category: pkg.category,
        type: pkg.type,
        description: pkg.description,
      },
    });

    // Delete existing related records and re-insert
    await prisma.packageHighlight.deleteMany({ where: { packageId: created.id } });
    await prisma.packageInclusion.deleteMany({ where: { packageId: created.id } });
    await prisma.packageExclusion.deleteMany({ where: { packageId: created.id } });
    await prisma.packageItinerary.deleteMany({ where: { packageId: created.id } });

    await prisma.packageHighlight.createMany({
      data: pkg.highlights.map((text, i) => ({
        packageId: created.id,
        text,
        order: i,
      })),
    });

    await prisma.packageInclusion.createMany({
      data: pkg.inclusions.map((text, i) => ({
        packageId: created.id,
        text,
        order: i,
      })),
    });

    await prisma.packageExclusion.createMany({
      data: pkg.exclusions.map((text, i) => ({
        packageId: created.id,
        text,
        order: i,
      })),
    });

    await prisma.packageItinerary.createMany({
      data: pkg.itinerary.map((item) => ({
        packageId: created.id,
        day: item.day,
        title: item.title,
        description: item.description,
      })),
    });

    console.log(`✓ ${pkg.title}`);
  }

  console.log(`\nSeeded ${allPackages.length} packages.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
