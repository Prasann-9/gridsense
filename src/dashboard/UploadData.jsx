
import { useState } from "react";
import { Upload, FileSpreadsheet, CheckCircle2, X, File } from "lucide-react";

const acceptedExtensions = [
  ".csv", ".shp", ".shx", ".dbf", ".prj", ".geojson"
];

export default function UploadData() {
  const [files, setFiles] = useState([]);

  function addFiles(event) {
    const selected = Array.from(event.target.files || []);

    const valid = selected.filter(file =>
      acceptedExtensions.some(ext =>
        file.name.toLowerCase().endsWith(ext)
      )
    );

    setFiles(previous => [
      ...previous,
      ...valid.filter(file =>
        !previous.some(existing => existing.name === file.name)
      )
    ]);

    event.target.value = "";
  }

  function removeFile(name) {
    setFiles(previous => previous.filter(file => file.name !== name));
  }

  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <div className="page-eyebrow">LAYER 01 / DATA INGESTION</div>
          <h1>Upload Utility Data</h1>
          <p>Prepare GIS, asset register and network datasets.</p>
        </div>
        <span className="demo-label">LOCAL FILE PREVIEW</span>
      </div>

      <div className="upload-grid">
        <div className="workspace-panel">
          <div className="panel-title">
            <div>
              <h3>GIS and asset ingestion</h3>
              <p>Choose supported local files</p>
            </div>
            <Upload/>
          </div>

          <label className="upload-zone">
            <input
              type="file"
              multiple
              accept=".csv,.shp,.shx,.dbf,.prj,.geojson"
              onChange={addFiles}
            />
            <Upload size={35}/>
            <b>Click to select utility files</b>
            <span>CSV, Shapefile components and GeoJSON</span>
          </label>

          <div className="accepted-list">
            {acceptedExtensions.map(ext => (
              <span key={ext}>{ext}</span>
            ))}
          </div>
        </div>

        <div className="workspace-panel">
          <div className="panel-title">
            <div>
              <h3>Ingestion checklist</h3>
              <p>Suggested data inputs</p>
            </div>
            <FileSpreadsheet/>
          </div>

          {[
            "DISCOM GIS network",
            "DTR asset register",
            "Conductor specifications",
            "AMI / SCADA time series",
            "Switch and feeder register"
          ].map(item => (
            <div className="check-row" key={item}>
              <CheckCircle2 size={17}/>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="workspace-panel table-panel">
        <div className="panel-title">
          <div>
            <h3>Selected files</h3>
            <p>{files.length} file(s) selected</p>
          </div>
          <File/>
        </div>

        {files.length === 0 ? (
          <div className="empty-selection">
            No files selected yet.
          </div>
        ) : (
          files.map(file => (
            <div className="file-row" key={file.name}>
              <FileSpreadsheet size={19}/>
              <span>{file.name}</span>
              <small>{(file.size / 1024).toFixed(1)} KB</small>
              <button onClick={() => removeFile(file.name)}
                aria-label={`Remove ${file.name}`}>
                <X size={16}/>
              </button>
            </div>
          ))
        )}

        <div className="analytics-note">
          <Upload size={18}/>
          <span>
            This version only selects and previews local files.
            It does not upload files to a server or parse shapefiles yet.
            A ZIP-based shapefile upload and backend validation will be
            added when the ingestion API is connected.
          </span>
        </div>
      </div>
    </div>
  );
}
