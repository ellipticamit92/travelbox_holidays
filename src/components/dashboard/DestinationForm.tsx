"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export interface DestinationFormValues {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  category: string;
  description: string;
  bestTimeToVisit: string;
  currency: string;
  language: string;
  packages: number;
  highlights: string[];
}

interface Props {
  defaultValues?: Partial<DestinationFormValues>;
  id?: string; // existing record id for edit
}

export function DestinationForm({ defaultValues, id }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, control, handleSubmit, formState: { errors } } = useForm<DestinationFormValues>({
    defaultValues: {
      highlights: [],
      packages: 0,
      category: "india",
      ...defaultValues,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "highlights" as never,
  });

  async function onSubmit(data: DestinationFormValues) {
    setSaving(true);
    setError(null);

    const url = id ? `/api/destinations/${id}` : "/api/destinations";
    const method = id ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSaving(false);
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Failed to save");
      return;
    }
    router.push("/dashboard/destinations");
    router.refresh();
  }

  const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white border border-gray-200 rounded-xl p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Slug <span className="text-red-500">*</span></label>
          <input {...register("slug", { required: "Required" })} placeholder="e.g. jaipur" className={inputClass} disabled={!!id} />
          {errors.slug && <p className="text-xs text-red-500 mt-1">{errors.slug.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Name <span className="text-red-500">*</span></label>
          <input {...register("name", { required: "Required" })} placeholder="e.g. Jaipur" className={inputClass} />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Subtitle <span className="text-red-500">*</span></label>
          <input {...register("subtitle", { required: "Required" })} placeholder="e.g. The Pink City" className={inputClass} />
          {errors.subtitle && <p className="text-xs text-red-500 mt-1">{errors.subtitle.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Image URL</label>
          <input {...register("image")} placeholder="/jaipur.jpeg" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Category <span className="text-red-500">*</span></label>
          <select {...register("category", { required: "Required" })} className={inputClass}>
            <option value="india">India</option>
            <option value="international">International</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Best Time to Visit <span className="text-red-500">*</span></label>
          <input {...register("bestTimeToVisit", { required: "Required" })} placeholder="e.g. October to March" className={inputClass} />
          {errors.bestTimeToVisit && <p className="text-xs text-red-500 mt-1">{errors.bestTimeToVisit.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Currency</label>
          <input {...register("currency")} placeholder="e.g. UAE Dirham (AED)" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Language</label>
          <input {...register("language")} placeholder="e.g. Hindi, English" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>No. of Packages</label>
          <input {...register("packages", { valueAsNumber: true })} type="number" min={0} className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Description <span className="text-red-500">*</span></label>
        <textarea {...register("description", { required: "Required" })} rows={4} className={inputClass} />
        {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description.message}</p>}
      </div>

      {/* Highlights */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className={labelClass}>Highlights</label>
          <button type="button" onClick={() => append("")} className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700">
            <Plus className="size-3" /> Add
          </button>
        </div>
        <div className="space-y-2">
          {fields.map((field, i) => (
            <div key={field.id} className="flex gap-2">
              <input
                {...register(`highlights.${i}` as const)}
                placeholder="e.g. Majestic Amber Fort"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600">
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
          {fields.length === 0 && <p className="text-xs text-gray-400 italic">No highlights yet.</p>}
        </div>
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
          {saving ? "Saving..." : id ? "Update Destination" : "Create Destination"}
        </button>
        <button type="button" onClick={() => router.back()} className="px-5 py-2.5 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </form>
  );
}
