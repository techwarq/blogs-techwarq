import { createHighlighter, type Highlighter } from "shiki";

const THEME = "dark-plus"; // VS Code Dark+
const LANGS = ["bash", "json", "python", "text"] as const;

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [THEME],
      langs: [...LANGS],
    });
  }
  return highlighterPromise;
}

function unescapeHtml(s: string) {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

const BLOCK_RE =
  /<pre><code(?: class="language-([\w-]+)")?>([\s\S]*?)<\/code><\/pre>/g;

/**
 * Replaces <pre><code class="language-x"> blocks in post HTML with
 * VS Code Dark+ highlighted blocks (static HTML, zero client JS).
 */
export async function highlightPostHtml(html: string): Promise<string> {
  const highlighter = await getHighlighter();
  return html.replace(BLOCK_RE, (_m, lang: string | undefined, code: string) => {
    const language = (lang || "text").toLowerCase();
    const supported = (LANGS as readonly string[]).includes(language)
      ? language
      : "text";
    const raw = unescapeHtml(code).replace(/^\n+|\n+$/g, "");
    const highlighted = highlighter.codeToHtml(raw, {
      lang: supported,
      theme: THEME,
    });
    return (
      `<div class="codeblock" data-lang="${supported}">` +
      `<div class="codeblock-bar"><span class="cdot r"></span>` +
      `<span class="cdot y"></span><span class="cdot g"></span>` +
      `<span class="codeblock-lang">${supported}</span></div>` +
      highlighted +
      `</div>`
    );
  });
}
