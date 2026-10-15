import Image from "next/image";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-images">
          <div className="about-image about-image-main">
            <Image
              src="/about_img_1.jpg"
              alt="Team reviewing lease documents"
              fill
              sizes="(max-width: 900px) 90vw, 35vw"
            />
          </div>
          <div className="about-image about-image-small">
            <Image
              src="/about_img_2.jpg"
              alt="Lease abstraction specialist at work"
              fill
              sizes="(max-width: 900px) 50vw, 20vw"
            />
          </div>
        </div>

        <div className="about-text">
          <p className="about-label">Specialists in CRE Lease Abstraction</p>
          <h2 className="about-title">
            Fast, Accurate and Reliable Lease Abstraction!
          </h2>

          <p>
            At Lease Rush, we understand that time is of the essence. Finding
            critical details hidden within 50+ page lease documents can be
            tedious and time-consuming, yet it&apos;s crucial for effective
            property management. Our lease abstraction service is designed to
            meet the fast-paced demands of today&apos;s commercial real estate
            (CRE) professionals.
          </p>

          <p>
            Artificial Intelligence (AI) is revolutionizing the lease
            abstraction process. It sifts through every word, clause, and
            section with precision, providing a detailed and meaningful
            abstract.
          </p>

          <p>
            We combine cutting-edge AI technology with expert human oversight to
            ensure 100% accuracy. Our AI-driven system rapidly processes
            leases, while our skilled team performs a thorough quality check to
            guarantee nothing is missed.
          </p>

          <p className="about-closing">
            When you need lease abstraction done quickly and correctly, Lease
            Rush is your trusted partner.
          </p>
        </div>
      </div>
    </section>
  );
}