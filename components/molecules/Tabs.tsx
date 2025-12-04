"use client";

import { cn } from "@/lib/utils";
import { ComponentType } from "react";

interface Tab {
  id: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  inactiveBg?: "white" | "muted";
}

export function Tabs({
  tabs,
  activeTab,
  onTabChange,
  className,
  inactiveBg = "muted",
}: TabsProps) {
  const inactiveBgClasses = {
    white: "bg-background text-muted-foreground hover:bg-muted/50",
    muted: "bg-muted text-muted-foreground hover:bg-muted/80",
  };

  return (
    <div
      className={cn(
        "flex justify-center gap-4 mb-12 animate-fade-up animation-delay-200",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all",
            activeTab === tab.id
              ? "bg-primary text-primary-foreground shadow-lg"
              : inactiveBgClasses[inactiveBg]
          )}
          aria-selected={activeTab === tab.id}
          role="tab"
        >
          {tab.icon && <tab.icon className="h-5 w-5" />}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

