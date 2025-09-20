import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quollex.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/studio/"], // block API routes & Sanity Studio if you have one
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
