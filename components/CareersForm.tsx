"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { openings } from "../data/careers";

export default function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Backend comes later. For now we only show a thank-you message.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="careers-thanks">
        <h3>Thank you!</h3>
        <p>We received your application and will contact you if it is a match.</p>
      </div>
    );
  }

  return (
    <form className="careers-form" onSubmit={handleSubmit}>
      <div className="careers-field">
        <label htmlFor="c-name">Full Name</label>
        <input id="c-name" type="text" placeholder="Enter your name" required />
      </div>

      <div className="careers-field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" type="email" placeholder="Enter your email" required />
      </div>

      <div className="careers-field">
        <label htmlFor="c-phone">Phone</label>
        <input id="c-phone" type="tel" placeholder="Enter your phone number" required />
      </div>

      <div className="careers-field">
        <label htmlFor="c-role">Position</label>
        <select id="c-role" defaultValue="" required>
          <option value="" disabled>
            Select a position
          </option>
          {openings.map((job) => (
            <option key={job.title} value={job.title}>
              {job.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="careers-field">
        <label htmlFor="c-resume">Resume</label>
        <input id="c-resume" type="file" accept=".pdf,.doc,.docx" />
      </div>

      <div className="careers-field">
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" rows={4} placeholder="Tell us about yourself" />
      </div>

      <button type="submit" className="careers-submit">
        Submit Application
      </button>
    </form>
  );
}