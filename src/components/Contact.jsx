
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="eyebrow">
        LET'S BUILD THE FUTURE OF POWER
      </div>

      <h2>
        Ready to make your grid <span>intelligent?</span>
      </h2>

      <p>
        Explore a GridSense AI pilot for your distribution division.
      </p>

      <a href="mailto:hello@gridsense.ai" className="btn-primary">
        <Mail size={17}/>
        Request a Pilot Discussion
        <ArrowRight size={17}/>
      </a>
    </section>
  );
}
