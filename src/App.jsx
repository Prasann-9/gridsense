
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Architecture from "./components/Architecture";
import Technology from "./components/Technology";
import Dashboard from "./components/Dashboard";
import UseCases from "./components/UseCases";
import TiscPilot from "./components/TiscPilot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import DashboardLayout from "./dashboard/DashboardLayout";
import Overview from "./dashboard/Overview";
import NetworkMap from "./dashboard/NetworkMap";
import FeederAnalytics from "./dashboard/FeederAnalytics";
import Optimization from "./dashboard/Optimization";
import Reports from "./dashboard/Reports";
import UploadData from "./dashboard/UploadData";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Architecture />
        <Technology />
        <Dashboard />
        <UseCases />
        <TiscPilot />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="network" element={<NetworkMap />} />
        <Route path="feeders" element={<FeederAnalytics />} />
        <Route path="optimization" element={<Optimization />} />
        <Route path="upload" element={<UploadData />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}
