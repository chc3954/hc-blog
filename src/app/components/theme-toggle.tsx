"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(storedTheme === "dark" || (!storedTheme && prefersDark));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode, mounted]);

  if (!mounted) {
    return <div className="relative inline-block w-11 h-5 bg-gray-40 animate-pulse rounded-full" />;
  }

  return (
    <div className="relative inline-block w-11 h-5">
      <input
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        id="switch-component-1"
        type="checkbox"
        className="peer appearance-none w-11 h-5 bg-light-primary rounded-full dark:checked:bg-white/30 cursor-pointer transition-colors duration-300"
      />
      <label
        htmlFor="switch-component-1"
        className="absolute top-0 left-0 w-5 h-5 p-1 bg-light-content/90 dark:bg-dark-content/80 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6 cursor-pointer">
        {isDarkMode ? <Moon size={12} color="white" /> : <Sun size={12} color="black" />}
      </label>
    </div>
  );
}
