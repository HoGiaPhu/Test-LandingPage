"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  Film,
  Globe,
  Map,
  Music,
  StickyNote,
  X,
  type LucideIcon,
} from "lucide-react";

type SimulatorModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type PreviewType = "browser" | "photos" | "cinema" | "music" | "map" | "notes";

type SpatialApp = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  defaultX: number;
  defaultY: number;
  width: number;
  height: number;
  accent: string;
  preview: PreviewType;
};

const spatialApps: SpatialApp[] = [
  {
    id: "safari",
    name: "Safari",
    icon: Globe,
    description: "Duyệt web trong không gian",
    defaultX: 32,
    defaultY: 56,
    width: 320,
    height: 220,
    accent: "from-sky-500/30 to-blue-600/10",
    preview: "browser",
  },
  {
    id: "photos",
    name: "3D Photos",
    icon: Box,
    description: "Ảnh sống động ba chiều",
    defaultX: 380,
    defaultY: 40,
    width: 260,
    height: 200,
    accent: "from-violet-500/25 to-fuchsia-600/10",
    preview: "photos",
  },
  {
    id: "cinema",
    name: "Cinema",
    icon: Film,
    description: "Rạp chiếu phim cá nhân",
    defaultX: 200,
    defaultY: 180,
    width: 340,
    height: 210,
    accent: "from-amber-500/20 to-orange-600/10",
    preview: "cinema",
  },
  {
    id: "music",
    name: "Music",
    icon: Music,
    description: "Âm thanh không gian",
    defaultX: 560,
    defaultY: 120,
    width: 240,
    height: 190,
    accent: "from-pink-500/25 to-rose-600/10",
    preview: "music",
  },
  {
    id: "maps",
    name: "Maps",
    icon: Map,
    description: "Định vị ba chiều",
    defaultX: 48,
    defaultY: 200,
    width: 250,
    height: 180,
    accent: "from-emerald-500/25 to-teal-600/10",
    preview: "map",
  },
  {
    id: "notes",
    name: "Notes",
    icon: StickyNote,
    description: "Ghi chú nổi trong không gian",
    defaultX: 480,
    defaultY: 220,
    width: 230,
    height: 170,
    accent: "from-yellow-500/20 to-amber-600/10",
    preview: "notes",
  },
];

function WindowPreview({ type }: { type: PreviewType }) {
  if (type === "browser") {
    return (
      <div className="flex h-full flex-col gap-2 p-2">
        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5">
          <div className="h-1.5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="space-y-2 px-1">
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-full rounded bg-white/5" />
          <div className="h-2 w-5/6 rounded bg-white/5" />
          <div className="mt-3 h-14 rounded-lg bg-gradient-to-br from-galaxy-blue/20 to-transparent" />
        </div>
      </div>
    );
  }

  if (type === "photos") {
    return (
      <div className="grid h-full grid-cols-3 gap-1.5 p-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md bg-gradient-to-br from-white/15 to-white/5"
            style={{ opacity: 1 - i * 0.08 }}
          />
        ))}
      </div>
    );
  }

  if (type === "cinema") {
    return (
      <div className="relative flex h-full items-center justify-center rounded-lg bg-black/50">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <Film className="h-4 w-4 text-white/80" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    );
  }

  if (type === "music") {
    return (
      <div className="flex h-full items-center gap-3 p-3">
        <div className="h-14 w-14 shrink-0 rounded-lg bg-gradient-to-br from-pink-500/40 to-violet-600/30" />
        <div className="flex flex-1 items-end gap-1 pb-1">
          {[40, 65, 35, 80, 50, 70, 45].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-galaxy-blue/50"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "map") {
    return (
      <div className="relative h-full overflow-hidden p-2">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-0 h-px w-full bg-white/20" />
          <div className="absolute top-0 left-1/2 h-full w-px bg-white/20" />
        </div>
        <div className="absolute top-1/3 left-1/3 h-3 w-3 rounded-full bg-galaxy-blue shadow-[0_0_12px_#0A84FF]" />
        <div className="absolute right-4 bottom-4 h-8 w-12 rounded-md bg-emerald-500/20" />
      </div>
    );
  }

  return (
    <div className="space-y-2 p-3">
      <div className="h-2 w-2/3 rounded bg-white/15" />
      <div className="h-1.5 w-full rounded bg-white/8" />
      <div className="h-1.5 w-5/6 rounded bg-white/8" />
      <div className="h-1.5 w-4/5 rounded bg-white/5" />
    </div>
  );
}

function SpatialWindow({
  app,
  zIndex,
  onFocus,
  containerRef,
  index,
}: {
  app: SpatialApp;
  zIndex: number;
  onFocus: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  index: number;
}) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={containerRef}
      onPointerDown={onFocus}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.55,
        delay: 0.08 + index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.02,
        y: -8,
        boxShadow: "0 28px 56px rgba(10, 132, 255, 0.22)",
      }}
      whileDrag={{
        scale: 1.05,
        boxShadow: "0 36px 72px rgba(10, 132, 255, 0.4)",
        cursor: "grabbing",
      }}
      className="glass-panel absolute cursor-grab touch-none overflow-hidden rounded-2xl active:cursor-grabbing"
      style={{
        left: app.defaultX,
        top: app.defaultY,
        width: app.width,
        height: app.height,
        zIndex,
      }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${app.accent} opacity-60`}
      />

      <div className="relative flex items-center gap-2 border-b border-white/8 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex flex-1 items-center justify-center gap-1.5">
          <app.icon className="h-3 w-3 text-on-surface/70" strokeWidth={1.5} />
          <span className="font-label-sm text-[11px] tracking-wide text-on-surface/80">
            {app.name}
          </span>
        </div>
      </div>

      <div className="relative h-[calc(100%-40px)]">
        <WindowPreview type={app.preview} />
      </div>
    </motion.div>
  );
}

export default function SimulatorModal({ isOpen, onClose }: SimulatorModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusedId, setFocusedId] = useState<string>("cinema");

  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, handleClose]);

  function getZIndex(id: string) {
    if (focusedId === id) return 40;
    const order = spatialApps.findIndex((a) => a.id === id);
    return 10 + order;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl"
            onClick={handleClose}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-3 z-[101] flex flex-col overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60 md:inset-6 lg:inset-10"
            role="dialog"
            aria-modal="true"
            aria-label="visionOS Simulator"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient spatial environment */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-high via-surface-dim to-surface-container-lowest" />
            <div className="simulator-grid pointer-events-none absolute inset-0 opacity-40" />
            <motion.div
              className="pointer-events-none absolute top-[15%] left-[20%] h-72 w-72 rounded-full bg-galaxy-blue/15 blur-[100px]"
              animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute right-[15%] bottom-[25%] h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]"
              animate={{ opacity: [0.2, 0.35, 0.2], scale: [1.05, 1, 1.05] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Header */}
            <div className="relative z-20 flex items-center justify-between border-b border-white/10 bg-surface/50 px-5 py-4 backdrop-blur-xl md:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-galaxy-blue/30 bg-galaxy-blue/15">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-galaxy-blue shadow-[0_0_8px_#0A84FF]" />
                </div>
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-galaxy-blue">
                    visionOS Simulator
                  </p>
                  <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                    Trải nghiệm thực tế
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Đóng simulator"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-on-surface-variant transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Spatial canvas */}
            <div className="relative z-10 min-h-0 flex-1 overflow-hidden">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pointer-events-none absolute top-4 left-1/2 z-[5] -translate-x-1/2 text-center font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant/50 md:text-label-sm"
              >
                Nhấp giữ và kéo để di chuyển ứng dụng trong không gian
              </motion.p>

              <div
                ref={containerRef}
                className="absolute inset-0 origin-top-left scale-[0.52] sm:scale-[0.72] md:scale-100"
              >
              <AnimatePresence>
                {spatialApps.map((app, index) => (
                  <SpatialWindow
                    key={app.id}
                    app={app}
                    index={index}
                    zIndex={getZIndex(app.id)}
                    onFocus={() => setFocusedId(app.id)}
                    containerRef={containerRef}
                  />
                ))}
              </AnimatePresence>
              </div>
            </div>

            {/* visionOS Dock */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 flex justify-center px-4 pb-5 pt-2"
            >
              <div className="glass-panel flex items-center gap-2 rounded-full border border-white/12 px-3 py-2.5 shadow-xl shadow-black/30 md:gap-3 md:px-4">
                {spatialApps.map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => setFocusedId(app.id)}
                    aria-label={`Focus ${app.name}`}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 md:h-11 md:w-11 ${
                      focusedId === app.id
                        ? "scale-110 bg-galaxy-blue/25 shadow-[0_0_16px_rgba(10,132,255,0.35)]"
                        : "bg-white/5 hover:scale-105 hover:bg-white/10"
                    }`}
                  >
                    <app.icon
                      className={`h-5 w-5 ${focusedId === app.id ? "text-galaxy-blue" : "text-on-surface/70"}`}
                      strokeWidth={1.5}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
