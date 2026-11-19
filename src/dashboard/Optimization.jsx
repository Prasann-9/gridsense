
import { useState } from "react";
import { BrainCircuit, Zap, IndianRupee, TrendingUp } from "lucide-react";
import {
  ResponsiveContainer, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, ZAxis
} from "recharts";

import { optimizationOptions } from "../data/networkData";

const paretoData = [
  { capex: 8.5, savings: 3.2, roi: 37.6 },
  { capex: 14, savings: 5.4, roi: 38.5 },
  { capex: 22, savings: 7.1, roi: 32.3 },
  { capex: 29, savings: 9.3, roi: 32.1 },
  { capex: 38, savings: 11.8, roi: 31.0 },
  { capex: 48, savings: 14.2, roi: 29.6 }
];

export default function Optimization() {
  const [budget, setBudget] = useState(30);
  const [stageA, setStageA] = useState(false);
  const [stageB, setStageB] = useState(false);

  const availableOptions = optimizationOptions.filter(
    item => item.capex <= budget
  );

  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <div className="page-eyebrow">LAYER 03 / AI OPTIMIZATION CORE</div>
          <h1>AI Optimization Center</h1>
          <p>Explore switching opportunities and infrastructure investment scenarios.</p>
        </div>
        <span className="demo-label">SIMULATION PREVIEW</span>
      </div>

      <div className="optimization-intro">
        <div>
          <Zap size={24}/>
          <span>
            <b>Stage A — Zero-Capex</b>
            <small>LinDistFlow MILP / switching concept</small>
          </span>
          <button onClick={() => setStageA(!stageA)}>
            {stageA ? "Reset" : "Simulate"}
          </button>
        </div>

        <div>
          <BrainCircuit size={24}/>
          <span>
            <b>Stage B — Capex Ranking</b>
            <small>NSGA-II / investment concept</small>
          </span>
          <button onClick={() => setStageB(!stageB)}>
            {stageB ? "Reset" : "Simulate"}
          </button>
        </div>
      </div>

      {stageA && (
        <div className="simulation-result">
          <Zap size={20}/>
          <div>
            <b>Stage A demo scenario selected</b>
            <p>
              Zero-hardware-cost switching workflow selected for
              demonstration. No electrical switching configuration
              has actually been solved or validated.
            </p>
          </div>
        </div>
      )}

      {stageB && (
        <div className="simulation-result">
          <BrainCircuit size={20}/>
          <div>
            <b>Stage B demo scenario selected</b>
            <p>
              Illustrative infrastructure candidates are filtered
              using the selected budget. This is not an NSGA-II run.
            </p>
          </div>
        </div>
      )}

      <div className="optimization-grid">
        <div className="workspace-panel budget-panel">
          <div className="panel-title">
            <div>
              <h3>Investment budget</h3>
              <p>Configure a hypothetical budget cap</p>
            </div>
            <IndianRupee/>
          </div>

          <div className="large-budget">₹{budget} Lakhs</div>

          <input
            type="range"
            min="5"
            max="50"
            step="5"
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />

          <div className="range-labels">
            <span>₹5L</span>
            <span>₹50L</span>
          </div>

          <div className="budget-summary">
            <div>
              <small>ELIGIBLE DEMO OPTIONS</small>
              <b>{availableOptions.length}</b>
            </div>
            <div>
              <small>BUDGET CAP</small>
              <b>₹{budget}L</b>
            </div>
          </div>
        </div>

        <div className="workspace-panel">
          <div className="panel-title">
            <div>
              <h3>Investment Pareto preview</h3>
              <p>Capex versus illustrative annual savings</p>
            </div>
            <TrendingUp/>
          </div>

          <ResponsiveContainer width="100%" height={290}>
            <ScatterChart margin={{top:15,right:15,bottom:15,left:5}}>
              <CartesianGrid stroke="#203747" strokeDasharray="3 3"/>
              <XAxis
                type="number"
                dataKey="capex"
                name="Capex"
                unit=" L"
                stroke="#91a6b6"
                label={{value:"Capex (₹ Lakhs)",position:"insideBottom",offset:-8,fill:"#91a6b6"}}
              />
              <YAxis
                type="number"
                dataKey="savings"
                name="Annual savings"
                unit=" L"
                stroke="#91a6b6"
              />
              <ZAxis dataKey="roi" range={[70,150]}/>
              <Tooltip
                cursor={{strokeDasharray:"3 3"}}
                contentStyle={{background:"#102436",border:"1px solid #315166"}}
              />
              <Scatter data={paretoData} fill="#38d5b2"/>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="workspace-panel table-panel">
        <div className="panel-title">
          <div>
            <h3>Infrastructure recommendations</h3>
            <p>Budget-filtered illustrative investment candidates</p>
          </div>
          <BrainCircuit/>
        </div>

        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Recommended Action</th>
                <th>Capex (₹L)</th>
                <th>Annual Savings (₹L)</th>
                <th>Indicative ROI</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {availableOptions.map(item => (
                <tr key={item.id}>
                  <td><b>{item.asset}</b></td>
                  <td>{item.action}</td>
                  <td>{item.capex}</td>
                  <td>{item.savings}</td>
                  <td>{item.roi}%</td>
                  <td>
                    <span className={`status-pill ${item.priority.toLowerCase()}`}>
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {availableOptions.length === 0 && (
          <p className="empty-selection">
            No illustrative investment options fit this budget.
          </p>
        )}
      </div>

      <div className="analytics-note">
        <BrainCircuit size={18}/>
        <span>
          All investment costs, savings and ROI figures are hypothetical.
          The Pareto preview uses sample points and does not represent
          a computed NSGA-II Pareto front.
        </span>
      </div>
    </div>
  );
}
