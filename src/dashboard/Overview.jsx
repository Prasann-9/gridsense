
import { Link } from "react-router-dom";
import {
  Activity, Network, AlertTriangle, IndianRupee,
  ArrowUpRight, Map, BrainCircuit
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area,
  XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

import { demoFeeders } from "../data/networkData";

const loadData = [
  { time: "00:00", load: 42 },
  { time: "04:00", load: 35 },
  { time: "08:00", load: 59 },
  { time: "12:00", load: 75 },
  { time: "16:00", load: 68 },
  { time: "20:00", load: 94 },
  { time: "23:00", load: 65 }
];

const cards = [
  { label: "TOTAL FEEDERS", value: "25", detail: "Demo monitored", icon: Network },
  { label: "TOTAL DTRs", value: "142", detail: "Demo assets", icon: Activity },
  { label: "CRITICAL ASSETS", value: "08", detail: "Illustrative alerts", icon: AlertTriangle },
  { label: "PLANNED CAPEX", value: "₹45L", detail: "Demo scenario", icon: IndianRupee }
];

export default function Overview() {
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <div className="page-eyebrow">NETWORK OVERVIEW</div>
          <h1>Good morning, Engineer</h1>
          <p>Monitor distribution network health and optimization opportunities.</p>
        </div>
        <span className="demo-label">ILLUSTRATIVE DATA</span>
      </div>

      <div className="overview-kpis">
        {cards.map(({label,value,detail,icon:Icon}) => (
          <div className="overview-card" key={label}>
            <div className="kpi-top">
              <span>{label}</span>
              <Icon size={19}/>
            </div>
            <strong>{value}</strong>
            <small>{detail}</small>
          </div>
        ))}
      </div>

      <div className="overview-grid">
        <div className="workspace-panel">
          <div className="panel-title">
            <div>
              <h3>Network loading trend</h3>
              <p>Illustrative daily feeder demand (%)</p>
            </div>
            <Activity size={19}/>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={loadData}>
              <defs>
                <linearGradient id="loadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38d5b2" stopOpacity={0.4}/>
                  <stop offset="100%" stopColor="#38d5b2" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#203747" strokeDasharray="3 3"/>
              <XAxis dataKey="time" stroke="#91a6b6"/>
              <YAxis stroke="#91a6b6"/>
              <Tooltip contentStyle={{background:"#102436",border:"1px solid #315166"}}/>
              <Area type="monotone" dataKey="load" stroke="#38d5b2"
                fill="url(#loadGradient)" strokeWidth={2}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="workspace-panel">
          <div className="panel-title">
            <div>
              <h3>Asset alerts</h3>
              <p>Demo feeder health flags</p>
            </div>
            <AlertTriangle size={19}/>
          </div>

          {demoFeeders.filter(f => f.status !== "Normal").map(f => (
            <div className="alert-row" key={f.id}>
              <div>
                <b>{f.id}</b>
                <small>{f.name}</small>
              </div>
              <span className={f.status === "Critical" ? "alert-critical" : "alert-warning"}>
                {f.status}
              </span>
            </div>
          ))}

          <Link className="panel-link" to="/dashboard/feeders">
            View feeder analytics <ArrowUpRight size={15}/>
          </Link>
        </div>
      </div>

      <div className="quick-actions">
        <Link to="/dashboard/network">
          <Map/>
          <span><b>Open GIS Network</b><small>Explore DTRs and feeder connections</small></span>
          <ArrowUpRight/>
        </Link>

        <Link to="/dashboard/optimization">
          <BrainCircuit/>
          <span><b>Run AI Optimization</b><small>Explore investment scenarios</small></span>
          <ArrowUpRight/>
        </Link>
      </div>
    </div>
  );
}
