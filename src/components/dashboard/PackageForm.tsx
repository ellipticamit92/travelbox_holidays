"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export interface PackageFormValues {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  featured: boolean;
  category: string;
  type: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; description: string }[];
}

interface Props {
  defaultValues?: Partial<PackageFormValues>;
  id?: string;
}

function StringList({ control, register, name, label, placeholder }: {
  control: ReturnType<typeof useForm<PackageFormValues>>["control"];
  register: ReturnType<typeof useForm<PackageFormValues>>["register"];
  name: "highlights" | "inclusions" | "exclusions";
  label: string;
  placeholder?: string;
}) {
  const { fields, append, remove } = useFieldArray({ control, name: name as never });
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <button type="button" onClick={() => append("")} className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700">
          <Plus className="size-3" /> Add
        </button>
      </div>
      <div className="space-y-2">
        {fields.map((field, i) => (
          <div key={field.id} className="flex gap-2">
            <input
              {...register(`${name}.${i}` as never)}
              placeholder={placeholder}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600">
              <Trash2 className="size-4" />
            </button>
          </div>
        ))}
        {fields.length === 0 && <p className="text-xs text-gray-400 italic">No items yet.</p>}
      </div>
    </div>
  );
}

export function PackageForm({ defaultValues, id }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, control, handleSubmit, formState: { errors } } = useForm<PackageFormValues>({
    defaultValues: {
      highlights: [], inclusions: [], exclusions: [], itinerary: [],
      rating: 4.5, reviews: 0, featured: false, category: "india", type: "leisure",
      ...defaultValues,
    },
  });

  const { fields: itineraryFields, append: appendItinerary, remove: removeItinerary } = useFieldArray({ control, name: "itinerary" });

  async function onSubmit(data: PackageFormValues) {
    setSaving(true);
    setError(null);
    const url = id ? `/api/packages/${id}` : "/api/packages";
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
    router.push("/dashboard/packages");
    router.refresh();
  }

  const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white border border-gray-200 rounded-xl p-6">
      {/* Basic Info */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Basic Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Slug <span className="text-red-500">*</span></label>
            <input {...register("slug", { required: "Required" })} placeholder="e.g. golden-triangle-tour" className={inputClass} disabled={!!id} />
            {errors.slug && <p className="text-xs text-red-500 mt-1">{errors.slug.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Title <span className="text-red-500">*</span></label>
            <input {...register("title", { required: "Required" })} placeholder="e.g. Golden Triangle Tour" className={inputClass} />
            {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Destination <span className="text-red-500">*</span></label>
            <input {...register("destination", { required: "Required" })} placeholder="e.g. Delhi - Agra - Jaipur" className={inputClass} />
            {errors.destination && <p className="text-xs text-red-500 mt-1">{errors.destination.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Duration <span className="text-red-500">*</span></label>
            <input {...register("duration", { required: "Required" })} placeholder="e.g. 6 Days / 5 Nights" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Group Size</label>
            <input {...register("groupSize")} placeholder="e.g. 2-8 People" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Price <span className="text-red-500">*</span></label>
            <input {...register("price", { required: "Required" })} placeholder="e.g. ₹24,999" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Original Price</label>
            <input {...register("originalPrice")} placeholder="e.g. ₹32,999" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Rating</label>
            <input {...register("rating", { valueAsNumber: true })} type="number" step="0.1" min="0" max="5" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Reviews</label>
            <input {...register("reviews", { valueAsNumber: true })} type="number" min="0" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Image URL</label>
            <input {...register("image")} placeholder="/jaipur.jpeg" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Category</label>
            <select {...register("category")} className={inputClass}>
              <option value="india">India</option>
              <option value="international">International</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Type</label>
            <select {...register("type")} className={inputClass}>
              <option value="religious">Religious</option>
              <option value="leisure">Leisure</option>
              <option value="honeymoon">Honeymoon</option>
              <option value="adventure">Adventure</option>
              <option value="cultural">Cultural</option>
            </select>
          </div>
          <div className="flex items-center gap-2 pt-6">
            <input {...register("featured")} id="featured" type="checkbox" className="rounded border-gray-300" />
            <label htmlFor="featured" className="text-sm text-gray-700">Featured package</label>
          </div>
        </div>
        <div className="mt-4">
          <label className={labelClass}>Description <span className="text-red-500">*</span></label>
          <textarea {...register("description", { required: "Required" })} rows={4} className={inputClass} />
          {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description.message}</p>}
        </div>
      </section>

      {/* Lists */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Highlights, Inclusions & Exclusions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StringList control={control} register={register} name="highlights" label="Highlights" placeholder="e.g. Visit Taj Mahal" />
          <StringList control={control} register={register} name="inclusions" label="Inclusions" placeholder="e.g. 5 Nights hotel" />
          <StringList control={control} register={register} name="exclusions" label="Exclusions" placeholder="e.g. Airfare" />
        </div>
      </section>

      {/* Itinerary */}
      <section>
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900">Itinerary</h3>
          <button
            type="button"
            onClick={() => appendItinerary({ day: itineraryFields.length + 1, title: "", description: "" })}
            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
          >
            <Plus className="size-3" /> Add Day
          </button>
        </div>
        <div className="space-y-4">
          {itineraryFields.map((field, i) => (
            <div key={field.id} className="border border-gray-200 rounded-lg p-4 relative">
              <button type="button" onClick={() => removeItinerary(i)} className="absolute top-3 right-3 text-red-400 hover:text-red-600">
                <Trash2 className="size-4" />
              </button>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-2">
                  <label className={labelClass}>Day</label>
                  <input {...register(`itinerary.${i}.day`, { valueAsNumber: true })} type="number" min="1" className={inputClass} />
                </div>
                <div className="col-span-10">
                  <label className={labelClass}>Title</label>
                  <input {...register(`itinerary.${i}.title`)} placeholder="e.g. Arrival in Delhi" className={inputClass} />
                </div>
                <div className="col-span-12">
                  <label className={labelClass}>Description</label>
                  <textarea {...register(`itinerary.${i}.description`)} rows={2} placeholder="Day activities..." className={inputClass} />
                </div>
              </div>
            </div>
          ))}
          {itineraryFields.length === 0 && <p className="text-xs text-gray-400 italic">No itinerary days yet.</p>}
        </div>
      </section>

      {error && <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
          {saving ? "Saving..." : id ? "Update Package" : "Create Package"}
        </button>
        <button type="button" onClick={() => router.back()} className="px-5 py-2.5 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </form>
  );
}
