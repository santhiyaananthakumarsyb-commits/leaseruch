import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import { faqs } from "../../data/faqs";
import "../../styles/faqs.css";

export const metadata: Metadata = {
  title: "FAQs | LeaseRush AI",
  description:
    "Answers to common questions about LeaseRush lease abstraction services.",
};

export default function FaqsPage() {
  return (
    <>
      <PageBanner title="FAQs" />

      <section className="faq-section">
        <div className="faq-inner">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}