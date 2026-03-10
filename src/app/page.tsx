import { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getArticle } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Best Sleep Products for Better Rest (2026)",
  description:
    "Expert-tested pillows, toppers, and sleep support gear compared for better rest in 2026.",
  alternates: {
    canonical: "https://sleeproductpicks.vercel.app",
  },
};

export default async function HomePage() {
  const articles = (await Promise.all(getAllSlugs().map((slug) => getArticle(slug)))).filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Sleep Picks</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
          Best Sleep Products for Better Rest (2026)
        </h1>
        <p className="max-w-2xl text-xl text-slate-600">
          Expert-tested pillows, toppers, and sleep gear. Wake up without the aches.
        </p>
      </section>

      <section className="grid gap-6">
        {articles.map(
          (article) =>
            article && (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className="block rounded-xl border border-slate-200 p-6 transition-all hover:border-[#4f46e5] hover:shadow-md"
              >
                <h2 className="mb-2 text-xl font-semibold text-slate-900 transition-colors hover:text-[#4f46e5]">
                  {article.title}
                </h2>
                <p className="text-slate-600">{article.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-[#4f46e5]">Read guide →</span>
              </Link>
            ),
        )}
      </section>
    </main>
  );
}
