
import { Gauge, TrendingDown, IndianRupee, Network } from "lucide-react";

const metrics = [
  { icon: Gauge, value: "8,760", label: "Hourly power flow analysis" },
  { icon: TrendingDown, value: "18%", label: "Illustrative peak loading relief" },
  { icon: IndianRupee, value: "₹0", label: "Zero-capex switching stage" },
  { icon: Network, value: "3-Phase", label: "Physics-informed simulation" }
];

export default function Metrics() {
  return (
    <section className="metrics" id="impact">
      {metrics.map(({icon: Icon, value, label}) => (
        <div className="metric" key={label}>
          <Icon size={23}/>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
