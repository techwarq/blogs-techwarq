import { ImageResponse } from "next/og";
import { OgCard } from "./og-card";

export const runtime = "edge";
export const alt = "techwarq — blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function HomeOgImage() {
  return new ImageResponse(
    (
      <OgCard
        title="build without the noise."
        tag="hey, it's techwarq — how to build through the ai mess"
      />
    ),
    { ...size }
  );
}
