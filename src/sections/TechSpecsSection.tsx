"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AudioWaveform, Cpu, Eye, Ratio, Scan } from "lucide-react";

const specs = [
  {
    icon: Cpu,
    title: "M2 & R1",
    label: "Sức mạnh xử lý kép",
    description:
      "Chip M2 cung cấp hiệu năng đỉnh cao, trong khi chip R1 hoàn toàn mới xử lý dữ liệu cảm biến với độ trễ gần như bằng không.",
  },
  {
    icon: Ratio,
    title: "23 Triệu",
    label: "Điểm ảnh Micro-OLED",
    description:
      "Hệ thống hiển thị tùy chỉnh đóng gói nhiều điểm ảnh hơn một TV 4K cho mỗi mắt, mang lại độ sắc nét đáng kinh ngạc.",
  },
  {
    icon: Eye,
    title: "Eye Tracking",
    label: "Cảm biến & theo dõi mắt",
    description:
      "LED và camera hồng ngoại theo dõi điểm nhìn theo thời gian thực. Nhìn để chọn, chạm hai ngón tay để thao tác — không cần tay cầm.",
  },
  {
    icon: AudioWaveform,
    title: "Spatial Audio",
    label: "Âm thanh không gian",
    description:
      "Âm thanh vòm quanh như phát ra từ không gian thực. Audio Ray Tracing phân tích phòng để tái tạo âm thanh chân thực nhất.",
  },
];

type Phase = "idle" | "scanning" | "revealed";

function SpecSkeleton() {
  return (
    <div className="glass-panel flex h-[250px] animate-pulse flex-col gap-4 rounded-2xl p-8">
      <div className="h-12 w-12 rounded-full bg-white/10" />
      <div className="h-8 w-1/2 rounded-md bg-white/10" />
      <div className="mt-auto h-4 w-3/4 rounded-md bg-white/10" />
      <div className="h-4 w-2/3 rounded-md bg-white/10" />
    </div>
  );
}

function LaserScanOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-2xl">
      <motion.div
        className="absolute top-0 h-full w-48 bg-gradient-to-r from-transparent via-galaxy-blue/30 to-transparent"
        style={{ boxShadow: "0 0 60px rgba(10, 132, 255, 0.6)" }}
        initial={{ left: "-20%" }}
        animate={{ left: "120%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 bottom-0 w-px bg-galaxy-blue"
        style={{ boxShadow: "0 0 20px #0A84FF" }}
        initial={{ left: "0%" }}
        animate={{ left: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-galaxy-blue/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function TechSpecsSection() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (phase !== "scanning") return;
    const timer = setTimeout(() => setPhase("revealed"), 2200);
    return () => clearTimeout(timer);
  }, [phase]);

  function handleScan() {
    if (phase === "scanning") return;
    setPhase("scanning");
  }

  return (
    <section
      id="specs"
      className="mx-auto max-w-container-max border-t border-white/5 px-margin-mobile py-section-gap md:px-gutter"
    >
      <h2 className="mb-stack-lg text-center font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg">
        Công nghệ cốt lõi
      </h2>

      <AnimatePresence mode="wait">
        {phase === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-stack-lg"
          >
            <p className="max-w-md text-center font-body-md text-body-md text-on-surface-variant">
              Kích hoạt quét không gian để phân tích và hiển thị thông số kỹ thuật
              chi tiết của hệ thống.
            </p>
            <button
              type="button"
              onClick={handleScan}
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest"
            >
              <Scan className="h-4 w-4" />
              Quét không gian
            </button>
          </motion.div>
        )}

        {phase === "scanning" && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
              <SpecSkeleton />
              <SpecSkeleton />
              <SpecSkeleton />
              <SpecSkeleton />
            </div>
            <LaserScanOverlay />
            <p className="mt-stack-md text-center font-label-sm text-label-sm uppercase tracking-widest text-galaxy-blue">
              Đang quét không gian...
            </p>
          </motion.div>
        )}

        {phase === "revealed" && (
          <motion.div
            key="revealed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-stack-md md:grid-cols-2"
          >
            {specs.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel group relative flex h-[250px] flex-col overflow-hidden rounded-2xl p-8"
              >
                <spec.icon
                  className="absolute -right-10 -bottom-10 h-[150px] w-[150px] text-on-surface opacity-10"
                  strokeWidth={1}
                />
                <h3 className="font-display-2xl-mobile text-display-2xl-mobile text-gradient-blue mb-2">
                  {spec.title}
                </h3>
                <p className="mb-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                  {spec.label}
                </p>
                <p className="mt-auto font-body-md text-body-md text-on-surface">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
