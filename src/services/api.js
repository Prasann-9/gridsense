
const API_BASE = "http://127.0.0.1:8000/api";

export async function getHealth() {
  const response = await fetch(`${API_BASE}/health`);

  if (!response.ok) {
    throw new Error("Backend health check failed");
  }

  return response.json();
}

export async function uploadGIS(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE}/gis/upload`, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "GIS upload failed");
  }

  return response.json();
}

export async function previewOptimization(budget) {
  const response = await fetch(`${API_BASE}/optimization/preview`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      budget_lakhs: budget
    })
  });

  if (!response.ok) {
    throw new Error("Optimization request failed");
  }

  return response.json();
}
