import { PackageForm } from "@/components/dashboard/PackageForm";

export default function NewPackagePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl font-bold text-gray-900 mb-6">New Package</h1>
      <PackageForm />
    </div>
  );
}
