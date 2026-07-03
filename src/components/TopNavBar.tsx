"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon } from "lucide-react";
import SimulatorModal from "@/components/SimulatorModal";

const navLinks = [
  { href: "#products", label: "Sản phẩm" },
  { href: "#features", label: "Tính năng" },
  { href: "#specs", label: "Thông số" },
  { href: "#support", label: "Hỗ trợ" },
];

export default function TopNavBar() {
  const [simulatorOpen, setSimulatorOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-surface/80 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 ease-in-out">
        <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-gutter">
          <div className="font-display-2xl text-headline-lg-mobile font-bold tracking-tighter text-on-surface">
            Vision Pro
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60 transition-colors hover:text-on-surface"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Chuyển chế độ giao diện"
              className="text-on-surface/60 transition-all duration-300 hover:opacity-80"
            >
              <Moon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setSimulatorOpen(true)}
              className="hidden font-label-sm text-label-sm uppercase tracking-widest text-primary transition-all duration-300 hover:opacity-80 md:block"
            >
              Trải nghiệm
            </button>
          </div>
        </div>
      </nav>

      <SimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />
    </>
  );
}
