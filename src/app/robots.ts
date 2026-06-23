import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/_next/static/", "/_next/image/"],
      disallow: ["/api/", "/_next/data/"],
    },
    sitemap: "https://sedra-almaani.com/sitemap.xml",
  };
}

