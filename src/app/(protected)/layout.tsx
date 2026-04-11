import { auth } from "@/auth";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: "/login" });
  }

  return (
    <SidebarProvider>
      <DashboardSidebar
        email={session.user?.email ?? ""}
        signOutAction={handleSignOut}
      />
      <div className="flex flex-col flex-1 min-h-screen bg-gray-50">
        <header className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3">
          <SidebarTrigger className="text-gray-500 hover:text-gray-900" />
          <span className="text-sm font-medium text-gray-700">
            TravelBox Admin
          </span>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
