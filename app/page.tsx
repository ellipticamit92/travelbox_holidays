import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js 16 + shadcn/ui + Tailwind CSS 4
          </h1>
          <p className="text-lg text-muted-foreground">
            Your project is ready to go! Start building amazing things.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </main>
    </div>
  );
}
