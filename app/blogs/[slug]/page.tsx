import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../data/blogs";
import "../../../styles/blog-post.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog | LeaseRush AI" };
  }

  return {
    title: `${post.title} | LeaseRush AI`,
    description: post.body[1],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const [heading, ...paragraphs] = post.body;

  return (
    <article className="bp-wrap">
      <div className="bp-cover">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1120px) 100vw, 1120px"
        />
      </div>

      <header className="bp-card">
        <p className="bp-category">{post.category}</p>
        <p className="bp-meta">
          By <strong>{post.author}</strong>
          <span className="bp-dot">•</span>
          On <strong>{post.date}</strong>
        </p>
        <hr className="bp-line" />
        <h1 className="bp-title">{post.title}</h1>
      </header>

      <div className="bp-body">
        <h2 className="bp-heading">{heading}</h2>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        <a className="bp-back" href="/blogs">
          ← Back to Blogs
        </a>
      </div>
    </article>
  );
}