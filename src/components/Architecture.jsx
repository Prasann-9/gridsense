
import {
  Network, Activity, BrainCircuit, Map
} from "lucide-react";

const layers = [
  {
    number: "01",
    icon: Network,
    title: "GIS Digital Twin",
    tech: "GeoPandas + NetworkX",
    desc: "Ingest GIS shapefiles, DTR registers, conductor details and AMI/SCADA data. Automatically reconstruct and repair feeder topology."
  },
  {
    number: "02",
    icon: Activity,
    title: "Physics Engine",
    tech: "pandapower + OpenDSS",
    desc: "Run 8,760-hour three-phase power flows to identify overloaded DTRs, phase imbalance and low-voltage nodes."
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI Optimization Core",
    tech: "HiGHS MILP + NSGA-II",
    desc: "Exhaust zero-capex switching opportunities before ranking DTR additions, reconductoring and feeder bifurcation."
  },
  {
    number: "04",
    icon: Map,
    title: "Decision Dashboard",
    tech: "React + GIS",
    desc: "Visualize feeder bottlenecks, recommended upgrades, investment scenarios and GPS-level interventions."
  }
];

export default function Architecture() {
  return (
    <section className="section" id="platform">
      <div className="section-heading">
        <div className="eyebrow">THE GRID INTELLIGENCE PLATFORM</div>
        <h2>One platform. <span>Four powerful layers.</span></h2>
        <p>
          From raw utility data to actionable infrastructure
          investment decisions.
        </p>
      </div>

      <div className="architecture-grid">
        {layers.map(({number, icon: Icon, title, tech, desc}) => (
          <div className="architecture-card" key={number}>
            <div className="card-top">
              <span>{number} / LAYER</span>
              <Icon size={25}/>
            </div>

            <h3>{title}</h3>
            <div className="tech">{tech}</div>
            <p>{desc}</p>

            <a href="#technology">Explore layer →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
