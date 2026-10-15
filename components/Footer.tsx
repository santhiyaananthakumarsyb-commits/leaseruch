"use client";

import type { FormEvent, ReactNode } from "react";
import Image from "next/image";
import "../styles/footer.css";

function Svg({ children }: { children: ReactNode }) {
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
      {children}
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQs", href: "/faqs" },
  { label: "Terms and Conditions", href: "/terms-conditions" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/61572907416968",
    icon: (
      <Svg>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </Svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/LeaseRush",
    icon: (
      <Svg>
        <path d="M18 6 6 18M6 6l12 12" />
      </Svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/leaserush/",
    icon: (
      <Svg>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </Svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/leaserush/",
    icon: (
      <Svg>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </Svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@LeaseRushai",
    icon: (
      <Svg>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </Svg>
    ),
  },
];

export default function Footer() {
  function handlePay(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Real PayPal payment is added in the backend phase.
    alert("PayPal payment will be connected in the backend phase.");
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* ===== Column 1: logo + contact ===== */}
        <div className="footer-col">
          <Image
            src="/LeaseRush.jpg"
            alt="LeaseRush - Accurate Abstraction Faster"
            width={240}
            height={70}
            className="footer-logo"
          />

          <p className="footer-contact-title">Contact</p>

          <ul className="footer-contact-list">
            <li>
              <Svg>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </Svg>
              <a href="tel:+914435865206">+91 44 3586 5206</a>
            </li>
            <li>
              <Svg>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </Svg>
              <a href="mailto:enquiry@leaserushai.com">
                enquiry@leaserushai.com
              </a>
            </li>
            <li>
              <Svg>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </Svg>
              <span>
                4, 7th Main Road, 3rd Cross Extn,
                <br />
                New Colony, Chromepet, Chennai - 600044.
              </span>
            </li>
          </ul>
        </div>

        {/* ===== Column 2: PayPal ===== */}
        <div className="footer-col">
          <h3 className="footer-heading footer-heading-plain">
            Pay Using PayPal
          </h3>

          <form className="footer-pay" onSubmit={handlePay}>
            <label htmlFor="pay-desc">Please enter a description:</label>
            <input
              id="pay-desc"
              type="text"
              placeholder="Service Description"
              required
            />

            <label htmlFor="pay-price">Please enter a price:</label>
            <input
              id="pay-price"
              type="number"
              min="1"
              step="0.01"
              placeholder="Price in USD"
              required
            />

            <button type="submit">Pay with PayPal</button>
          </form>
        </div>

        {/* ===== Column 3: quick links ===== */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>

          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <span aria-hidden="true">✓</span>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== Follow us + disclaimer ===== */}
      <div className="footer-extra">
        <div className="footer-follow">
          <span>Follow Us:</span>
          <div className="footer-socials">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <p className="footer-disclaimer">
          <strong>Disclaimer:</strong> LeaseRushAI.com is a technology platform
          owned and operated by Vidyut Data Private Limited. We specialize in
          AI-powered lease abstraction and management services, ensuring
          efficiency and accuracy for our clients. While we strive to provide
          reliable and secure data, LeaseRushAI does not guarantee the
          completeness, accuracy, or timeliness of the information provided.
          The content on this site is for informational purposes only and must
          not be redistributed, licensed, or sold without our prior written
          consent.
        </p>
      </div>

      {/* ===== Bottom bar ===== */}
      <div className="footer-bottom">
        <p>© LeaseRush, All rights reserved 2024</p>
        <nav>
          <a href="/terms-conditions">Terms &amp; Conditions</a>
          <a href="/blogs">Blogs</a>
          <a href="/faqs">FAQ&apos;s</a>
        </nav>
      </div>
    </footer>
  );
}