"use client";

import { useEffect, useState } from "react";
import "../styles/hero.css";

const slides = [
  {
    image: "/hero-1.jpg",
    title: "Transform your lease experience",
    description: "Abstract your leases in less time.",
    label: "Accurate Abstraction Faster",
  },
  {
    image: "/hero-2.jpg",
    title: "Reduce your cost and time",
    description: "Streamline your lease abstraction workflow.",
    label: "Expand Your Margins",
  },
  {
    image: "/hero-3.jpg",
    title: "AI powered. Human verified.",
    description: "Bring greater efficiency to lease abstraction.",
    label: "A Proven Performance",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  function changeSlide(direction: number) {
    setActive(
      (current) =>
        (current + direction + slides.length) % slides.length
    );
  }

  return (
    <section className="hero-slider">
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`hero-background ${
            active === index ? "hero-background-active" : ""
          }`}
          style={{ backgroundImage: `url("${item.image}")` }}
          aria-hidden="true"
        />
      ))}

      <div className="hero-overlay" />

      <div key={active} className="hero-content hero-text-animate">
        <p className="hero-label">{slide.label}</p>

        <h1 className="hero-title">{slide.title}</h1>

        <p className="hero-description">{slide.description}</p>

        <a className="hero-button" href="#contact">
          Schedule a Meeting <span aria-hidden="true">↗</span>
        </a>
      </div>

      <button
        className="hero-arrow hero-arrow-left"
        onClick={() => changeSlide(-1)}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={() => changeSlide(1)}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="hero-dots">
        {slides.map((item, index) => (
          <button
            key={item.image}
            className={`hero-dot ${
              active === index ? "hero-dot-active" : ""
            }`}
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={active === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
