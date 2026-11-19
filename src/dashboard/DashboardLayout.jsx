
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout() {
  return (
    <div className="workspace">
      <DashboardSidebar />
      <div className="workspace-main">
        <DashboardHeader />
        <div className="workspace-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
