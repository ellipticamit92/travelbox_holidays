"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Images,
  Globe,
  Home,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Gallery",
    href: "/dashboard/gallery",
    icon: Images,
  },
];

const siteLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Destinations",
    href: "/destinations",
    icon: Globe,
  },
];

interface DashboardSidebarProps {
  email: string;
  signOutAction: () => Promise<void>;
}

export function DashboardSidebar({ email, signOutAction }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border px-4 py-4">
        <div>
          <p className="font-semibold text-sidebar-foreground text-sm">TravelBox Admin</p>
          <p className="text-xs text-sidebar-foreground/60 truncate mt-0.5">{email}</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={cn(
                      pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    )}
                  >
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Website</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {siteLinks.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href} target="_blank">
                      <item.icon className="size-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <form action={signOutAction}>
          <button
            type="submit"
            className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="size-4" />
            Sign out
          </button>
        </form>
      </SidebarFooter>
    </Sidebar>
  );
}
