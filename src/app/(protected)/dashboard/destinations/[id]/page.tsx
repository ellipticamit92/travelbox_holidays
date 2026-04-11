import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { DestinationForm } from "@/components/dashboard/DestinationForm";

export default async function EditDestinationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dest = await prisma.destination.findUnique({
    where: { id },
    include: { highlights: { orderBy: { order: "asc" } } },
  });

  if (!dest) notFound();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-xl font-bold text-gray-900 mb-6">Edit — {dest.name}</h1>
      <DestinationForm
        id={dest.id}
        defaultValues={{
          slug: dest.slug,
          name: dest.name,
          subtitle: dest.subtitle,
          image: dest.image ?? "",
          category: dest.category,
          description: dest.description,
          bestTimeToVisit: dest.bestTimeToVisit,
          currency: dest.currency ?? "",
          language: dest.language ?? "",
          packages: dest.packages,
          highlights: dest.highlights.map((h) => h.text),
        }}
      />
    </div>
  );
}
