import { ImageResponse } from "next/og";
import { getPost } from "@/lib/posts";
import { OgCard } from "@/app/og-card";

export const runtime = "edge";
export const alt = "techwarq blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function PostOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return new ImageResponse(
    (
      <OgCard
        title={post?.title ?? "techwarq"}
        tag={post?.tag ?? "blog"}
      />
    ),
    { ...size }
  );
}
