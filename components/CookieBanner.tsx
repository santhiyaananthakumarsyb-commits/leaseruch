"use client";

import { useEffect, useState } from "react";
import "../styles/floating.css";

const STORAGE_KEY = "leaserush-cookie-choice";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Runs only in the browser, so the server and browser render the same at first.
  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function choose(choice: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Storage can be blocked. The banner still closes for this visit.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie notice">
      <p>
        We use cookies to improve your experience on this site. Read our{" "}
        <a href="/terms-conditions">Terms and Conditions</a> for more details.
      </p>
      <div className="cookie-actions">
        <button
          type="button"
          className="cookie-decline"
          onClick={() => choose("declined")}
        >
          Decline
        </button>
        <button
          type="button"
          className="cookie-accept"
          onClick={() => choose("accepted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}