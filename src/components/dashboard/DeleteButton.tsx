"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export function DeleteButton({ id, endpoint }: { id: string; endpoint: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Delete this item? This cannot be undone.")) return;
    await fetch(`${endpoint}/${id}`, { method: "DELETE" });
    router.refresh();
  }

  return (
    <button onClick={handleDelete} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md">
      <Trash2 className="size-4" />
    </button>
  );
}
