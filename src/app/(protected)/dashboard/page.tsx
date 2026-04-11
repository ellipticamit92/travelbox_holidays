import { auth } from "@/auth";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">
        Welcome back, {session?.user?.name ?? session?.user?.email}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-1">Role</p>
          <p className="text-2xl font-semibold text-gray-900 capitalize">
            {(session?.user as { role?: string })?.role ?? "user"}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-1">Email</p>
          <p className="text-lg font-medium text-gray-900 truncate">
            {session?.user?.email}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-1">Status</p>
          <span className="inline-flex items-center gap-1.5 text-green-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Active
          </span>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Manage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/dashboard/gallery"
            className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-sm transition group"
          >
            <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
              Gallery Images
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Upload and manage travel photos
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
