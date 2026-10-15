import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "../../components/PageBanner";
import "../../styles/about-page.css";

export const metadata: Metadata = {
  title: "About Us | LeaseRush AI",
  description:
    "LeaseRush combines AI with expert human review to deliver fast, accurate and cost-effective lease abstraction for commercial real estate.",
};

const stats = [
  { value: "100%", label: "Quality" },
  { value: "60%", label: "Reduced TAT & Cost" },
  { value: "AI + Human", label: "Hybrid Review" },
];

const reasons = [
  {
    title: "Quick Response",
    text: "Fast turnaround on every lease we abstract.",
  },
  {
    title: "Experienced Team",
    text: "Specialists in commercial real estate leases.",
  },
  {
    title: "Assured Results",
    text: "AI speed with human-verified accuracy.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageBanner title="About Us" />

      <section className="ap-intro">
        <div className="ap-intro-image">
          <Image
            src="/hero-3.jpg"
            alt="LeaseRush team reviewing lease documents"
            fill
            sizes="(max-width: 900px) 90vw, 45vw"
          />
        </div>

        <div className="ap-intro-text">
          <p className="ap-label">Who We Are</p>
          <h2 className="ap-title">AI Speed. Human Accuracy.</h2>

          <p>
            LeaseRushAI.com is a technology platform owned and operated by
            Vidyut Data Private Limited. We specialize in AI-powered lease
            abstraction and management services, ensuring efficiency and
            accuracy for our clients.
          </p>

          <p>
            Our AI-driven system rapidly processes leases, while our skilled
            team performs a thorough quality check to guarantee nothing is
            missed. This hybrid approach delivers abstracts that are fast,
            accurate and reliable.
          </p>
        </div>
      </section>

      <section className="ap-stats">
        <div className="ap-stats-inner">
          {stats.map((stat) => (
            <div key={stat.label} className="ap-stat">
              <p className="ap-stat-value">{stat.value}</p>
              <p className="ap-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-why">
        <p className="ap-label ap-center">Why Choose Us</p>
        <h2 className="ap-title ap-center">Your Reliable Partner</h2>

        <div className="ap-why-grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="ap-why-card">
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>

        <a className="ap-button" href="/#contact">
          Get a Free Sample Abstraction
        </a>
      </section>
    </>
  );
}