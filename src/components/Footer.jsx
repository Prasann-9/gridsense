
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <a href="#home" className="brand">
        <span className="brand-icon"><Zap size={20}/></span>
        GridSense <b>AI</b>
      </a>

      <span>© 2026 GridSense AI. All rights reserved.</span>

      <span>Intelligent grids. Better decisions.</span>
    </footer>
  );
}
