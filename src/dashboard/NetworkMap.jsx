
import { useMemo, useState } from "react";
import {
  MapContainer, TileLayer, CircleMarker,
  Polyline, Popup
} from "react-leaflet";

import { networkNodes, networkLines } from "../data/networkData";

function getNode(id) {
  return networkNodes.find(node => node.id === id);
}

function markerColor(node) {
  if (node.type === "substation") return "#55aef4";
  if (node.loading >= 100) return "#f05b62";
  if (node.loading >= 90 || node.voltage < 0.95) return "#efb34f";
  return "#38d5b2";
}

export default function NetworkMap() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const visibleNodes = useMemo(() => {
    return networkNodes.filter(node => {
      if (filter === "all") return true;
      if (filter === "critical") {
        return node.type === "dtr" && node.loading >= 90;
      }
      return node.type === filter;
    });
  }, [filter]);

  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <div className="page-eyebrow">LAYER 01 / GIS DIGITAL TWIN</div>
          <h1>Distribution Network Map</h1>
          <p>Explore the demo feeder topology and transformer assets.</p>
        </div>
        <span className="demo-label">DEMO COORDINATES</span>
      </div>

      <div className="map-toolbar">
        <span>Network: Hyderabad Demo Division</span>

        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All assets</option>
          <option value="substation">Substations</option>
          <option value="dtr">DTRs</option>
          <option value="critical">Critical DTRs</option>
        </select>
      </div>

      <div className="gis-layout">
        <div className="gis-map">
          <MapContainer
            center={[17.488, 78.405]}
            zoom={14}
            scrollWheelZoom={true}
            style={{ height: "540px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {networkLines.map(([from, to]) => {
              const a = getNode(from);
              const b = getNode(to);

              if (!a || !b) return null;

              return (
                <Polyline
                  key={`${from}-${to}`}
                  positions={[[a.lat,a.lng],[b.lat,b.lng]]}
                  pathOptions={{
                    color: "#25bda7",
                    weight: 4,
                    opacity: 0.8
                  }}
                />
              );
            })}

            {visibleNodes.map(node => (
              <CircleMarker
                key={node.id}
                center={[node.lat,node.lng]}
                radius={node.type === "substation" ? 12 : 9}
                pathOptions={{
                  color: markerColor(node),
                  fillColor: markerColor(node),
                  fillOpacity: 0.9,
                  weight: 2
                }}
                eventHandlers={{
                  click: () => setSelected(node)
                }}
              >
                <Popup>
                  <b>{node.name}</b>
                  <br/>
                  Asset: {node.id}
                  {node.type === "dtr" && (
                    <>
                      <br/>Loading: {node.loading}%
                      <br/>Voltage: {node.voltage} p.u.
                    </>
                  )}
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>

        <aside className="asset-details">
          <h3>Asset Explorer</h3>
          {selected ? (
            <>
              <span className="asset-type">{selected.type.toUpperCase()}</span>
              <h2>{selected.name}</h2>
              <p>Asset ID: {selected.id}</p>

              {selected.type === "dtr" ? (
                <>
                  <div className="asset-stat">
                    <span>Transformer rating</span>
                    <b>{selected.kva} kVA</b>
                  </div>
                  <div className="asset-stat">
                    <span>Peak loading</span>
                    <b>{selected.loading}%</b>
                  </div>
                  <div className="asset-stat">
                    <span>Voltage</span>
                    <b>{selected.voltage} p.u.</b>
                  </div>
                  <div className="asset-stat">
                    <span>GPS</span>
                    <b>{selected.lat}, {selected.lng}</b>
                  </div>
                </>
              ) : (
                <p>Demo substation · {selected.voltage} kV</p>
              )}
            </>
          ) : (
            <div className="empty-selection">
              Select a map marker to inspect its asset information.
            </div>
          )}

          <div className="map-legend">
            <b>Asset status legend</b>
            <span><i style={{background:"#55aef4"}}/> Substation</span>
            <span><i style={{background:"#38d5b2"}}/> Normal DTR</span>
            <span><i style={{background:"#efb34f"}}/> Warning</span>
            <span><i style={{background:"#f05b62"}}/> Critical</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
