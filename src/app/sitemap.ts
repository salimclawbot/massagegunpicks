import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sleeproductpicks.vercel.app";

  return [
    ...["", "about", "contact", "privacy", "affiliate-disclosure"].map((path) => ({
      url: `${baseUrl}/${path}`,
      lastModified: new Date("2026-03-11"),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.5,
    })),
    ...getAllSlugs().map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date("2026-03-11"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
