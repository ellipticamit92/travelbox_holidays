import { DestinationForm } from "@/components/dashboard/DestinationForm";

export default function NewDestinationPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-xl font-bold text-gray-900 mb-6">New Destination</h1>
      <DestinationForm />
    </div>
  );
}
