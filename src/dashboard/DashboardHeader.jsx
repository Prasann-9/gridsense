
import { Bell, Search, CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="workspace-header">
      <div>
        <div className="header-breadcrumb">
          GridSense AI / Engineering
        </div>
        <h2>Distribution Intelligence Center</h2>
      </div>

      <div className="header-actions">
        <div className="header-search">
          <Search size={16}/>
          <span>Search feeders, DTRs...</span>
        </div>

        <button className="header-icon" aria-label="Notifications">
          <Bell size={19}/>
        </button>

        <div className="engineer-profile">
          <span>DE</span>
          <div>
            <b>Demo Engineer</b>
            <small>DISCOM Division</small>
          </div>
        </div>
      </div>
    </header>
  );
}
