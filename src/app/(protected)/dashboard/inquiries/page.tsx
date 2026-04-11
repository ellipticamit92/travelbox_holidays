export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { InquiryList } from "@/components/dashboard/InquiryList";

export default async function InquiriesPage() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  const unread = inquiries.filter((i) => !i.read).length;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Inquiries</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {inquiries.length} total
            {unread > 0 && (
              <span className="ml-2 inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-600">
                {unread} unread
              </span>
            )}
          </p>
        </div>
      </div>

      <InquiryList inquiries={inquiries} />
    </div>
  );
}
