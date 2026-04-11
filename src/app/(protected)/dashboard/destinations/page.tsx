export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { DeleteButton } from "@/components/dashboard/DeleteButton";

export default async function DestinationsPage() {
  const destinations = await prisma.destination.findMany({
    include: { highlights: { orderBy: { order: "asc" } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Destinations</h1>
          <p className="text-sm text-gray-500 mt-0.5">{destinations.length} total</p>
        </div>
        <Link
          href="/dashboard/destinations/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
        >
          <Plus className="size-4" /> New Destination
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {destinations.length === 0 ? (
          <p className="text-sm text-gray-500 p-6">No destinations yet.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Best Time</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Highlights</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {destinations.map((dest) => (
                <tr key={dest.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-900">{dest.name}</p>
                    <p className="text-xs text-gray-400">{dest.subtitle}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${dest.category === "india" ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"}`}>
                      {dest.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{dest.bestTimeToVisit}</td>
                  <td className="px-4 py-3 text-gray-500">{dest.highlights.length}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/dashboard/destinations/${dest.id}`} className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md">
                        <Pencil className="size-4" />
                      </Link>
                      <DeleteButton id={dest.id} endpoint="/api/destinations" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
