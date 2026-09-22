"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "dark" : "light"
    );
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("techwarq-theme", next);
    } catch {
      /* ignore */
    }
  };

  if (!mounted) {
    return (
      <button className="pill" aria-label="Toggle theme">
        ○
      </button>
    );
  }

  return (
    <button className="pill" onClick={toggle} aria-label="Toggle theme">
      {theme === "dark" ? "☀ light" : "☾ dark"}
    </button>
  );
}
