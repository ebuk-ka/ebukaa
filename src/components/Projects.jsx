import { useEffect, useRef, useState } from "react";
import movieImage from "../assets/images/movietrailer.jpeg"
import hairtopiaImage from "../assets/images/hairtopia.jpeg"
import gymlabImage from "../assets/images/gymlab.jpeg"
import glowImage from "../assets/images/glowspa.jpeg"
import moonImage from "../assets/images/moonlighthotels.jpeg"
import fastImage from "../assets/images/fastfood.jpeg"
const PROJECTS = [
  {
    name: "Movie Trailer App",
    image : movieImage,
    desc: "Fetches and plays movie trailers in real time. Search any movie and watch its official trailer instantly.",
    tags: ["React", "API", "JavaScript"],
    color: "#f59e0b",
    liveUrl: "https://movietrailerrr.netlify.app/",
    githubUrl: "https://github.com/ebuk-ka/movietrailer.git",
    category: "App",
  },
  {
    name: "Hairtopia",
    image : hairtopiaImage,
    desc: "A premium hair salon website with services, gallery, and booking sections. Clean and elegant UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#ec4899",
    liveUrl: "https://hairtopiang.shop/",
    githubUrl: "https://github.com/ebuk-ka/hairtopia.ng.git",
    category: "Landing Page",
  },
  {
    name: "GymLab",
    image: gymlabImage,
    desc: "A bold gym and fitness website with plans, trainers, and a powerful hero section built to convert.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#ef4444",
    liveUrl: "https://gymlabb.netlify.app/",
    githubUrl: "https://github.com/ebuk-ka/gymlab.git",
    category: "Landing Page",
  },
  {
    name: "Glow Spa",
    image : glowImage,
    desc: "A luxury spa and wellness website with soft aesthetics, service listings, and smooth animations.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#a78bfa",
    liveUrl: "https://glowspaa.netlify.app/",
    githubUrl: "https://github.com/ebuk-ka/glow-spa",
    category: "Landing Page",
  },
  {
    name: "Moonlight Hotel",
    image: moonImage,
    desc: "An elegant hotel website showcasing rooms, amenities, and a reservation flow with a dark, premium feel.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#38bdf8",
    liveUrl: "https://moonlighthotelsuites.netlify.app/",
    githubUrl: "https://github.com/ebuk-ka/moonlight-hotel",
    category: "Landing Page",
  },
  {
    name: "FastFood",
    image: fastImage,
    desc: "A fast food ordering website with a menu, featured items, and a fun energetic design that makes you hungry.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#f97316",
    liveUrl: "https://monumental-klepon-c6fa41.netlify.app/",
    githubUrl: "https://github.com/ebuk-ka/fastfoods.git",
    category: "E-Commerce",
  },
];

const FILTERS = ["All", "Landing Page", "E-Commerce", "App"];

function ProjectCard({ project, darkMode, visible, delay }) {
  const [hovered, setHovered] = useState(false);
  const dk = darkMode;
  const { name, image, emoji, desc, tags, color, liveUrl, githubUrl, category } = project;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        border: hovered
          ? `1px solid ${color}44`
          : dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
        background: dk ? "#0d1117" : "#ffffff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: hovered
          ? `0 24px 48px ${color}18`
          : dk ? "0 8px 30px rgba(0,0,0,0.3)" : "0 4px 20px rgba(100,116,139,0.08)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.3s ease, border 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Card banner */}
      <div style={{
        height: 120,
        background: `linear-gradient(135deg, ${color}22, ${color}08)`,
        borderBottom: dk ? `1px solid ${color}22` : `1px solid ${color}18`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -20, right: -20,
          width: 100, height: 100, borderRadius: "50%",
          background: `${color}15`,
        }} />
        <div style={{
          position: "absolute", bottom: -30, left: -10,
          width: 80, height: 80, borderRadius: "50%",
          background: `${color}10`,
        }} />

        {/* Image or Emoji */}
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              position: "absolute", inset: 0,
              transition: "transform 0.3s",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        ) : (
          <span style={{
            fontSize: 48,
            filter: hovered ? "drop-shadow(0 0 12px " + color + "88)" : "none",
            transition: "filter 0.3s, transform 0.3s",
            transform: hovered ? "scale(1.15)" : "scale(1)",
            position: "relative", zIndex: 1,
          }}>
            {emoji}
          </span>
        )}

        {/* Category badge */}
        <span style={{
          position: "absolute", top: 12, right: 12,
          fontFamily: "monospace", fontSize: 9,
          padding: "3px 10px", borderRadius: 99,
          background: `${color}20`,
          border: `1px solid ${color}33`,
          color: color,
          letterSpacing: "0.08em", textTransform: "uppercase",
          zIndex: 2,
        }}>
          {category}
        </span>
      </div>

      {/* Card body */}
      <div style={{
        padding: "20px 20px 16px",
        display: "flex", flexDirection: "column", gap: 10, flex: 1,
      }}>
        <h3 style={{
          fontFamily: "'Syne', system-ui, sans-serif",
          fontWeight: 800, fontSize: 17, margin: 0,
          color: dk ? "#f8fafc" : "#0f172a",
          transition: "color 0.5s",
        }}>
          {name}
        </h3>

        <p style={{
          fontFamily: "monospace", fontSize: 11,
          lineHeight: 1.7, margin: 0, flex: 1,
          color: dk ? "#64748b" : "#94a3b8",
          transition: "color 0.5s",
        }}>
          {desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "monospace", fontSize: 9,
              padding: "3px 10px", borderRadius: 99,
              background: dk ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
              border: dk ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
              color: dk ? "#94a3b8" : "#64748b",
              textTransform: "uppercase", letterSpacing: "0.06em",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card footer — links */}
      <div style={{
        padding: "12px 20px",
        borderTop: dk ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
        display: "flex", gap: 10,
      }}>
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1, display: "flex", alignItems: "center",
            justifyContent: "center", gap: 6,
            padding: "9px 0", borderRadius: 8,
            fontFamily: "monospace", fontSize: 11, fontWeight: 700,
            color: "#fff", textDecoration: "none",
            background: `linear-gradient(135deg, ${color}, ${color}bb)`,
            boxShadow: hovered ? `0 4px 16px ${color}44` : "none",
            transition: "box-shadow 0.3s",
          }}
        >
          Live ↗
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1, display: "flex", alignItems: "center",
            justifyContent: "center", gap: 6,
            padding: "9px 0", borderRadius: 8,
            fontFamily: "monospace", fontSize: 11, fontWeight: 700,
            textDecoration: "none",
            border: dk ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
            color: dk ? "#94a3b8" : "#64748b",
            background: "transparent",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = color + "66";
            e.currentTarget.style.color = color;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = dk ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
            e.currentTarget.style.color = dk ? "#94a3b8" : "#64748b";
          }}
        >
          GitHub ⎇
        </a>
      </div>
    </div>
  );
}

export default function Projects({ darkMode }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const dk = darkMode;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = filter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 80px",
        background: dk ? "#060912" : "#eef2ff",
        boxSizing: "border-box",
        overflow: "hidden",
        transition: "background 0.5s",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: dk
          ? "radial-gradient(circle, rgba(56,189,248,0.1) 1px, transparent 1px)"
          : "radial-gradient(circle, rgba(2,132,199,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Glow orb */}
      <div style={{
        position: "absolute", top: "15%", left: "5%",
        width: 400, height: 400, borderRadius: "50%", pointerEvents: "none",
        background: dk
          ? "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
        filter: "blur(50px)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10,
        width: "100%", maxWidth: 1000,
        display: "flex", flexDirection: "column", gap: 48,
      }}>

        {/* Header */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <span style={{
            fontFamily: "monospace", fontSize: 11,
            color: dk ? "#22d3ee" : "#0e7490",
            letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            // things i've built
          </span>
          <h2 style={{
            fontFamily: "'Syne', 'Outfit', system-ui, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900, margin: "8px 0 0",
            color: dk ? "#f8fafc" : "#0f172a",
            letterSpacing: "-0.02em",
            transition: "color 0.5s",
          }}>
            My{" "}
            <span style={{
              background: dk
                ? "linear-gradient(135deg, #38bdf8, #818cf8)"
                : "linear-gradient(135deg, #0284c7, #6366f1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", display: "inline-block", transform: "translateZ(0)",
            }}>
              Projects
            </span>
          </h2>
          <p style={{
            fontFamily: "monospace", fontSize: 13, lineHeight: 1.8,
            color: dk ? "#64748b" : "#94a3b8",
            maxWidth: 480, marginTop: 12,
            transition: "color 0.5s",
          }}>
            Real projects I've built from scratch. Every one taught me something new.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 8,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
        }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "7px 18px", borderRadius: 99,
                fontFamily: "monospace", fontSize: 11, fontWeight: 600,
                cursor: "pointer", border: "1px solid",
                transition: "all 0.25s",
                borderColor: filter === f
                  ? dk ? "rgba(56,189,248,0.4)" : "rgba(2,132,199,0.4)"
                  : dk ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                background: filter === f
                  ? dk ? "rgba(56,189,248,0.1)" : "rgba(2,132,199,0.08)"
                  : "transparent",
                color: filter === f
                  ? dk ? "#38bdf8" : "#0284c7"
                  : dk ? "#64748b" : "#94a3b8",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
        }}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              darkMode={darkMode}
              visible={visible}
              delay={i * 80}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.8s",
        }}>
          <a
            href="https://github.com/ebuk-ka"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 28px", borderRadius: 10,
              fontFamily: "monospace", fontSize: 13, fontWeight: 700,
              textDecoration: "none",
              border: dk ? "1px solid rgba(56,189,248,0.25)" : "1px solid rgba(2,132,199,0.3)",
              color: dk ? "#38bdf8" : "#0284c7",
              background: "transparent", transition: "all 0.3s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = dk ? "rgba(56,189,248,0.08)" : "rgba(2,132,199,0.06)";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            See all projects on GitHub ↗
          </a>
        </div>

      </div>
    </section>
  );
}
