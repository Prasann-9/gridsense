
import { ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="pulse"/> AI POWERED GRID INTELLIGENCE
        </div>

        <h1>
          Make Every Grid
          <br />
          <span>Smarter. Stronger.</span>
          <br />
          More Efficient.
        </h1>

        <p className="hero-description">
          Predict distribution network bottlenecks, optimize feeder
          loads and prioritize infrastructure investments using
          physics-informed AI.
        </p>

        <div className="hero-buttons">
          <a href="#demo" className="btn-primary">
            Explore Live Demo <ArrowRight size={17}/>
          </a>

          <a href="#platform" className="btn-secondary">
            Explore Platform
          </a>
        </div>

        <div className="trust-line">
          <ShieldCheck size={17}/>
          Built for DISCOMs • Designed for India's power future
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-top">
          <span><Activity size={16}/> GRID DIGITAL TWIN</span>
          <span className="live"><i/> LIVE SIMULATION</span>
        </div>

        <div className="network-map">
          <svg viewBox="0 0 500 340" className="network-svg">
            <defs>
              <pattern id="dots" width="25" height="25"
                patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#24465A"/>
              </pattern>
            </defs>

            <rect width="500" height="340" fill="url(#dots)"/>

            <g stroke="#1B9EAD" strokeWidth="2.5" fill="none">
              <path d="M65 165 L155 95 L245 145 L340 65 L440 120"/>
              <path d="M155 95 L160 235 L245 145 L310 255 L440 120"/>
              <path d="M245 145 L375 190 L440 120"/>
              <path d="M160 235 L310 255 L375 190"/>
            </g>

            <g stroke="#41D9B6" strokeWidth="2"
              fill="none" strokeDasharray="6 6">
              <path d="M65 165 L245 145 L375 190"/>
            </g>

            {[
              [65,165],[155,95],[245,145],[340,65],
              [440,120],[160,235],[310,255],[375,190]
            ].map(([x,y],i)=>(
              <g key={i}>
                <circle cx={x} cy={y} r="11"
                  fill="#0E2738" stroke="#40DDBA" strokeWidth="2"/>
                <circle cx={x} cy={y} r="4" fill="#40DDBA"/>
              </g>
            ))}

            <circle cx="245" cy="145" r="22"
              fill="none" stroke="#F4B74D"
              strokeWidth="1.5" strokeDasharray="4 4"/>

            <text x="260" y="130" fill="#F4B74D" fontSize="10">
              DTR-03
            </text>
          </svg>
        </div>

        <div className="map-footer">
          <span>● Network connected</span>
          <span>8 Nodes monitored</span>
          <span>5 Feeders</span>
        </div>

        <div className="visual-stats">
          <div>
            <small>PEAK LOADING</small>
            <strong>96%</strong>
            <span className="warning">Needs optimization</span>
          </div>

          <div>
            <small>VOLTAGE HEALTH</small>
            <strong>0.94 p.u.</strong>
            <span className="warning">Low voltage detected</span>
          </div>

          <div>
            <small>AI RECOMMENDATION</small>
            <strong className="green-text">Switch</strong>
            <span>Zero-capex action</span>
          </div>
        </div>
      </div>
    </section>
  );
}
