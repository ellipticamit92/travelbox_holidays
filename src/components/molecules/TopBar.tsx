"use client";

import { EMAIL, PHONE_NUMBER_TWO } from "@/app/constants/constants";
import { Phone, Mail } from "lucide-react";

interface TopBarProps {
  phone?: string;
  email?: string;
  className?: string;
}
("");
export function TopBar({
  phone = PHONE_NUMBER_TWO,
  email = EMAIL,
}: TopBarProps) {
  return (
    <div
      className="hidden md:block bg-primary text-primary-foreground py-2"
      aria-hidden="true"
    >
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2  transition-colors hover:text-accent"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">{phone}</span>
            <span className="sm:hidden">{phone.split(" ")[0]}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Mail className="size-4" />
            <span className="hidden sm:inline">{email}</span>
            <span className="sm:hidden truncate max-w-[120px]">
              {email.split("@")[0]}
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span>Best Travel Agency in Patna</span>
        </div>
      </div>
    </div>
  );
}
