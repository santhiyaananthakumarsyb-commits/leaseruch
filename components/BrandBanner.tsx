import Image from "next/image";
import "../styles/brand-banner.css";

export default function BrandBanner() {
  return (
    <section className="brand-banner">
      <div className="brand-banner-card">
        <Image
          src="/LeaseRush.jpg"
          alt="LeaseRush - Accurate Abstraction Faster"
          width={1250}
          height={360}
          sizes="(max-width: 1300px) 90vw, 1250px"
          className="brand-banner-image"
        />
      </div>
    </section>
  );
}