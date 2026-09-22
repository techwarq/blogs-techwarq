"use client";

import { useEffect } from "react";

const COPY_SVG =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
const CHECK_SVG =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#28c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

/**
 * Injects a working copy button into every server-rendered
 * `.codeblock` header on the page.
 */
export default function CodeblockCopy() {
  useEffect(() => {
    const blocks = Array.from(document.querySelectorAll(".codeblock"));
    const cleanups: (() => void)[] = [];

    blocks.forEach((block) => {
      if (block.querySelector(".copy-btn")) return;
      const bar = block.querySelector(".codeblock-bar");
      const code = block.querySelector("pre code");
      if (!bar || !code) return;

      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.type = "button";
      btn.setAttribute("aria-label", "Copy code");
      btn.innerHTML = COPY_SVG;

      let timer: ReturnType<typeof setTimeout> | null = null;
      const onClick = async () => {
        const ok = await copyText((code as HTMLElement).innerText);
        btn.innerHTML = ok ? CHECK_SVG : COPY_SVG;
        btn.classList.toggle("copied", ok);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          btn.innerHTML = COPY_SVG;
          btn.classList.remove("copied");
        }, 1600);
      };

      btn.addEventListener("click", onClick);
      bar.appendChild(btn);
      cleanups.push(() => {
        if (timer) clearTimeout(timer);
        btn.removeEventListener("click", onClick);
        btn.remove();
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
