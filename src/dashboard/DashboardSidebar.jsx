
import { NavLink, Link } from "react-router-dom";
import {
  Zap, LayoutDashboard, Map, Activity,
  BrainCircuit, Upload, FileText, ArrowLeft
} from "lucide-react";

const navigation = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/network", label: "GIS Network", icon: Map },
  { to: "/dashboard/feeders", label: "Feeder Analytics", icon: Activity },
  { to: "/dashboard/optimization", label: "AI Optimization", icon: BrainCircuit },
  { to: "/dashboard/upload", label: "Data Ingestion", icon: Upload },
  { to: "/dashboard/reports", label: "Reports", icon: FileText }
];

export default function DashboardSidebar() {
  return (
    <aside className="workspace-sidebar">
      <Link to="/" className="workspace-brand">
        <span className="brand-icon"><Zap size={20}/></span>
        <span>GridSense <b>AI</b></span>
      </Link>

      <div className="sidebar-caption">ENGINEERING WORKSPACE</div>

      <nav className="workspace-nav">
        {navigation.map(({to,label,icon:Icon,end}) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({isActive}) => isActive ? "workspace-link active" : "workspace-link"}
          >
            <Icon size={18}/>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="system-status">
          <span className="status-indicator"/>
          Demo environment active
        </div>

        <Link to="/" className="back-home">
          <ArrowLeft size={16}/> Back to website
        </Link>
      </div>
    </aside>
  );
}
