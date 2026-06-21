import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import { site } from "@/lib/site";

// Wide 1200x630 social card: white background with the logo centered.
// Renders the rich link preview shown in iMessage, Slack, Facebook, etc.
export const alt = `${site.name} — ${site.tagline} in ${site.city}, ${site.state}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt={site.name} height={460} />
      </div>
    ),
    size,
  );
}
