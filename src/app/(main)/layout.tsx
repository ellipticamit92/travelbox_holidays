import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { TopBar } from "@/components/molecules/TopBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
