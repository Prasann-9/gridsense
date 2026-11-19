
import { useState } from "react";
import { Zap, Menu, X, ArrowRight } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Platform", "#platform"],
  ["Technology", "#technology"],
  ["Impact", "#impact"],
  ["DISCOM", "#discom"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        <span className="brand-icon"><Zap /></span>
        <span>GridSense <b>AI</b></span>
      </a>
      
      <a href="/dashboard" className="nav-cta">
         Engineering Portal →
      </a>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([name, url]) => (
          <a key={name} href={url} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}

        <a className="nav-cta" href="#contact">
          Request Demo <ArrowRight size={16}/>
        </a>
      </div>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </nav>
  );
}
