
export const networkNodes = [
  {
    id: "SUB-01",
    name: "Demo Substation",
    type: "substation",
    lat: 17.493,
    lng: 78.399,
    voltage: 33,
    loading: 72
  },
  {
    id: "DTR-01",
    name: "DTR Kukatpally North",
    type: "dtr",
    lat: 17.499,
    lng: 78.407,
    kva: 250,
    loading: 96,
    voltage: 0.94
  },
  {
    id: "DTR-02",
    name: "DTR Housing Board",
    type: "dtr",
    lat: 17.485,
    lng: 78.415,
    kva: 400,
    loading: 78,
    voltage: 0.97
  },
  {
    id: "DTR-03",
    name: "DTR Industrial Area",
    type: "dtr",
    lat: 17.477,
    lng: 78.393,
    kva: 250,
    loading: 91,
    voltage: 0.96
  },
  {
    id: "DTR-04",
    name: "DTR Residential East",
    type: "dtr",
    lat: 17.507,
    lng: 78.422,
    kva: 315,
    loading: 68,
    voltage: 0.98
  },
  {
    id: "DTR-05",
    name: "DTR Demo South",
    type: "dtr",
    lat: 17.468,
    lng: 78.410,
    kva: 200,
    loading: 105,
    voltage: 0.92
  }
];

export const networkLines = [
  ["SUB-01", "DTR-01"],
  ["SUB-01", "DTR-02"],
  ["SUB-01", "DTR-03"],
  ["DTR-01", "DTR-04"],
  ["DTR-03", "DTR-05"]
];

export const demoFeeders = [
  {
    id: "FDR-001",
    name: "Kukatpally Main Feeder",
    peakLoading: 96,
    voltage: 0.94,
    losses: 8.2,
    status: "Critical",
    dtrs: 32
  },
  {
    id: "FDR-002",
    name: "Housing Board Feeder",
    peakLoading: 78,
    voltage: 0.97,
    losses: 5.4,
    status: "Normal",
    dtrs: 27
  },
  {
    id: "FDR-003",
    name: "Industrial Feeder",
    peakLoading: 91,
    voltage: 0.96,
    losses: 7.8,
    status: "Warning",
    dtrs: 29
  },
  {
    id: "FDR-004",
    name: "Residential East Feeder",
    peakLoading: 68,
    voltage: 0.98,
    losses: 4.1,
    status: "Normal",
    dtrs: 24
  },
  {
    id: "FDR-005",
    name: "South Extension Feeder",
    peakLoading: 105,
    voltage: 0.92,
    losses: 10.2,
    status: "Critical",
    dtrs: 30
  }
];

export const optimizationOptions = [
  {
    id: "OPT-001",
    asset: "DTR-05",
    action: "DTR Capacity Augmentation",
    capex: 8.5,
    savings: 3.2,
    roi: 37.6,
    priority: "High"
  },
  {
    id: "OPT-002",
    asset: "FDR-003",
    action: "Conductor Reconductoring",
    capex: 14,
    savings: 5.4,
    roi: 38.5,
    priority: "High"
  },
  {
    id: "OPT-003",
    asset: "FDR-001",
    action: "Feeder Bifurcation",
    capex: 22,
    savings: 7.1,
    roi: 32.3,
    priority: "Medium"
  }
];
