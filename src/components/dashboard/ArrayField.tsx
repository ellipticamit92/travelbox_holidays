"use client";

import { useFieldArray, Control, FieldValues, ArrayPath } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

interface ArrayFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: ArrayPath<T>;
  label: string;
  placeholder?: string;
}

export function ArrayField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: ArrayFieldProps<T>) {
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <button
          type="button"
          onClick={() => append("" as never)}
          className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
        >
          <Plus className="size-3" /> Add
        </button>
      </div>
      <div className="space-y-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <input
              {...(control.register(`${name}.${index}` as never))}
              placeholder={placeholder}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-400 hover:text-red-600"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        ))}
        {fields.length === 0 && (
          <p className="text-xs text-gray-400 italic">No items yet. Click Add.</p>
        )}
      </div>
    </div>
  );
}
