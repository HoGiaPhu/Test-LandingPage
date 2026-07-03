"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-track="theme_toggle"
      aria-label={theme === "dark" ? "Bật chế độ sáng" : "Bật chế độ tối"}
      className="text-on-surface/60 transition-all duration-300 hover:text-on-surface"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
