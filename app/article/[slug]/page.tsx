import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articlesContent, type ArticleBlock } from "@/lib/articles-content";

export async function generateStaticParams() {
  return articlesContent.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesContent.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="article-body-heading">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul key={index} className="article-body-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={index} className="article-body-quote">
          {block.text}
        </blockquote>
      );
    case "table":
      return (
        <div key={index} className="article-body-table-wrap">
          <table className="article-body-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <p key={index} className="article-body-paragraph">
          {block.text}
        </p>
      );
  }
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesContent.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = articlesContent
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <style>{`
        :root {
          --navy: #004276;
          --navy-light: #005a9e;
          --yellow: #FACC15;
          --yellow-dark: #CA8A04;
          --white: #FFFFFF;
          --off-white: #F8FAFC;
          --gray-100: #F1F5F9;
          --gray-200: #E2E8F0;
          --gray-500: #64748B;
          --gray-700: #334155;
        }

        .article-page {
          font-family: 'DM Sans', sans-serif;
          background: var(--off-white);
          color: var(--gray-700);
        }

        .article-hero {
          position: relative;
          height: 420px;
          overflow: hidden;
        }

        .article-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,25,55,0.55) 0%, rgba(0,20,45,0.85) 100%);
        }

        .article-hero-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 48px;
          max-width: 800px;
          margin: 0 auto;
        }

        .article-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--yellow);
          text-decoration: none;
          margin-bottom: 20px;
        }

        .article-hero-category {
          display: inline-block;
          background: var(--yellow);
          color: var(--navy);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;
          padding: 5px 12px;
          border-radius: 2px;
          margin-bottom: 16px;
        }

        .article-hero-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .article-hero-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
        }

        .article-hero-meta-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
        }

        .article-body-wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 64px 48px 24px;
        }

        .article-body-excerpt {
          font-size: 17px;
          font-weight: 400;
          color: var(--gray-700);
          line-height: 1.7;
          border-left: 3px solid var(--yellow);
          padding-left: 20px;
          margin-bottom: 40px;
        }

        .article-body-paragraph {
          font-size: 15px;
          font-weight: 300;
          color: var(--gray-700);
          line-height: 1.9;
          margin-bottom: 24px;
        }

        .article-body-heading {
          font-size: 21px;
          font-weight: 700;
          color: var(--navy);
          margin: 40px 0 16px;
          line-height: 1.35;
        }

        .article-body-list {
          margin: 0 0 24px;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .article-body-list li {
          font-size: 15px;
          font-weight: 300;
          color: var(--gray-700);
          line-height: 1.75;
        }

        .article-body-quote {
          margin: 32px 0;
          padding: 24px 28px;
          background: rgba(0,66,118,0.05);
          border-left: 3px solid var(--navy);
          border-radius: 0 3px 3px 0;
          font-size: 16px;
          font-weight: 400;
          font-style: italic;
          color: var(--navy);
          line-height: 1.7;
        }

        .article-body-table-wrap {
          margin: 8px 0 32px;
          overflow-x: auto;
          border: 1px solid var(--gray-200);
          border-radius: 6px;
        }

        .article-body-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13.5px;
        }

        .article-body-table thead tr {
          background: var(--navy);
        }

        .article-body-table th {
          text-align: left;
          font-weight: 700;
          color: var(--white);
          padding: 12px 16px;
          white-space: nowrap;
        }

        .article-body-table td {
          padding: 12px 16px;
          font-weight: 300;
          color: var(--gray-700);
          border-top: 1px solid var(--gray-200);
        }

        .article-body-table tbody tr:nth-child(even) {
          background: var(--gray-100);
        }

        .article-body-table td:first-child,
        .article-body-table th:first-child {
          font-weight: 700;
          color: var(--navy);
          white-space: nowrap;
        }

        .article-author-box {
          max-width: 720px;
          margin: 32px auto 0;
          padding: 24px 48px;
          border-top: 1px solid var(--gray-200);
        }

        .article-author-inner {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .article-author-avatar {
          width: 44px; height: 44px;
          background: var(--navy);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--yellow);
          font-weight: 700;
          font-size: 15px;
          flex-shrink: 0;
        }

        .article-author-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--navy);
        }

        .article-author-role {
          font-size: 12px;
          font-weight: 300;
          color: var(--gray-500);
        }

        .article-related-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 48px 96px;
        }

        .article-related-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 24px;
        }

        .article-related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .article-related-card {
          text-decoration: none;
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 4px;
          overflow: hidden;
          display: block;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .article-related-card:hover {
          box-shadow: 0 10px 32px rgba(0,66,118,0.12);
          transform: translateY(-3px);
        }

        .article-related-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: var(--gray-100);
        }

        .article-related-content {
          padding: 16px 18px 18px;
          border-top: 3px solid var(--yellow);
        }

        .article-related-cat {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--navy-light);
          margin-bottom: 8px;
          display: block;
        }

        .article-related-card-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .article-hero { height: 340px; }
          .article-hero-content { padding: 32px 24px; }
          .article-body-wrap { padding: 40px 24px 16px; }
          .article-author-box { padding: 24px 24px 0; }
          .article-related-wrap { padding: 40px 24px 64px; }
        }
      `}</style>

      <div className="article-page">
        <section className="article-hero">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
          <div className="article-hero-overlay" />
          <div className="article-hero-content">
            <Link href="/insights" className="article-back-link">
              ← BACK TO INSIGHTS
            </Link>
            <span className="article-hero-category">{article.category}</span>
            <h1 className="article-hero-title">{article.title}</h1>
            <div className="article-hero-meta">
              <span>{article.date}</span>
              <span className="article-hero-meta-dot" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </section>

        <div className="article-body-wrap">
          <p className="article-body-excerpt">{article.excerpt}</p>
          {article.body.map((block, i) => renderBlock(block, i))}
        </div>

        <div className="article-author-box">
          <div className="article-author-inner">
            <div className="article-author-avatar">
              {article.author
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <p className="article-author-name">{article.author}</p>
              <p className="article-author-role">{article.authorRole}</p>
            </div>
          </div>
        </div>

        <div className="article-related-wrap">
          <h3 className="article-related-title">More Articles</h3>
          <div className="article-related-grid">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/article/${a.slug}`}
                className="article-related-card"
              >
                <div className="article-related-image">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="article-related-content">
                  <span className="article-related-cat">{a.category}</span>
                  <p className="article-related-card-title">{a.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}