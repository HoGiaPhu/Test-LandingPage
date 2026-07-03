"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { ShopProvider } from "@/contexts/ShopContext";
import { ToastProvider } from "@/contexts/ToastContext";
import dynamic from "next/dynamic";

const AnalyticsTracker = dynamic(() => import("@/components/AnalyticsTracker"), {
  ssr: false,
});

const VisionAssistant = dynamic(() => import("@/components/VisionAssistant"), {
  ssr: false,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ShopProvider>
        <ToastProvider>
          {children}
          <AnalyticsTracker />
          <VisionAssistant />
        </ToastProvider>
      </ShopProvider>
    </ThemeProvider>
  );
}
