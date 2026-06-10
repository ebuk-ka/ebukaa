// src/pages/Projects.jsx
import { ArrowUpRight, ExternalLink, Code2, Layers, Cpu, ShoppingBag, Film, PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import kravelyImg from "../assets/images/Kravely.png";
import portfolioImg from "../assets/images/hairtopia.jpeg";
import businessImg from "../assets/images/movietrailer.jpeg";
import minivaultImg from "../assets/images/mini.png";

const ORANGE = "#F97316";

const projects = [
  {
    id: "kravely",
    title: "Kravely",
    type: "Food Delivery Platform",
    desc: "A FUTO-focused food ordering platform built for students, vendors and riders — with real-time ordering, vendor listings and full delivery flow.",
    image: kravelyImg,
    tags: ["React", "Supabase", "Tailwind", "Food Tech"],
    link: "https://kravely-qc1s.vercel.app/",
    Icon: ShoppingBag,
    accent: "#F97316",
    num: "01",
  },
  {
    id: "hairtopia",
    title: "HairTopia",
    type: "Hair Booking Website",
    desc: "A clean, modern hair website for seamless bookings and orders — built to turn visitors into paying clients.",
    image: portfolioImg,
    tags: ["React", "CSS", "Responsive"],
    link: "https://hairtopiang.shop",
    Icon: Layers,
    accent: "#e05c8a",
    num: "02",
  },
  {
    id: "movie",
    title: "Movie Trailers",
    type: "Movie Trailer Website",
    desc: "A cinematic movie website where users browse and watch trailers — designed for immersive visual storytelling.",
    image: businessImg,
    tags: ["UI Design", "Landing Page", "Movie Trailer"],
    link: "https://movietrailerrr.netlify.app/",
    Icon: Film,
    accent: "#7c3aed",
    num: "03",
  },
  {
    id: "mini",
    title: "Mini-Vault",
    type: "AI Fintech App",
    desc: "An AI-powered savings vault that helps users build better money habits — smart, minimal, and built for the future.",
    image: minivaultImg,
    tags: ["UI Design", "Landing Page", "Fintech"],
    link: "https://mini-vault-three.vercel.app/",
    Icon: PiggyBank,
    accent: "#10b981",
    num: "04",
  },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .pp-root {
    background: #271919;
    min-height: 100vh;
    font-family: 'DM Sans', sans-serif;
    color: #f5ece6;
  }

  /* ── NAV ─────────────────────────────────────────── */
  .pp-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 68px;
    background: rgba(26,16,16,0.82);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(249,115,22,0.1);
  }

  .pp-nav-logo {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #f5ece6;
    text-decoration: none;
    letter-spacing: -0.04em;
  }

  .pp-nav-logo span { color: #F97316; }

  .pp-nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
  }

  .pp-nav-links a {
    font-size: 14px;
    font-weight: 500;
    color: rgba(245,236,230,0.6);
    text-decoration: none;
    transition: color 0.2s;
    letter-spacing: 0.01em;
  }

  .pp-nav-links a:hover { color: #F97316; }

  .pp-nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 20px;
    border-radius: 999px;
    background: #F97316;
    color: #1a1010 !important;
    font-weight: 700 !important;
    font-size: 13px !important;
    transition: opacity 0.2s !important;
  }

  .pp-nav-cta:hover { opacity: 0.85; color: #1a1010 !important; }

  /* ── HERO ─────────────────────────────────────────── */
  .pp-hero {
    padding: 148px 40px 80px;
    max-width: 1280px;
    margin: 0 auto;
  }

  .pp-hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 16px;
    border-radius: 999px;
    border: 1px solid rgba(249,115,22,0.25);
    background: rgba(249,115,22,0.1);
    margin-bottom: 28px;
  }



  .pp-hero-eyebrow span {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #F97316;
  }

  .pp-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3.2rem, 8vw, 7.5rem);
    line-height: 0.9;
    letter-spacing: -0.06em;
    font-weight: 800;
    margin-bottom: 28px;
  }

  .pp-hero h1 em {
    font-style: italic;
    font-weight: 700;
    color: #F97316;
  }

  .pp-hero p {
    max-width: 580px;
    font-size: 16px;
    line-height: 1.8;
    color: rgba(245,236,230,0.55);
  }

  .pp-back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 30px;
    margin-bottom:30px;
    color: #f5ece6;
    text-decoration: none;
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: -0.04em;
    transition: color 0.2s, opacity 0.2s;
  }

  .pp-back-link:hover {
    color: #F97316;
    opacity: 1;
  }

  /* ── PROJECTS ─────────────────────────────────────── */
  .pp-list {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px 120px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .pp-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 0;
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.025);
    text-decoration: none;
    color: inherit;
    margin-bottom: 28px;

    opacity: 0;
    transform: translateY(60px);
    transition:
      opacity 0.85s cubic-bezier(0.22,1,0.36,1),
      transform 0.85s cubic-bezier(0.22,1,0.36,1),
      border-color 0.3s ease,
      background 0.3s ease;
  }

  .pp-card.pp-card-even {
    grid-template-columns: 1fr 1fr;
    direction: rtl;
  }

  .pp-card.pp-card-even > * {
    direction: ltr;
  }

  .pp-card-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .pp-card:hover {
    border-color: rgba(249,115,22,0.28);
    background: rgba(255,255,255,0.04);
  }

  /* Image side */
  .pp-img-side {
    position: relative;
    height: 440px;
    overflow: hidden;
    background: rgba(255,255,255,0.03);
  }

  .pp-img-side img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    transition: transform 0.7s ease;
    filter: brightness(0.88);
    background: #120a0a;
  }

  .pp-card:hover .pp-img-side img {
    transform: scale(1.05);
    filter: brightness(1);
  }

  .pp-img-num {
    position: absolute;
    top: 20px; left: 24px;
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.35);
    background: rgba(0,0,0,0.4);
    padding: 4px 10px;
    border-radius: 999px;
    backdrop-filter: blur(8px);
  }

  .pp-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 60%);
  }

  /* Content side */
  .pp-content-side {
    padding: 48px 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .pp-type-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pp-icon-wrap {
    width: 36px; height: 36px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .pp-type-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .pp-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 4vw, 3.6rem);
    line-height: 0.95;
    letter-spacing: -0.05em;
    font-weight: 800;
    color: #f5ece6;
  }

  .pp-desc {
    font-size: 15px;
    line-height: 1.8;
    color: rgba(245,236,230,0.55);
    max-width: 420px;
  }

  .pp-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pp-tag {
    font-size: 11px;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.09);
    color: rgba(245,236,230,0.65);
    letter-spacing: 0.03em;
  }

  .pp-btn {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 22px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    color: #1a1010;
    background: #F97316;
    transition: opacity 0.2s, transform 0.2s;
    margin-top: 6px;
  }

  .pp-btn svg {
    transition: transform 0.25s ease;
  }

  .pp-card:hover .pp-btn svg {
    transform: translate(3px, -3px);
  }

  .pp-card:hover .pp-btn {
    opacity: 0.9;
  }

  /* ── FOOTER STRIP ─────────────────────────────────── */
  .pp-foot {
    border-top: 1px solid rgba(249,115,22,0.1);
    padding: 32px 40px;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pp-foot p {
    font-size: 13px;
    color: rgba(245,236,230,0.35);
  }

  .pp-foot a {
    font-size: 13px;
    font-weight: 600;
    color: #F97316;
    text-decoration: none;
  }

  /* ── MOBILE ───────────────────────────────────────── */
  @media (max-width: 860px) {
    .pp-nav { padding: 0 20px; }
    .pp-nav-links { display: none; }
    .pp-hero { padding: 120px 20px 60px; }
    .pp-list { padding: 0 20px 80px; }

    .pp-card,
    .pp-card.pp-card-even {
      grid-template-columns: 1fr;
      direction: ltr;
    }

    .pp-img-side { height: 260px; }
    .pp-content-side { padding: 28px 24px 32px; }
  }
`;

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div className="pp-root">

        {/* NAV */}
        <nav className="pp-nav">
          <Link to="/" className="pp-nav-logo">
            Ebuka<span>.</span>
          </Link>
         
          <Link to="/" className="pp-back-link">
            ← Back to home
          </Link>
        </nav>

        {/* HERO */}
        <div className="pp-hero">
          <div className="pp-hero-eyebrow">
            <div className="pp-hero-dot" />
            <span>Selected work</span>
          </div>
          <h1>
            Projects I've built<br />
            <em>&amp; shipped.</em>
          </h1>
          <p>
            Frontend, backend, full-stack — real products built for real people.
            Every project here solves a specific problem.
          </p>
          
        </div>

        {/* CARDS */}
        <section className="pp-list">
          {projects.map((p, i) => {
            const isEven = i % 2 !== 0;
            const { Icon } = p;
            return (
              <a
                key={p.id}
                id={p.id}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                className={`pp-card ${isEven ? "pp-card-even" : ""} ${
                  visibleCards.includes(i) ? "pp-card-visible" : ""
                }`}
                style={{
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                {/* Image */}
                <div className="pp-img-side">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="pp-img-overlay" />
                  <span className="pp-img-num">{p.num}</span>
                </div>

                {/* Content */}
                <div className="pp-content-side">
                  <div className="pp-type-row">
                    <div
                      className="pp-icon-wrap"
                      style={{ background: `${p.accent}18`, border: `1px solid ${p.accent}30` }}
                    >
                      <Icon size={17} color={p.accent} strokeWidth={2} />
                    </div>
                    <span className="pp-type-label" style={{ color: p.accent }}>
                      {p.type}
                    </span>
                  </div>

                  <h2 className="pp-title">{p.title}</h2>
                  <p className="pp-desc">{p.desc}</p>

                  <div className="pp-tags">
                    {p.tags.map((tag) => (
                      <span key={tag} className="pp-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="pp-btn">
                    View project
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </div>
                </div>
              </a>
            );
          })}
        </section>

      </div>
    </>
  );
}