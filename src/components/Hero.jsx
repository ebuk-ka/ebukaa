// src/components/Hero.jsx

import ebukaImage from "../assets/images/ebukaokolo.jpeg";

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
    display: grid;
    place-items: center;
    animation: loaderOut 0.7s ease 2s forwards;
  }

  .loader-logo {
    font-family: 'Syne', sans-serif;
    font-size: clamp(28px, 6vw, 54px);
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.07em;
  }

  .loader-bar {
    width: 180px;
    height: 4px;
    background: rgba(255,255,255,0.14);
    border-radius: 999px;
    overflow: hidden;
    margin: 22px auto 0;
  }

  .loader-bar span {
    display: block;
    height: 100%;
    width: 0;
    background: #c76a3d;
    animation: loadBar 1.8s ease forwards;
  }

  @keyframes loadBar {
    to { width: 100%; }
  }

  @keyframes loaderOut {
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
    height: min(72vh, 640px);
    object-fit: cover;
    object-position: center;
    display: block;
    border-radius: 28px;
    filter: grayscale(12%);
    box-shadow: 0 32px 80px rgba(0,0,0,0.45);
    animation: heroPhotoIn 0.9s ease both;
  }

  .hero__photo-wrap::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: 12px;
    bottom: 12px;
    border-radius: 32px;
    border: 1.5px solid rgba(196,106,60,0.18);
    z-index: -1;
  }

  .hero__photo-wrap::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background-image: radial-gradient(circle, rgba(196,106,60,0.28) 1.5px, transparent 1.5px);
    background-size: 14px 14px;
    z-index: -1;
  }

  .hero__text-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: fadeUp 0.8s ease both;
  }

  .hero__status {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 12px 22px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #d4c4be;
    margin-bottom: 30px;
  }

  .hero__status-dot {
    width: 9px;
    height: 9px;
    background: #C46A3C;
    border-radius: 50%;
    animation: pulseDot 2.4s ease infinite;
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

  .hero__badge {
    position: absolute;
    right: -12px;
    top: 28px;
    background: #fff;
    color: #111;
    border-radius: 8px;
    padding: 8px 13px;
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 800;
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    white-space: nowrap;
  }

  .hero__badge-icon {
    width: 22px;
    height: 16px;
    background: linear-gradient(135deg, #C46A3C 0%, #e39b76 100%);
    border-radius: 4px;
    display: grid;
    place-items: center;
    color: #fff;
    font-size: 9px;
    font-weight: 900;
  }

  .hero__badge2 {
    position: absolute;
    right: -12px;
    bottom: -14px;
    background: #080808;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 999px;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    white-space: nowrap;
  }

  .hero__badge2-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #C46A3C;
  }

  @keyframes pulseDot {
    0%,100% { box-shadow: 0 0 0 0 rgba(196,106,60,0.45); }
    50% { box-shadow: 0 0 0 6px rgba(196,106,60,0); }
  }

  @keyframes heroPhotoIn {
    from { opacity: 0; transform: scale(1.04); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 980px) {
    .hero__grid {
      display: flex;
      flex-direction: column;
      padding: 18px 8px 32px;
      gap: 20px;
      min-height: auto;
    }

    .hero__text-area {
      width: 100%;
      display: contents;
    }

    .hero__status {
      display: none;
    }

    .hero__heading {
      order: 1;
      width: 100%;
      font-size: clamp(28px, 9vw, 52px);
      line-height: 1.04;
      letter-spacing: -0.055em;
      margin-bottom: 0;
      max-width: 100%;
    }

    .hero__photo-col {
      order: 2;
      width: 100%;
    }

    .hero__photo-wrap::before,
    .hero__photo-wrap::after {
      display: none;
    }

    .hero__photo {
      width: 100%;
      height: auto;
      max-height: none;
      aspect-ratio: 1 / 1.23;
      object-fit: cover;
      object-position: center top;
      border-radius: 14px;
      box-shadow: none;
      clip-path: none;
    }

    .hero__card {
      order: 3;
      width: 100%;
      max-width: 100%;
      margin-top: 0;
      padding: 14px 13px 12px;
      border-radius: 16px;
    }

    .hero__card-headline {
      font-size: 14px;
      line-height: 1.15;
      letter-spacing: -0.035em;
      margin-bottom: 10px;
    }

    .hero__card-body {
      font-size: 12.5px;
      line-height: 1.35;
    }

    .hero__badge,
    .hero__badge2 {
      display: flex;
      transform: scale(0.82);
      transform-origin: right center;
    }

    .hero__badge {
      right: -6px;
      top: 44px;
    }

    .hero__badge2 {
      right: -6px;
      bottom: -10px;
    }
  }

  @media (max-width: 520px) {
    .hero__grid {
      padding: 18px 8px 28px;
      gap: 18px;
    }

    .hero__heading {
      font-size: clamp(24px, 10vw, 42px);
      line-height: 1.08;
    }

    .hero__photo {
      aspect-ratio: 1 / 1.25;
      border-radius: 14px;
    }

    .hero__card {
      padding: 14px 13px;
      border-radius: 16px;
    }

    .hero__card-headline {
      font-size: 13px;
    }

    .hero__card-body {
      font-size: 12px;
    }

    .loader-bar {
      width: 150px;
    }
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
  width: 30px;
  height: 30px;
  background: #111;
  color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 14px;
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
        <div>
          <div className="loader-logo">ebukaokolo</div>
          <div className="loader-bar">
            <span></span>
          </div>
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
  I’m a Fullstack Developer building modern, scalable web apps for businesses that want to grow fast and stand out.
</p>

<p className="hero__card-body">
  I design and develop clean, high-performance digital experiences using React, Supabase and modern tools.
</p>

<div className="hero__cta-group">
  <a href="#" className="hero__cta">
    <span>Get in touch</span>
    <div className="hero__cta-icon">↗</div>
  </a>

  <a href="#" className="hero__cta ghost">
    <span>View my work</span>
    <div className="hero__cta-icon">→</div>
  </a>
</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}