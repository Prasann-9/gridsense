
import { Cpu, BrainCircuit, ShieldCheck } from "lucide-react";

const steps = [
  ["01", "Physics Detection", "8,760-hour simulation"],
  ["02", "Spatial Pruning", "Reduce candidate search space"],
  ["03", "Hybrid Optimization", "MILP + NSGA-II"],
  ["04", "Investment Ranking", "Capex vs ROI Pareto front"]
];

export default function Technology() {
  return (
    <section className="technology section" id="technology">
      <div className="tech-copy">
        <div className="eyebrow">OUR TECHNICAL MOAT</div>
        <h2>Physics first.<br/><span>AI optimized.</span></h2>

        <p>
          GridSense AI combines deterministic electrical engineering
          with advanced mathematical optimization. Transparent,
          engineering-grounded recommendations.
        </p>

        <div className="tech-feature">
          <Cpu/>
          <div>
            <b>Stage A — Zero-Capex Optimization</b>
            <p>
              LinDistFlow MILP identifies optimal sectionalizing
              switch configurations before new infrastructure spending.
            </p>
          </div>
        </div>

        <div className="tech-feature">
          <BrainCircuit/>
          <div>
            <b>Stage B — Capex Optimization</b>
            <p>
              NSGA-II ranks DTR additions, reconductoring and
              bifurcation using cost and ROI trade-offs.
            </p>
          </div>
        </div>
      </div>

      <div className="process-card">
        <h3>The optimization funnel</h3>

        {steps.map(([number, title, desc], index) => (
          <div className="process-step" key={number}>
            <div className="step-number">{number}</div>
            <div>
              <b>{title}</b>
              <small>{desc}</small>
            </div>
            {index === 3 && <ShieldCheck className="step-check"/>}
          </div>
        ))}
      </div>
    </section>
  );
}
