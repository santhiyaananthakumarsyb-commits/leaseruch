import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import { termsIntro, termsSections } from "../../data/terms";
import "../../styles/terms.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | LeaseRush AI",
  description: "Terms and conditions for using LeaseRush AI services.",
};

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms & Conditions" />

      <section className="terms-section">
        <div className="terms-inner">
          <p className="terms-intro">{termsIntro}</p>

          {termsSections.map((section) => (
            <div key={section.title} className="terms-block">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}