import ebukaImage from "../assets/images/ebukaokolo.jpeg";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Circle } from "lucide-react";
import "./Hero.css";

export default function Hero({ photo = ebukaImage }) {
return ( <section className="hero"> <div className="hero__grid"> <div className="hero__photo-col"> <div className="hero__photo-wrap"> <img
           src={photo}
           alt="Ebuka Okolo, software engineer and product builder"
           className="hero__photo"
           loading="eager"
         />

```
        <div className="hero__photo-caption">
          <span>BASED IN NIGERIA</span>
          <span>BUILDING FOR THE WORLD</span>
        </div>
      </div>
    </div>

    <div className="hero__content">
      <div className="hero__eyebrow">
        <Circle size={9} fill="currentColor" />
        <span>SOFTWARE ENGINEER · PRODUCT BUILDER</span>
      </div>

      <h1 className="hero__heading">
  <span className="hero__heading-white">I BUILD</span>
  <span className="hero__heading-white">DIGITAL</span>
  <span className="hero__heading-accent">SOLUTIONS.</span>
</h1>

      <div className="hero__card">
        <p className="hero__card-headline">
          Turning ambitious ideas into useful, well-engineered software.
        </p>

        <p className="hero__card-body">
          I build digital products, backend systems, and intuitive web
          experiences. My focus is on solving real problems with thoughtful
          engineering, clean interfaces, and reliable technology.
        </p>

        <div className="hero__cta-group">
          <a href="#contact" className="hero__cta">
            <span>Let's work together</span>
            <span className="hero__cta-icon">
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </a>

          <Link to="/projects" className="hero__cta ghost">
            <span>Explore my work</span>
            <span className="hero__cta-icon">
              <ArrowRight size={18} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>

      <div className="hero__bottom-note">
        <span>INDEPENDENT ENGINEER</span>
        <span>IDEA → PRODUCT</span>
      </div>
    </div>
  </div>
</section>

);
}
