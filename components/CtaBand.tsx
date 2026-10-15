import Image from "next/image";
import type { ReactNode } from "react";
import "../styles/cta-band.css";

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const features: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Quick Response",
    text: "Fast turnaround on every lease we abstract.",
    icon: (
      <IconWrap>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </IconWrap>
    ),
  },
  {
    title: "Experienced Team",
    text: "Specialists in commercial real estate leases.",
    icon: (
      <IconWrap>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
      </IconWrap>
    ),
  },
  {
    title: "Assured Results",
    text: "AI speed with human-verified accuracy.",
    icon: (
      <IconWrap>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </IconWrap>
    ),
  },
];

function Laurel() {
  const leaves: { x: number; y: number; rot: number }[] = [];

  for (const side of [-1, 1]) {
    for (let i = 0; i < 7; i++) {
      const theta = ((20 + i * 18) * Math.PI) / 180;
      const R = 44;
      const x = 60 + side * R * Math.sin(theta);
      const y = 58 + R * Math.cos(theta);
      const dx = side * R * Math.cos(theta);
      const dy = -R * Math.sin(theta);
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      leaves.push({ x, y, rot: angle + side * 25 });
    }
  }

  return (
    <svg
      className="cta-laurel"
      viewBox="0 0 120 120"
      aria-hidden="true"
      fill="#ffffff"
      stroke="#ffffff"
    >
      {leaves.map((leaf, index) => (
        <ellipse
          key={index}
          cx={leaf.x}
          cy={leaf.y}
          rx="11"
          ry="4.5"
          transform={`rotate(${leaf.rot} ${leaf.x} ${leaf.y})`}
          stroke="none"
        />
      ))}
      <path
        d="M44 106 L76 94 M76 106 L44 94"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function CtaBand() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-visual">
          <div className="cta-frame">
            <div className="cta-frame-inner">
              <Laurel />
              <p className="cta-frame-text">Your Reliable Partner</p>
            </div>
          </div>

          <div className="cta-person">
            <Image
              src="/cta-person.png"
              alt="Confident LeaseRush professional giving a thumbs up"
              fill
              sizes="(max-width: 900px) 70vw, 30vw"
            />
          </div>
        </div>

        <div className="cta-content">
          <h2 className="cta-heading">
            Start Your <span className="cta-ai">AI</span> Lease Abstraction
            Journey Now!!!
          </h2>

          <div className="cta-cards">
            {features.map((feature) => (
              <div key={feature.title} className="cta-card">
                <span className="cta-card-icon">{feature.icon}</span>
                <div>
                  <h3 className="cta-card-title">{feature.title}</h3>
                  <p className="cta-card-text">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}