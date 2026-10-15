import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import CareersForm from "../../components/CareersForm";
import { openings, perks } from "../../data/careers";
import "../../styles/careers.css";

export const metadata: Metadata = {
  title: "Careers | LeaseRush AI",
  description:
    "Join the LeaseRush team and help deliver fast, accurate lease abstraction for commercial real estate.",
};

export default function CareersPage() {
  return (
    <>
      <PageBanner title="Careers" />

      <section className="careers-intro">
        <p className="careers-label">Join Our Team</p>
        <h2 className="careers-title">Build Your Career With LeaseRush</h2>
        <p className="careers-lead">
          We combine AI with expert human review to deliver accurate lease
          abstraction. If you enjoy detail-oriented work and want to grow with
          us, we would like to hear from you.
        </p>

        <div className="careers-perks">
          {perks.map((perk) => (
            <div key={perk.title} className="careers-perk">
              <h3>{perk.title}</h3>
              <p>{perk.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="careers-openings">
        <div className="careers-inner">
          <h2 className="careers-title careers-center">Current Openings</h2>

          <ul className="careers-jobs">
            {openings.map((job) => (
              <li key={job.title} className="careers-job">
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.text}</p>
                </div>
                <div className="careers-job-tags">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="careers-apply" id="apply">
        <div className="careers-apply-card">
          <h2 className="careers-title careers-center">Apply Now</h2>
          <CareersForm />
        </div>
      </section>
    </>
  );
}