
import { useState } from "react";
import {
  Gauge, Network, Activity, BrainCircuit,
  Building2, ShieldCheck, ArrowRight
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

import { feederData, networkMetrics } from "../data/dashboardData";

const menu = [
  [Gauge, "Overview"],
  [Network, "Feeders"],
  [Activity, "Bottlenecks"],
  [BrainCircuit, "Optimization"],
  [Building2, "Assets"]
];

export default function Dashboard() {
  const [budget, setBudget] = useState(50);
  const [optimized, setOptimized] = useState(false);

  return (
    <section className="section demo-section" id="demo">
      <div className="section-heading">
        <div className="eyebrow">INTERACTIVE PRODUCT PREVIEW</div>
        <h2>See the grid <span>differently.</span></h2>
        <p>
          Explore how engineers can evaluate feeders,
          simulate switching and plan investments.
        </p>
      </div>

      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <span className="dashboard-label">
              GRIDSENSE AI / COMMAND CENTER
            </span>
            <h3>Distribution Network Overview</h3>
          </div>
          <span className="demo-tag">DEMO ENVIRONMENT</span>
        </div>

        <div className="dash-grid">
          <aside className="dash-sidebar">
            {menu.map(([Icon, label], i) => (
              <div className={`sidebar-item ${i === 0 ? "active" : ""}`}
                key={label}>
                <Icon size={17}/>
                {label}
              </div>
            ))}
          </aside>

          <div className="dash-main">
            <div className="dash-kpis">
              {networkMetrics.map(item => (
                <div key={item.label}>
                  <small>{item.label}</small>
                  <b className={
                    item.label === "OVERLOADS" ||
                    item.label === "LOW VOLTAGE" ? "orange" : ""
                  }>
                    {item.value}
                  </b>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>

            <div className="dash-content">
              <div className="chart-panel">
                <div className="panel-heading">
                  <b>Feeder loading analysis</b>
                  <span>Peak loading (%)</span>
                </div>

                <ResponsiveContainer width="100%" height={235}>
                  <BarChart data={feederData}>
                    <CartesianGrid stroke="#243A4A" strokeDasharray="3 3"/>
                    <XAxis dataKey="name" stroke="#8EA5B5"/>
                    <YAxis stroke="#8EA5B5" domain={[0, 100]}/>
                    <Tooltip
                      contentStyle={{
                        background: "#102436",
                        border: "1px solid #315166"
                      }}
                    />
                    <Bar dataKey="before" fill="#EBAE50" name="Before"/>
                    <Bar dataKey="after" fill="#37CBB0" name="After"/>
                  </BarChart>
                </ResponsiveContainer>

                <div className="legend">
                  <span><i className="orange-bg"/> Before</span>
                  <span><i className="green-bg"/> After (illustrative)</span>
                </div>
              </div>

              <div className="optimization-panel">
                <b>Optimization controls</b>
                <p>Set hypothetical infrastructure budget</p>

                <div className="budget-value">
                  ₹{budget} Lakhs
                </div>

                <input
                  type="range"
                  min="10"
                  max="200"
                  step="10"
                  value={budget}
                  onChange={e => setBudget(Number(e.target.value))}
                />

                <div className="range-labels">
                  <span>₹10L</span>
                  <span>₹200L</span>
                </div>

                <button
                  className="btn-primary run-btn"
                  onClick={() => setOptimized(!optimized)}
                >
                  {optimized ? "Reset scenario" : "Run demo scenario"}
                  <ArrowRight size={16}/>
                </button>

                <div className="recommendation">
                  <ShieldCheck size={18}/>
                  <span>
                    {optimized
                      ? `Demo scenario selected with ₹${budget}L budget.`
                      : "Recommended: Zero-capex switching first."}
                  </span>
                </div>
              </div>
            </div>

            <p className="demo-disclaimer">
              Illustrative data only. Not actual DISCOM simulation results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
