
import Image from "next/image";
import "../styles/floating.css";

export default function FloatingCall() {
  return (
    <div className="floating-contact">
      <div className="floating-contact-card">
        <div className="floating-contact-heading">
          <Image
            src="/leaserush-logo.png"
            alt="LeaseRush logo"
            width={28}
            height={28}
            className="floating-contact-logo"
          />

          <span>Speak to know more</span>
        </div>

        <a
          href="tel:+914435865206"
          className="floating-call"
          aria-label="Call LeaseRush at +91 44 3586 5206"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />
          </svg>

          <span>Start a call</span>
        </a>
      </div>

      <a
        href="/#contact"
        className="schedule-meeting"
      >
        Schedule a Meeting
      </a>
    </div>
  );
}
