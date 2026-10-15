import { processSteps } from "../data/process";
import "../styles/process.css";

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <h2 className="process-heading">Our Process</h2>

        <div className="process-grid">
          {processSteps.map((item) => (
            <div key={item.step} className="process-item">
              <div className="process-circle">
                <div
                  className="process-photo"
                  style={{ backgroundImage: `url("${item.image}")` }}
                  role="img"
                  aria-label={item.title}
                />

                <div className="process-icon" aria-hidden="true">
                  <span>{item.icon === "info" ? "i" : "➜"}</span>
                </div>

                <div className="process-badge">Step {item.step}</div>
              </div>

              <h3 className="process-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}