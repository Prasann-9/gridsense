
import { useState } from "react";
import { Activity, Search, AlertTriangle } from "lucide-react";
import { demoFeeders } from "../data/networkData";

export default function FeederAnalytics() {
  const [search, setSearch] = useState("");

  const filtered = demoFeeders.filter(f =>
    `${f.id} ${f.name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <div className="page-eyebrow">LAYER 02 / PHYSICS ENGINE</div>
          <h1>Feeder Analytics</h1>
          <p>Monitor loading, voltage and indicative technical losses.</p>
        </div>
        <span className="demo-label">DEMO DATA</span>
      </div>

      <div className="workspace-panel table-panel">
        <div className="panel-title">
          <div>
            <h3>Feeder health register</h3>
            <p>Illustrative network asset measurements</p>
          </div>
          <Activity/>
        </div>

        <div className="table-search">
          <Search size={17}/>
          <input
            placeholder="Search feeder ID or name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Feeder ID</th>
                <th>Feeder Name</th>
                <th>Peak Loading</th>
                <th>Voltage (p.u.)</th>
                <th>Losses (%)</th>
                <th>DTRs</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map(f => (
                <tr key={f.id}>
                  <td><b>{f.id}</b></td>
                  <td>{f.name}</td>
                  <td>
                    <div className="loading-cell">
                      <span>{f.peakLoading}%</span>
                      <div className="loading-track">
                        <i style={{
                          width: `${Math.min(f.peakLoading,100)}%`,
                          background: f.peakLoading >= 100
                            ? "#f05b62"
                            : f.peakLoading >= 90
                              ? "#efb34f" : "#38d5b2"
                        }}/>
                      </div>
                    </div>
                  </td>
                  <td>{f.voltage.toFixed(2)}</td>
                  <td>{f.losses.toFixed(1)}%</td>
                  <td>{f.dtrs}</td>
                  <td>
                    <span className={`status-pill ${f.status.toLowerCase()}`}>
                      {f.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <p className="empty-selection">No matching feeders found.</p>
        )}
      </div>

      <div className="analytics-note">
        <AlertTriangle size={18}/>
        <span>
          Loading and voltage thresholds shown here are demo indicators.
          Actual thermal and voltage limits must be configured using
          the utility's equipment ratings and operating standards.
        </span>
      </div>
    </div>
  );
}
