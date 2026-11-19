
import {
  Activity, Cable, Radio, IndianRupee
} from "lucide-react";

const cases = [
  [Activity, "DTR Overload Prevention",
    "Identify thermal bottlenecks before equipment failure."],
  [Cable, "Smart Reconductoring",
    "Prioritize conductor upgrades using loss and ROI analysis."],
  [Radio, "Feeder Load Balancing",
    "Redistribute load using optimal switching configurations."],
  [IndianRupee, "Capex Prioritization",
    "Direct limited budgets towards the highest-impact assets."]
];

export default function UseCases() {
  return (
    <section className="section usecases">
      <div className="section-heading">
        <div className="eyebrow">BUILT FOR DISTRIBUTION UTILITIES</div>
        <h2>Solving the problems <span>that matter.</span></h2>
      </div>

      <div className="usecase-grid">
        {cases.map(([Icon, title, desc]) => (
          <div className="usecase-card" key={title}>
            <Icon size={25}/>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
