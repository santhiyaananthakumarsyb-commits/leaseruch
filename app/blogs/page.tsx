import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "../../components/PageBanner";
import { blogPosts } from "../../data/blogs";
import "../../styles/blogs.css";

export const metadata: Metadata = {
  title: "Blogs | LeaseRush AI",
  description:
    "Articles and guides on lease abstraction, AI and commercial real estate from LeaseRush.",
};

function FolderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1H3z" />
      <path d="M3 10h20l-2 8a2 2 0 0 1-2 1.5H5a2 2 0 0 1-2-1.5z" />
    </svg>
  );
}

export default function BlogsPage() {
  return (
    <>
      <PageBanner title="Blogs" />

      <section className="blogs-section">
        <ul className="blogs-list">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <a className="blog-row" href={`/blogs/${post.slug}`}>
                <span className="blog-row-image">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="70px"
                  />
                </span>

                <span className="blog-row-text">
                  <span className="blog-row-category">
                    <FolderIcon />
                    {post.category}
                  </span>
                  <span className="blog-row-title">{post.title}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}