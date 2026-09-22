import Link from "next/link";
import { POSTS } from "@/lib/posts";
import ThemeToggle from "./theme-toggle";
import Socials from "./socials";

function PixelWave() {
  const cols = 30;
  const rows = 14;
  const cells: { orange: boolean }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const surface =
        6 + 2.2 * Math.sin(c * 0.42) + 1.2 * Math.sin(c * 1.1 + 2);
      const density = Math.min(1, Math.max(0, (r - surface + 1.5) / 4));
      const hash = ((r * 31 + c * 17 + r * c * 7) % 100) / 100;
      cells.push({ orange: hash < density * 0.92 });
    }
  }
  return (
    <div className="pixel-panel" aria-hidden>
      <div
        className="pixel-grid"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {cells.map((cell, i) => (
          <span
            key={i}
            className={cell.orange ? "px on" : "px"}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Link className="brand-serif" href="/">
          <img className="brand-logo" src="/favicon.ico" alt="techwarq logo" />
          techwarq...
        </Link>
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </header>

      <main className="home-wrap">
        <h1 className="hey">Hey,</h1>
        <PixelWave />
        <p className="intro">
          It&apos;s techwarq. I talk about how to build through all the AI{" "}
          <span className="c-blue">jargon</span> and{" "}
          <span className="c-red">mess</span> — how to{" "}
          <span className="c-green">pick</span> and build{" "}
          <span className="c-yellow">meaningful</span>{" "}
          <span className="c-purple">stuff</span>, and how to actually ship it.
        </p>
        <p className="subnote">
          cutting through hype and building useful things is the whole point
        </p>

        <div id="posts" className="post-list">
          <p className="list-label">Blog</p>
          {POSTS.map((p) => (
            <Link key={p.slug} className="post-row" href={`/blog/${p.slug}`}>
              <div className="post-row-meta">
                <span>{p.date}</span>
                <span>{p.tag}</span>
              </div>
              <h2 className="post-row-title">{p.title}</h2>
              <p className="post-row-excerpt">{p.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="home-footer">
          <span>© techwarq</span>
          <Socials />
        </div>
      </main>
    </>
  );
}
