export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { PackageForm } from "@/components/dashboard/PackageForm";

export default async function EditPackagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = await prisma.package.findUnique({
    where: { id },
    include: {
      highlights: { orderBy: { order: "asc" } },
      inclusions:  { orderBy: { order: "asc" } },
      exclusions:  { orderBy: { order: "asc" } },
      itinerary:   { orderBy: { day:   "asc" } },
    },
  });

  if (!pkg) notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl font-bold text-gray-900 mb-6">Edit — {pkg.title}</h1>
      <PackageForm
        id={pkg.id}
        defaultValues={{
          slug:          pkg.slug,
          title:         pkg.title,
          destination:   pkg.destination,
          duration:      pkg.duration,
          groupSize:     pkg.groupSize,
          price:         pkg.price,
          originalPrice: pkg.originalPrice ?? "",
          rating:        pkg.rating,
          reviews:       pkg.reviews,
          image:         pkg.image ?? "",
          featured:      pkg.featured,
          category:      pkg.category,
          type:          pkg.type,
          description:   pkg.description,
          highlights:    pkg.highlights.map((h) => h.text),
          inclusions:    pkg.inclusions.map((i) => i.text),
          exclusions:    pkg.exclusions.map((e) => e.text),
          itinerary:     pkg.itinerary.map((d) => ({ day: d.day, title: d.title, description: d.description })),
        }}
      />
    </div>
  );
}
