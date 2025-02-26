"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative inline-block w-11 h-5">
      <input
        checked={theme === "light"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        id="switch-component-1"
        type="checkbox"
        className="peer appearance-none w-11 h-5 bg-light-primary dark:bg-dark-primary rounded-full checked:bg-dark-primary dark:checked:bg-light-primary cursor-pointer transition-colors duration-300"
      />
      <label
        htmlFor="switch-component-1"
        className="absolute top-0 left-0 w-5 h-5 p-1 bg-light-content/90 dark:bg-dark-content/80 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6 cursor-pointer">
        {theme === "light" ? <Sun size={12} color="black" /> : <Moon size={12} color="white" />}
      </label>
    </div>
  );
}
