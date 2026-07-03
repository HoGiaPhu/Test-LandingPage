"use client";

import { useEffect, useRef } from "react";
import { useToast } from "@/contexts/ToastContext";

const SCROLL_MILESTONES = [25, 50, 75, 100];

export default function AnalyticsTracker() {
  const { showToast } = useToast();
  const firedScroll = useRef<Set<number>>(new Set());
  const firedClick = useRef<Set<string>>(new Set());

  useEffect(() => {
    function track(event: string, detail?: string) {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event,
          detail,
          path: window.location.pathname,
        }),
      }).catch(() => {});
    }

    function onScroll() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.round((window.scrollY / scrollable) * 100);

      SCROLL_MILESTONES.forEach((milestone) => {
        if (percent >= milestone && !firedScroll.current.has(milestone)) {
          firedScroll.current.add(milestone);
          track("scroll_depth", `${milestone}%`);
          if (milestone === 50) {
            showToast(`Bạn đã khám phá ${milestone}% hành trình Vision Pro`);
          }
          if (milestone === 100) {
            showToast("Bạn đã xem toàn bộ trang — cảm ơn bạn!");
          }
        }
      });
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const trackable = target.closest("[data-track]");
      if (!trackable) return;
      const name = trackable.getAttribute("data-track");
      if (!name || firedClick.current.has(name)) return;
      firedClick.current.add(name);
      track("click", name);
    }

    track("page_view");
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, [showToast]);

  return null;
}
