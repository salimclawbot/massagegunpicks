import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getAllSlugs } from "@/lib/articles";

interface PageProps {
  params: { slug: string };
}

const SITE_URL = "https://sleeproductpicks.vercel.app";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return { title: "Not Found" };

  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: { canonical: `${SITE_URL}/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/${article.slug}`,
      type: "article",
      siteName: "Sleep Picks",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  const articleSchema = article.articleSchema ?? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: article.author || "Dr. Emma Nguyen" },
    publisher: {
      "@type": "Organization",
      name: "Sleep Picks",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    },
    datePublished: article.date,
    dateModified: article.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${article.slug}` },
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {article.faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.faqSchema) }} />
      )}
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{article.category}</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">{article.title}</h1>
      <p className="mt-3 text-slate-600">By {article.author} · Updated {article.dateModified}</p>
      <div className="prose prose-slate mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
    </article>
  );
}
