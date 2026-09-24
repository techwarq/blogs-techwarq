import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";
import { highlightPostHtml } from "@/lib/highlight";
import ThemeToggle from "@/app/theme-toggle";
import Socials from "@/app/socials";
import CodeblockCopy from "@/app/codeblock-copy";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? `${post.title} — techwarq`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const bodyHtml = await highlightPostHtml(post.content);
  const site = SITE_URL;
  const pageUrl = `${site}/blog/${post.slug}`;

  const schemas: Record<string, unknown>[] = [];
  if (post.datePublished) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: post.seoTitle ?? post.title,
      description: post.excerpt,
      datePublished: post.datePublished,
      dateModified: post.dateModified ?? post.datePublished,
      author: { "@type": "Person", name: "Sonali Nayak" },
      publisher: {
        "@type": "Organization",
        name: "techwarq",
        logo: { "@type": "ImageObject", url: `${site}/favicon.ico` },
      },
      image: [`${pageUrl}/opengraph-image`],
      mainEntityOfPage: pageUrl,
      about: post.about ?? [],
    });
  }
  if (post.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return (
    <div className="post-page">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <div className="post-topbar">
        <Link className="post-brand" href="/">
          <img className="brand-logo" src="/favicon.ico" alt="techwarq logo" />
          techwarq
        </Link>
        <div className="post-topbar-right">
          <span>
            {post.date}
            {post.updatedLabel ? ` · Updated ${post.updatedLabel}` : ""}
          </span>
          <ThemeToggle />
        </div>
      </div>

      <article className="article">
        <Link className="back" href="/">
          ← All posts
        </Link>
        <p className="eyebrow">{post.tag}</p>
        <h1>{post.title}</h1>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
        <CodeblockCopy />
        <div className="post-socials">
          <Socials />
        </div>
        <div className="post-footer">
          <span>© techwarq</span>
          <Link className="back" style={{ margin: 0 }} href="/">
            ← All posts
          </Link>
        </div>
      </article>
    </div>
  );
}
