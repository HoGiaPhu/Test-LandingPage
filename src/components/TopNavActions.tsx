"use client";

import ThemeToggle from "@/components/ThemeToggle";
import ShopPanel from "@/components/ShopPanel";

export default function TopNavActions() {
  return (
    <div className="flex items-center gap-4">
      <ThemeToggle />
      <ShopPanel />
      <span
        className="hidden font-label-sm text-label-sm uppercase tracking-widest text-primary sm:inline"
        aria-hidden
      >
        Trải nghiệm
      </span>
    </div>
  );
}
