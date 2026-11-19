
import { Download, FileText, Activity, IndianRupee } from "lucide-react";

const reports = [
  {
    name: "Feeder Health Assessment",
    description: "Loading, voltage and bottleneck summary",
    date: "Demo report",
    icon: Activity
  },
  {
    name: "Infrastructure Investment Plan",
    description: "DTR and reconductoring candidate ranking",
    date: "Demo report",
    icon: IndianRupee
  },
  {
    name: "Network Asset Register",
    description: "Illustrative feeder and DTR inventory",
    date: "Demo report",
    icon: FileText
  }
];

function downloadReport(name) {
  const content = [
    "GridSense AI - Illustrative Engineering Report",
    `Report: ${name}`,
    "Environment: Demonstration only",
    "Data: Synthetic sample data",
    "",
    "This document is not an actual DISCOM engineering assessment."
  ].join("\n");

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = `${name.toLowerCase().replaceAll(" ", "-")}.txt`;
  anchor.click();

  URL.revokeObjectURL(url);
}

export default function Reports() {
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <div className="page-eyebrow">ENGINEERING DOCUMENTATION</div>
          <h1>Reports Center</h1>
          <p>Access illustrative network and investment reports.</p>
        </div>
        <span className="demo-label">DEMO REPORTS</span>
      </div>

      <div className="report-grid">
        {reports.map(({name,description,date,icon:Icon}) => (
          <div className="workspace-panel report-card" key={name}>
            <Icon size={27}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <small>{date}</small>

            <button
              className="report-download"
              onClick={() => downloadReport(name)}
            >
              <Download size={16}/>
              Download sample
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
