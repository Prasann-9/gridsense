
const phases = [
  {
    number: "01",
    time: "Weeks 1–3",
    title: "Data Ingestion",
    description: "GIS, SCADA and AMI onboarding."
  },
  {
    number: "02",
    time: "Weeks 4–8",
    title: "AI Validation",
    description: "Switching and Capex optimization."
  },
  {
    number: "03",
    time: "Weeks 9–12",
    title: "Field Verification",
    description: "Engineering validation and handover."
  }
];

export default function TiscPilot() {
  return (
    <section className="tisc-section" id="tisc">
      <div className="eyebrow">
        TISC 2026 • GOVERNMENT PILOT PROPOSAL
      </div>

      <h2>
        From one division
        <br/>
        to a <span>smarter grid.</span>
      </h2>

      <p>
        A structured 90-day pilot to validate GridSense AI
        using real distribution network data.
      </p>

      <div className="timeline">
        {phases.map(phase => (
          <div className="timeline-item" key={phase.number}>
            <span>{phase.number}</span>
            <small>{phase.time}</small>
            <b>{phase.title}</b>
            <p>{phase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
