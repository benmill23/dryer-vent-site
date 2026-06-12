import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const title = `${site.name} | ${site.city}, ${site.state} | Same-Day Service`;
const description = `Professional dryer vent cleaning in ${site.city}, ${site.state}. Prevent fires, lower energy bills, and extend dryer life. Licensed & insured, ${site.yearsExperience} years experience, same-day service. Call ${site.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "dryer vent cleaning",
    `dryer vent cleaning ${site.city}`,
    "dryer vent cleaning near me",
    "dryer vent inspection",
    "dryer fire prevention",
    `${site.city} ${site.state} dryer vent`,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [{ url: "/logo.png", width: 600, height: 883, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
