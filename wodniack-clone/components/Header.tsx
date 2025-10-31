"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b border-[var(--foreground)] border-opacity-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
          Antoine Wodniack
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:opacity-60 transition-opacity"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="hover:opacity-60 transition-opacity"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:opacity-60 transition-opacity"
          >
            Contact
          </button>
          <a
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            CodePen
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            LinkedIn
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
          >
            Change contrast
          </button>
          <a
            href="#contact"
            className="hidden md:block px-4 py-2 bg-[var(--foreground)] text-[var(--background)] hover:opacity-80 transition-opacity"
          >
            Hire me →
          </a>
        </div>
      </div>
    </header>
  );
}
