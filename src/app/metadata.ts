import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quollex.vercel.app";
const siteName = "Quollex Blog";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Quollex Blog – Explore featured articles, categories, and insights from top authors.",
  keywords: [
    "Next.js Blog",
    "Sanity CMS",
    "Quollex",
    "Tech Articles",
    "Programming",
  ],
  authors: [{ name: "Quollex Team", url: siteUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description:
      "Quollex Blog – Explore featured articles, categories, and insights from top authors.",
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`, // static fallback image
        width: 1200,
        height: 630,
        alt: "Quollex Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Quollex Blog – Explore featured articles, categories, and insights from top authors.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@quollex",
  },
  alternates: {
    canonical: siteUrl,
  },
};
