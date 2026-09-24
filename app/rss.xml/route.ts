import { POSTS } from "@/lib/posts";
import { SITE_URL as SITE } from "@/lib/site";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const items = POSTS.map((p) => {
    const url = `${SITE}/blog/${p.slug}`;
    const pubDate = p.datePublished
      ? new Date(p.datePublished).toUTCString()
      : new Date("2026-09-24").toUTCString();
    return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`;
  }).join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>techwarq — blog</title>
    <link>${SITE}</link>
    <description>hey, it's techwarq. how to build without the ai jargon and mess — how to pick and build meaningful stuff.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
