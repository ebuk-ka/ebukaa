// src/components/Skills.jsx
import { useEffect, useRef, useState } from "react";

const SKILLS = [
  {
    name: "HTML",
    icon: "🌐",
    color: "#e34f26",
    level: 100,
    tag: "Foundation",
    desc: "Semantic markup, accessibility, structure.",
  },
  {
    name: "CSS",
    icon: "🎨",
    color: "#264de4",
    level: 100,
    tag: "Styling",
    desc: "Layouts, animations, responsive design.",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "#f7df1e",
    level: 80,
    tag: "Language",
    desc: "DOM manipulation, logic, ES6+ features.",
  },
  {
    name: "React",
    icon: "⚛",
    color: "#61dafb",
    level: 70,
    tag: "Framework",
    desc: "Components, hooks, state management.",
  },
  {
    name: "Tailwind",
    icon: "✦",
    color: "#38bdf8",
    level: 75,
    tag: "Styling",
    desc: "Utility-first CSS, rapid UI building.",
  },
  {
    name: "Git",
    icon: "⎇",
    color: "#f1502f",
    level: 90,
    tag: "Tool",
    desc: "Version control, commits, branching.",
  },
  {
    name: "Figma",
    icon: "🖌",
    color: "#a259ff",
    level: 80,
    tag: "Design",
    desc: "UI design, wireframes, prototyping.",
  },
];

function SkillCard({ skill, darkMode, visible, delay }) {
  const [hovered, setHovered] = useState(false);
  const [barFilled, setBarFilled] = useState(false);
  const dk = darkMode;

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setBarFilled(true), delay + 300);
      return () => clearTimeout(t);
    }
  }, [visible, delay]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        border: hovered
          ? `1px solid ${skill.color}44`
          : dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
        background: hovered
          ? dk ? `${skill.color}0d` : `${skill.color}0a`
          : dk ? "#0d1117" : "#ffffff",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        cursor: "default",
        boxShadow: hovered
          ? `0 20px 40px ${skill.color}18`
          : dk ? "0 8px 30px rgba(0,0,0,0.3)" : "0 4px 20px rgba(100,116,139,0.08)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.3s ease, border 0.3s, background 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Top row — icon + tag */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: `${skill.color}18`,
          border: `1px solid ${skill.color}33`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22,
          boxShadow: hovered ? `0 0 16px ${skill.color}33` : "none",
          transition: "box-shadow 0.3s",
        }}>
          {skill.icon}
        </div>
        <span style={{
          fontFamily: "monospace", fontSize: 10,
          padding: "3px 10px", borderRadius: 99,
          background: `${skill.color}15`,
          border: `1px solid ${skill.color}30`,
          color: skill.color,
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          {skill.tag}
        </span>
      </div>

      {/* Name */}
      <div>
        <div style={{
          fontFamily: "'Syne', system-ui, sans-serif",
          fontWeight: 800, fontSize: 18,
          color: dk ? "#f8fafc" : "#0f172a",
          transition: "color 0.5s",
        }}>
          {skill.name}
        </div>
        <div style={{
          fontFamily: "monospace", fontSize: 11,
          color: dk ? "#64748b" : "#94a3b8",
          marginTop: 4, lineHeight: 1.6,
          transition: "color 0.5s",
        }}>
          {skill.desc}
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          marginBottom: 6,
        }}>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: dk ? "#475569" : "#94a3b8" }}>
            proficiency
          </span>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: skill.color, fontWeight: 700 }}>
            {skill.level}%
          </span>
        </div>
        {/* Track */}
        <div style={{
          height: 4, borderRadius: 99,
          background: dk ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}>
          {/* Fill */}
          <div style={{
            height: "100%", borderRadius: 99,
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
            width: barFilled ? `${skill.level}%` : "0%",
            transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: `0 0 8px ${skill.color}66`,
          }} />
        </div>
      </div>
    </div>
  );
}

export default function Skills({ darkMode }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const dk = darkMode;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
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
        position: "absolute", top: "10%", right: "10%",
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
            // what i know
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
              Skills
            </span>
          </h2>
          <p style={{
            fontFamily: "monospace", fontSize: 13, lineHeight: 1.8,
            color: dk ? "#64748b" : "#94a3b8",
            maxWidth: 480, marginTop: 12,
            transition: "color 0.5s",
          }}>
            Tools and technologies I've picked up building real projects.
            Still growing — this list gets longer every month.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
        }}>
          {SKILLS.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              darkMode={darkMode}
              visible={visible}
              delay={i * 80}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.8s",
        }}>
          <span style={{
            fontFamily: "monospace", fontSize: 12,
            color: dk ? "#1e293b" : "#cbd5e1",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <span style={{ color: dk ? "#22d3ee" : "#0e7490" }}>+</span>
            Always learning something new
            <span style={{ color: dk ? "#22d3ee" : "#0e7490" }}>+</span>
          </span>
        </div>

      </div>
    </section>
  );
}
