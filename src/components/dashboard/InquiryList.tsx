"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, MailOpen, Trash2, Phone, MapPin } from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  destination: string | null;
  subject: string | null;
  message: string;
  read: boolean;
  createdAt: Date;
}

export function InquiryList({ inquiries: initial }: { inquiries: Inquiry[] }) {
  const router = useRouter();
  const [inquiries, setInquiries] = useState(initial);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleRead = async (id: string, read: boolean) => {
    await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read }),
    });
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, read } : i)));
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
    setInquiries((prev) => prev.filter((i) => i.id !== id));
    router.refresh();
  };

  if (inquiries.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
        <MailOpen className="mx-auto size-10 text-gray-300 mb-3" />
        <p className="text-sm text-gray-500">No inquiries yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {inquiries.map((inquiry) => (
        <div
          key={inquiry.id}
          className={`bg-white border rounded-xl overflow-hidden transition-all ${
            inquiry.read ? "border-gray-200" : "border-blue-300 shadow-sm"
          }`}
        >
          {/* Header row */}
          <div
            className="flex items-start gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50"
            onClick={() => {
              setExpanded(expanded === inquiry.id ? null : inquiry.id);
              if (!inquiry.read) toggleRead(inquiry.id, true);
            }}
          >
            <div className="mt-0.5 shrink-0">
              {inquiry.read ? (
                <MailOpen className="size-5 text-gray-400" />
              ) : (
                <Mail className="size-5 text-blue-500" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`font-medium text-sm ${inquiry.read ? "text-gray-700" : "text-gray-900"}`}>
                  {inquiry.name}
                </span>
                {!inquiry.read && (
                  <span className="inline-flex px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">New</span>
                )}
                {inquiry.destination && (
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="size-3" /> {inquiry.destination}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-0.5 truncate">
                {inquiry.subject || inquiry.message.slice(0, 80)}
              </p>
            </div>

            <div className="shrink-0 text-right ml-4">
              <p className="text-xs text-gray-400 whitespace-nowrap">
                {new Date(inquiry.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric", month: "short", year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Expanded detail */}
          {expanded === inquiry.id && (
            <div className="px-5 pb-5 border-t border-gray-100 pt-4">
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <a href={`mailto:${inquiry.email}`} className="flex items-center gap-1.5 hover:text-blue-600">
                  <Mail className="size-4" /> {inquiry.email}
                </a>
                <a href={`tel:${inquiry.phone}`} className="flex items-center gap-1.5 hover:text-blue-600">
                  <Phone className="size-4" /> {inquiry.phone}
                </a>
              </div>
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{inquiry.message}</p>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => toggleRead(inquiry.id, !inquiry.read)}
                  className="text-xs text-gray-500 hover:text-gray-800 underline underline-offset-2"
                >
                  Mark as {inquiry.read ? "unread" : "read"}
                </button>
                <button
                  onClick={() => deleteInquiry(inquiry.id)}
                  className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 ml-auto"
                >
                  <Trash2 className="size-3.5" /> Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
