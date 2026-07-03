"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const SimulatorModal = dynamic(() => import("@/components/SimulatorModal"), {
  ssr: false,
});

export default function ExperienceButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-label-sm text-label-sm uppercase tracking-widest text-primary transition-all duration-300 hover:opacity-80"
      >
        Trải nghiệm
      </button>
      {open && (
        <SimulatorModal isOpen={open} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
