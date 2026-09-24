import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { SITE_URL as SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.dateModified ?? p.datePublished ?? "2026-09-24",
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE,
      lastModified: "2026-09-24",
      changeFrequency: "daily",
      priority: 1,
    },
    ...posts,
  ];
}
