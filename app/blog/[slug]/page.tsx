import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/posts";
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
  return { title: `${post.title} — techwarq`, description: post.excerpt };
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

  return (
    <div className="post-page">
      <div className="post-topbar">
        <Link className="post-brand" href="/">
          <img className="brand-logo" src="/favicon.ico" alt="techwarq logo" />
          techwarq
        </Link>
        <div className="post-topbar-right">
          <span>{post.date}</span>
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
