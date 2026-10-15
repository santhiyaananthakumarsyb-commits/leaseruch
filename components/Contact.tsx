"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { countryCodes, leaseTypes, dataTemplates } from "../data/contact";
import "../styles/contact.css";

function Icon({
  children,
  color = "#f4512b",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons = {
  user: (
    <Icon>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </Icon>
  ),
  mail: (
    <Icon>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  ),
  phone: (
    <Icon>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </Icon>
  ),
  building: (
    <Icon>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2M10 21v-4h4v4" />
    </Icon>
  ),
  file: (
    <Icon>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </Icon>
  ),
  list: (
    <Icon>
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </Icon>
  ),
  chat: (
    <Icon>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z" />
    </Icon>
  ),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Backend comes later. For now we only show a thank-you message.
    setSubmitted(true);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* ===== Left: navy info panel ===== */}
        <aside className="contact-panel">
          <p className="contact-panel-label">Get in touch</p>

          <h2 className="contact-panel-title">
            Together Towards <span>Excellence</span>
          </h2>

          <p className="contact-panel-text">
            Send us your lease documents and our team will take it from there.
          </p>

          <ul className="contact-rows">
            <li className="contact-row">
              <span className="contact-row-icon">
                <Icon color="#ffffff">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </Icon>
              </span>
              <div>
                <p className="contact-row-label">Have a Question?</p>
                <a
                  className="contact-row-value"
                  href="mailto:enquiry@leaserushai.com"
                >
                  enquiry@leaserushai.com
                </a>
              </div>
            </li>

            <li className="contact-row">
              <span className="contact-row-icon">
                <Icon color="#ffffff">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </Icon>
              </span>
              <div>
                <p className="contact-row-label">Office Hours</p>
                <p className="contact-row-value">
                  Mon - Friday, 10.00am - 7.00pm
                </p>
                <p className="contact-row-note">
                  Sat, Sun &amp; Public Holidays (Closed)
                </p>
              </div>
            </li>
          </ul>

          <div className="contact-buttons">
            <a className="contact-btn contact-btn-solid" href="#contact-form">
              Download a sample Lease Abstract
            </a>
            <a
              className="contact-btn contact-btn-outline"
              href="mailto:enquiry@leaserushai.com?subject=Sample%20Lease%20Document&body=Please%20find%20attached%20my%20sample%20lease%20document%20for%20free%20abstraction."
            >
              Submit a sample Lease Document for free Abstraction
            </a>
          </div>
        </aside>

        {/* ===== Right: form card ===== */}
        <div className="contact-card" id="contact-form">
          <h2 className="contact-form-heading">Contact Us</h2>

          {submitted ? (
            <div className="contact-thanks">
              <h3>Thank you!</h3>
              <p>We received your message and will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="name">
                  {icons.user} <span>Name</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">
                  {icons.mail} <span>Email</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="mobile">
                  {icons.phone} <span>Mobile</span>
                </label>
                <div className="contact-mobile-row">
                  <select name="countryCode" aria-label="Country code">
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="leaseType">
                  {icons.building} <span>Lease Type</span>
                </label>
                <select id="leaseType" name="leaseType" defaultValue="">
                  <option value="" disabled>
                    Select lease type
                  </option>
                  {leaseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="template">
                  {icons.file} <span>Data Template</span>
                </label>
                <select id="template" name="template" defaultValue="">
                  <option value="" disabled>
                    Select template type
                  </option>
                  {dataTemplates.map((template) => (
                    <option key={template} value={template}>
                      {template}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="count">
                  {icons.list} <span>Number of Leases</span>
                </label>
                <input
                  id="count"
                  name="count"
                  type="number"
                  min="1"
                  placeholder="Enter number of leases"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message">
                  {icons.chat} <span>Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message"
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}