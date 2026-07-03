"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Film, Globe, X } from "lucide-react";

type SimulatorModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const apps = [
  {
    id: "safari",
    name: "Safari",
    icon: Globe,
    description: "Duyệt web trong không gian",
    defaultX: 40,
    defaultY: 60,
    width: 280,
  },
  {
    id: "photos",
    name: "3D Photos",
    icon: Box,
    description: "Ảnh sống động ba chiều",
    defaultX: 320,
    defaultY: 40,
    width: 260,
  },
  {
    id: "cinema",
    name: "Cinema",
    icon: Film,
    description: "Rạp chiếu phim cá nhân",
    defaultX: 180,
    defaultY: 200,
    width: 300,
  },
];

export default function SimulatorModal({ isOpen, onClose }: SimulatorModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 z-[101] flex flex-col overflow-hidden rounded-3xl border border-white/10 md:inset-8"
            role="dialog"
            aria-modal="true"
            aria-label="visionOS Simulator"
          >
            <div className="absolute inset-0 bg-gradient-radial from-surface-container-high via-surface-dim to-surface-container-lowest" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,132,255,0.08)_0%,transparent_70%)]" />

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-surface/60 px-6 py-4 backdrop-blur-xl">
              <div>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-galaxy-blue">
                  visionOS Simulator
                </p>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                  Trải nghiệm thực tế
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng simulator"
                className="rounded-full border border-white/10 p-2 text-on-surface-variant transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              ref={containerRef}
              className="relative z-10 flex-1 overflow-hidden"
            >
              <p className="pointer-events-none absolute top-4 left-1/2 z-0 -translate-x-1/2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/60">
                Nhấp giữ và kéo để di chuyển ứng dụng
              </p>

              {apps.map((app, index) => (
                <motion.div
                  key={app.id}
                  drag
                  dragMomentum={false}
                  dragElastic={0.12}
                  dragConstraints={containerRef}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                    boxShadow: "0 24px 48px rgba(10, 132, 255, 0.2)",
                  }}
                  whileDrag={{
                    scale: 1.06,
                    boxShadow: "0 32px 64px rgba(10, 132, 255, 0.35)",
                    cursor: "grabbing",
                  }}
                  className="glass-panel absolute cursor-grab touch-none rounded-2xl p-5 active:cursor-grabbing"
                  style={{
                    left: app.defaultX,
                    top: app.defaultY,
                    width: app.width,
                  }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-galaxy-blue/20">
                      <app.icon className="h-5 w-5 text-galaxy-blue" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface">
                        {app.name}
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        {app.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-24 rounded-xl bg-surface-container-high/60 border border-white/5" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
