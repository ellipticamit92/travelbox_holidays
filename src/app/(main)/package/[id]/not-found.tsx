import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="font-display text-4xl font-bold mb-4">Package Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The packages you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild size="lg">
            <Link href="/#destinations">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Packages
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

