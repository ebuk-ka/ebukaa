// src/components/About.jsx
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "10+", label: "Projects Built" },
  { value: "UI",  label: "Focused" },
  { value: "∞",   label: "Still Learning" },
  { value:"☁️",   label: "Going into cloud eng"}
];

const PROJECTS = [
  { type: "E-Commerce",   icon: "🛒", desc: "Full shopping experiences with product pages, carts & checkout flows." },
  { type: "Landing Pages", icon: "🚀", desc: "Clean, conversion-focused pages built to look sharp on every screen." },
];

const SKILLS = ["React", "JavaScript", "HTML & CSS", "Tailwind", "Git", "Vite", "Responsive Design", "UI/UX Thinking"];

export default function About({ darkMode }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Fade in when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const dk = darkMode;

  return (
    <section
      id="about"
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
        position: "absolute", top: "20%", right: "5%",
        width: 400, height: 400, borderRadius: "50%", pointerEvents: "none",
        background: dk
          ? "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
        filter: "blur(50px)",
      }} />

      {/* ── Content ── */}
      <div style={{
        position: "relative", zIndex: 10,
        width: "100%", maxWidth: 1000,
        display: "flex", flexDirection: "column", gap: 64,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>

        {/* Section label */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{
            fontFamily: "monospace", fontSize: 11,
            color: dk ? "#22d3ee" : "#0e7490",
            letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            // about me
          </span>
          <h2 style={{
            fontFamily: "'Syne', 'Outfit', system-ui, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900, margin: 0,
            color: dk ? "#f8fafc" : "#0f172a",
            letterSpacing: "-0.02em",
            transition: "color 0.5s",
          }}>
            Who is{" "}
            <span style={{
              background: dk
                ? "linear-gradient(135deg, #38bdf8, #818cf8)"
                : "linear-gradient(135deg, #0284c7, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              transform: "translateZ(0)",
            }}>Ebuka?</span>
          </h2>
        </div>

        {/* Two column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 40,
          alignItems: "start",
        }}>

          {/* Left — bio + stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

            {/* Avatar + bio card */}
            <div style={{
              borderRadius: 16,
              border: dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
              background: dk ? "#0d1117" : "#ffffff",
              padding: 28,
              boxShadow: dk ? "0 20px 50px rgba(0,0,0,0.4)" : "0 10px 40px rgba(100,116,139,0.1)",
              transition: "all 0.5s",
            }}>
              {/* Avatar row */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                  background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "monospace", fontWeight: 900, fontSize: 22, color: "#fff",
                  boxShadow: dk ? "0 0 20px rgba(56,189,248,0.3)" : "0 4px 16px rgba(2,132,199,0.25)",
                }}>
                  E
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Syne', system-ui, sans-serif",
                    fontWeight: 800, fontSize: 18,
                    color: dk ? "#f8fafc" : "#0f172a",
                    transition: "color 0.5s",
                  }}>
                    Ebuka Okolo
                  </div>
                  <div style={{
                    fontFamily: "monospace", fontSize: 11,
                    color: dk ? "#22d3ee" : "#0e7490",
                    marginTop: 2,
                  }}>
                    Frontend Dev · Nigeria 🇳🇬
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p style={{
                fontFamily: "monospace",
                fontSize: 13, lineHeight: 1.9, margin: 0,
                color: dk ? "#94a3b8" : "#64748b",
                transition: "color 0.5s",
              }}>
                I'm Ebuka Okolo, a self-taught developer from Nigeria on a mission to master
                fullstack development. I've built e-commerce sites and landing pages that are
                clean, fast, and built to convert — and I'm just getting started. Every project
                teaches me something new, and I'm not stopping until I've shipped them all.
              </p>

              {/* Divider */}
              <div style={{
                height: 1, margin: "20px 0",
                background: dk ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)",
              }} />

              {/* Location + status */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  { icon: "📍", text: "Lagos, Nigeria" },
                  { icon: "🎯", text: "Learning Fullstack" },
                  { icon: "🟢", text: "Open to opportunities" },
                ].map(item => (
                  <span key={item.text} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "4px 12px", borderRadius: 99,
                    fontFamily: "monospace", fontSize: 11,
                    background: dk ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                    border: dk ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.07)",
                    color: dk ? "#94a3b8" : "#64748b",
                  }}>
                    {item.icon} {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12,
            }}>
              {STATS.map((stat, i) => (
                <div key={i} style={{
                  borderRadius: 12, padding: "16px 8px",
                  border: dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
                  background: dk ? "#0d1117" : "#ffffff",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 4, textAlign: "center",
                  boxShadow: dk ? "0 8px 24px rgba(0,0,0,0.3)" : "0 4px 16px rgba(100,116,139,0.08)",
                  transition: "all 0.5s",
                }}>
                  <span style={{
                    fontFamily: "'Syne', monospace", fontWeight: 900, fontSize: 20,
                    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text", display: "inline-block", transform: "translateZ(0)",
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontFamily: "monospace", fontSize: 9,
                    color: dk ? "#475569" : "#94a3b8",
                    textTransform: "uppercase", letterSpacing: "0.08em",
                  }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — projects + skills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* What I build */}
            <div style={{
              borderRadius: 16,
              border: dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
              background: dk ? "#0d1117" : "#ffffff",
              padding: 24,
              boxShadow: dk ? "0 20px 50px rgba(0,0,0,0.4)" : "0 10px 40px rgba(100,116,139,0.1)",
              transition: "all 0.5s",
            }}>
              <span style={{
                fontFamily: "monospace", fontSize: 11,
                color: dk ? "#22d3ee" : "#0e7490",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                // what i build
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
                {PROJECTS.map((p, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    padding: 16, borderRadius: 12,
                    background: dk ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                    border: dk ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
                    transition: "all 0.3s",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = dk ? "rgba(56,189,248,0.06)" : "rgba(2,132,199,0.05)";
                      e.currentTarget.style.borderColor = dk ? "rgba(56,189,248,0.15)" : "rgba(2,132,199,0.15)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = dk ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
                      e.currentTarget.style.borderColor = dk ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
                    }}
                  >
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{p.icon}</span>
                    <div>
                      <div style={{
                        fontFamily: "monospace", fontWeight: 700, fontSize: 13,
                        color: dk ? "#f1f5f9" : "#0f172a",
                        marginBottom: 4, transition: "color 0.5s",
                      }}>
                        {p.type}
                      </div>
                      <div style={{
                        fontFamily: "monospace", fontSize: 12, lineHeight: 1.7,
                        color: dk ? "#64748b" : "#94a3b8",
                        transition: "color 0.5s",
                      }}>
                        {p.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div style={{
              borderRadius: 16,
              border: dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
              background: dk ? "#0d1117" : "#ffffff",
              padding: 24,
              boxShadow: dk ? "0 20px 50px rgba(0,0,0,0.4)" : "0 10px 40px rgba(100,116,139,0.1)",
              transition: "all 0.5s",
            }}>
              <span style={{
                fontFamily: "monospace", fontSize: 11,
                color: dk ? "#22d3ee" : "#0e7490",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                // skills & tools
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {SKILLS.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 14px", borderRadius: 99,
                      fontFamily: "monospace", fontSize: 11, fontWeight: 600,
                      border: dk ? "1px solid rgba(56,189,248,0.2)" : "1px solid rgba(2,132,199,0.2)",
                      background: dk ? "rgba(56,189,248,0.07)" : "rgba(2,132,199,0.06)",
                      color: dk ? "#38bdf8" : "#0284c7",
                      transition: "all 0.3s", cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = dk ? "rgba(56,189,248,0.15)" : "rgba(2,132,199,0.12)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = dk ? "rgba(56,189,248,0.07)" : "rgba(2,132,199,0.06)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
