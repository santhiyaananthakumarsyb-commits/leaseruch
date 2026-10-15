"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full items-center bg-white shadow-md transition-all duration-300 ${
        scrolled ? "h-[70px]" : "h-[100px]"
      }`}
    >
      <a href="/" className="relative z-10 ml-4 flex shrink-0 items-center">
        <Image
          src="/LeaseRush.jpg"
          alt="LeaseRush - Accurate Abstraction Faster"
          width={280}
          height={80}
          priority
          className={`h-auto object-contain transition-all duration-300 ${
            scrolled ? "w-[170px] md:w-[190px]" : "w-[220px] md:w-[280px]"
          }`}
        />
      </a>

      <div
        className="absolute inset-y-0 right-0 w-[48%] bg-[#f4512b] transition-all duration-300"
        style={{
          clipPath: scrolled
            ? "polygon(0 0, 100% 0, 100% 100%, 70px 100%)"
            : "polygon(0 0, 100% 0, 100% 100%, 100px 100%)",
        }}
      />

      <nav className="relative z-10 ml-auto flex h-full items-center gap-5 px-4 md:gap-7 md:px-5">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="whitespace-nowrap text-sm font-bold text-[#00145b] md:text-base"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}