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
    background: #2D1F1F;

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
    to {
      width: 100%;
    }
  }

  @keyframes loaderFadeOut {
    to {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }

  .hero {
    background: linear-gradient(180deg, #2D1F1F 0%, #1b1212 100%);
    min-height: calc(100vh - 64px);
    font-family: 'Syne', sans-serif;
    color: #fff;
    padding-top: 70px;
    overflow-x: hidden;
    position: relative;
  }

  .hero__grid {
    display: grid;
    grid-template-columns: 39% minmax(0, 61%);
    min-height: calc(100vh - 64px);
    align-items: center;
    gap: 34px;
    padding: 42px clamp(20px, 3vw, 52px);
    max-width: 1500px;
    margin: 0 auto;
  }

  .hero__photo-col,
  .hero__text-area {
    min-width: 0;
  }

  .hero__photo-wrap {
    position: relative;
    width: 100%;
  }

  .hero__photo {
    width: 100%;
    height: min(78vh, 720px);
    object-fit: cover;
    object-position: center;
    display: block;
    border-radius: 28px;
    filter: grayscale(12%);
    box-shadow: 0 32px 80px rgba(0,0,0,0.45);

    animation: photoReveal 1s ease both;
  }

  .hero__text-area {
    display: flex;
    flex-direction: column;
    justify-content: center;

    animation: textReveal 1s ease both;
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

  @keyframes textReveal {
    from {
      opacity: 0;
      transform: translateY(35px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero__heading {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(46px, 5.45vw, 86px);
    line-height: 0.9;
    letter-spacing: -0.065em;
    text-transform: uppercase;
    color: #fff;
    margin: 0 0 26px;
    max-width: 760px;
  }

  .hero__card {
    background: #f5f1ed;
    color: #111;
    border-radius: 22px;
    padding: 24px 28px;
    max-width: 620px;
    position: relative;
    box-shadow: 0 28px 70px rgba(0,0,0,0.3);
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

    transition:
      transform 0.25s ease,
      background 0.25s ease;
  }

  .hero__cta:hover .hero__cta-icon {
    transform: translateX(2px) translateY(-2px);
    background: rgba(255,255,255,0.18);
  }

  @media (max-width: 980px) {

    .hero__grid {
      display: flex;
      flex-direction: column;
      padding: 18px 8px 32px;
      gap: 20px;
    }

    .hero__heading {
      width: 100%;
      font-size: clamp(26px, 8.5vw, 48px);
      line-height: 1.04;
      letter-spacing: -0.055em;
      max-width: 100%;
    }

    .hero__photo {
      width: 100%;
      height: auto;
      aspect-ratio: 1 / 1.08;
      border-radius: 14px;
    }

    .hero__card {
      width: 100%;
      max-width: 100%;
      padding: 14px 13px 12px;
      border-radius: 16px;
    }

    .hero__card-headline {
      font-size: 14px;
      line-height: 1.15;
    }

    .hero__card-body {
      font-size: 12.5px;
      line-height: 1.35;
    }
  }

  @media (max-width: 520px) {

    .hero__grid {
      padding: 18px 8px 28px;
      gap: 18px;
    }

    .hero__heading {
      font-size: clamp(22px, 10vw, 34px);
      line-height: 1.08;
    }

    .hero__photo {
      aspect-ratio: 1 / 1.25;
    }

    .hero__card {
      padding: 14px 13px;
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
        <div className="loader-logo">
          ebukaokolo
        </div>

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

          <div className="hero__text-area">

            <h1 className="hero__heading">
              {heading1}
              <br />
              {heading2}
            </h1>

            <div className="hero__card">

              <p className="hero__card-headline">
                I’m a Fullstack Developer building modern,
                scalable web apps for businesses that
                want to grow fast and stand out.
              </p>

              <p className="hero__card-body">
                I design and develop clean,
                high-performance digital experiences
                using React, Supabase and modern tools.
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
        </div>
      </section>
    </>
  );
}