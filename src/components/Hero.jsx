// src/components/Hero.jsx

import ebukaImage from "../assets/images/ebukaokolo.jpeg";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #271919;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: loaderFadeOut 0.8s ease forwards;
  animation-delay: 2s;
}

.loader-logo {
  font-family: "Syne", sans-serif;
  font-size: clamp(2rem, 7vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.08em;
  color: #f5ece6;
}

.loader-bar {
  width: 170px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  overflow: hidden;
  margin-top: 22px;
}

.loader-bar span {
  display: block;
  height: 100%;
  width: 0%;
  background: #C46A3C;
  animation: loadingBar 1.8s ease forwards;
}

@keyframes loadingBar {
  to { width: 100%; }
}

@keyframes loaderFadeOut {
  to {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}

.hero {
  background: #271919;
  font-family: 'Syne', sans-serif;
  color: #fff;
  padding-top: 70px;
  overflow-x: hidden;
  position: relative;
}

.hero__grid {
  display: grid;
  grid-template-columns: 42% minmax(0, 58%);
  grid-template-areas:
    "image heading"
    "image card";
  min-height: calc(100vh - 64px);
  align-items: center;
  gap: 34px;
  padding: 42px clamp(20px, 3vw, 52px);
  max-width: 1500px;
  margin: 0 auto;
}

.hero__photo-col {
  grid-area: image;
  height: 100%;
  min-width: 0;
}

.hero__photo-wrap {
  width: 100%;
  height: 100%;
}

.hero__photo {
  width: 100%;
  height: calc(100vh - 80px);
  object-fit: cover;
  object-position: center top;
  display: block;
  border-radius: 28px;
  filter: grayscale(12%);
  box-shadow: 0 32px 80px rgba(0,0,0,0.45);
  animation: photoReveal 1s ease both;
}

.hero__heading {
  grid-area: heading;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(46px, 5.45vw, 86px);
  line-height: 0.9;
  letter-spacing: -0.065em;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
  max-width: 820px;
  align-self: end;
}

.hero__card {
  grid-area: card;
  background: #f5f1ed;
  color: #111;
  border-radius: 22px;
  padding: 24px 28px;
  max-width: 720px;
  position: relative;
  box-shadow: 0 28px 70px rgba(0,0,0,0.3);
  align-self: start;
}

@keyframes photoReveal {
  from {
    opacity: 0;
    transform: translateY(40px) scale(1.03);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.hero__card-headline {
  font-family: 'Syne', sans-serif;
  font-size: clamp(18px, 1.55vw, 24px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.04em;
  color: #111;
  margin-bottom: 14px;
}

.hero__card-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.65;
  color: #444;
}

.hero__cta-group {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero__cta {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid #111;
  text-decoration: none;
  color: #111;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.25s ease;
}

.hero__cta:hover {
  background: #C46A3C;
  color: #fff;
}

.hero__cta.ghost {
  border-color: #aaa;
  color: #444;
}

.hero__cta.ghost:hover {
  background: #C46A3C;
  color: #fff;
  border-color: #222;
}

.hero__cta-icon {
  width: 34px;
  height: 34px;
  background: #111;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s ease, background 0.25s ease;
}

.hero__cta:hover .hero__cta-icon {
  transform: translateX(2px) translateY(-2px);
  background: rgba(255,255,255,0.18);
}

/* MOBILE ONLY */
@media (max-width: 980px) {
  .hero__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "heading"
      "image"
      "card";
    min-height: auto;
    padding: 18px 10px 32px;
    gap: 18px;
  }

  .hero__heading {
    grid-area: heading;
    font-size: clamp(18px, 8vw, 38px);
    line-height: 0.9;
    letter-spacing: -0.06em;
    max-width: 100%;
    margin-bottom: 0;
    align-self: auto;
  }

  .hero__photo-col {
    grid-area: image;
    height: auto;
  }

  .hero__photo-wrap {
    width: 100%;
    height: auto;
  }

  .hero__photo {
    width: 100%;
    height: 430px;
    object-fit: cover;
    object-position: center top;
    border-radius: 18px;
  }

  .hero__card {
    grid-area: card;
    width: 100%;
    max-width: 100%;
    padding: 18px 16px;
    border-radius: 18px;
    align-self: auto;
  }

  .hero__card-headline {
    font-size: 15px;
    line-height: 1.2;
  }

  .hero__card-body {
    font-size: 13px;
    line-height: 1.45;
  }
}

@media (max-width: 520px) {
  .hero__grid {
    gap: 16px;
    padding: 14px 8px 26px;
  }

  .hero__heading {
    font-size: clamp(16px, 7.5vw, 30px);
    line-height: 0.92;
    letter-spacing: -0.05em;
  }

  .hero__photo {
    height: 360px;
    border-radius: 16px;
  }

  .hero__card {
    padding: 15px 14px;
    border-radius: 16px;
  }

  .hero__card-headline {
    font-size: 13px;
  }

  .hero__card-body {
    font-size: 12px;
  }

  .hero__cta {
    padding: 13px 15px;
    font-size: 13px;
  }

  .hero__cta-icon {
    width: 30px;
    height: 30px;
  }
}
`;

export default function Hero({
  photo = ebukaImage,
  heading1 = "FULLSTACK",
  heading2 = "WEB DEVELOPER",
}) {
  return (
    <>
      <style>{CSS}</style>

      <div className="page-loader">
        <div className="loader-logo">ebukaokolo</div>
        <div className="loader-bar">
          <span></span>
        </div>
      </div>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__photo-col">
            <div className="hero__photo-wrap">
              <img
                src={photo}
                alt="Ebuka Okolo"
                className="hero__photo"
                loading="eager"
              />
            </div>
          </div>

          <h1 className="hero__heading">
            {heading1}
            <br />
            {heading2}
          </h1>

          <div className="hero__card">
            <p className="hero__card-headline">
              I’m a Fullstack Developer building modern, scalable web applications
              and end-to-end product solutions for ambitious brands.
            </p>

            <p className="hero__card-body">
              I deliver polished user experiences, robust APIs, and cloud-ready
              systems using React, Supabase, Node.js, and modern web architecture.
            </p>

            <div className="hero__cta-group">
              <a href="#contact" className="hero__cta">
                <span>Get in touch</span>
                <div className="hero__cta-icon">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </a>

              <Link to="/projects" className="hero__cta ghost">
                <span>View my work</span>
                <div className="hero__cta-icon">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}