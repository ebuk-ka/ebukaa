import "./Projects.css";
// src/pages/Projects.jsx
import { ArrowUpRight, ExternalLink, Code2, Layers, Cpu, ShoppingBag, Film, PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import kravelyImg from "../assets/images/kravely-optimized.jpg";
import portfolioImg from "../assets/images/hairtopia-optimized.jpg";
import businessImg from "../assets/images/movietrailer-optimized.jpg";
import minivaultImg from "../assets/images/mini-optimized.jpg";
import nuciImg from "../assets/images/nuci-optimized.jpg";
const ORANGE = "#F97316";

const projects = [
  {
  id: "nuci",
  title: "NUCI",
  type: "AI-Powered IT Services Platform",
  desc: "NUCI is an AI-powered IT services platform developed under ILIAC. It helps individuals and businesses identify IT problems through AI-assisted triage and connect with real IT professionals for support, troubleshooting, and repairs. I'm the Co-founder and Head of Product Engineering at ILIAC, leading NUCI's technical direction and engineering.",
  image: nuciImg,
  tags: ["AI", "React", "TypeScript", "Node.js", "PostgreSQL", "Product Engineering"],
  link: "https://nuci.io",
  Icon: Cpu,
  accent: "#F97316",
  num: "01",
},
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
    num: "02",
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
    num: "03",
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
    num: "04",
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
    num: "05",
  },
];

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState(() => "IntersectionObserver" in window ? [] : projects.map((_, index) => index));
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );
    cardRefs.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
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
        <section className="pp-list" aria-label="Selected projects">
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
                ref={(el) => { cardRefs.current[i] = el; }}
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
