// src/components/Hero.jsx
import { useState, useEffect } from "react";

const BADGES = [
  { label: "React",      color: "#61dafb", icon: "⚛" },
  { label: "JavaScript", color: "#f7df1e", icon: "JS" },
  { label: "TypeScript", color: "#3178c6", icon: "TS" },
  { label: "Tailwind",   color: "#38bdf8", icon: "✦" },
  { label: "HTML/CSS",   color: "#e34f26", icon: "🌐" },
  { label: "Vite",       color: "#646cff", icon: "⚡" },
  { label: "Git",        color: "#f1502f", icon: "⎇" },
  { label: "GitHub",     color: "#a78bfa", icon: "⎊" },
];

const TYPING_LINES = [
  "const dev = new ReactDev('Ebuka');",
  "dev.learning = ['React', 'JavaScript', 'Tailwind'];",
  "dev.building = 'real projects to grow my skills';",
  "dev.goal = '🚀 become a fullstack developer';",
  "export default dev; // the journey starts here ✦",
];

function highlight(line, dk) {
  const kw  = dk ? "#7dd3fc" : "#0369a1";
  const str = dk ? "#86efac" : "#15803d";
  const cmt = dk ? "#4b5563" : "#9ca3af";
  const acc = dk ? "#c084fc" : "#7c3aed";
  const op  = dk ? "#38bdf8" : "#0891b2";
  return line
    .replace(/(\/\/.*$)/g,                                         `<span style="color:${cmt}">$1</span>`)
    .replace(/\b(const|let|var|new|export|default|import|from)\b/g,`<span style="color:${kw}">$1</span>`)
    .replace(/('[^']*'|"[^"]*"|`[^`]*`)/g,                        `<span style="color:${str}">$1</span>`)
    .replace(/\b(dev|ReactDev)\b/g,                            `<span style="color:${acc}">$1</span>`)
    .replace(/(=(?!=))/g,                                          `<span style="color:${op}">$1</span>`);
}

function FloatingBadge({ label, color, icon, style, darkMode }) {
  return (
    <div style={{
      position: "absolute", display: "flex", alignItems: "center", gap: 7,
      padding: "6px 14px", borderRadius: 99,
      fontFamily: "monospace", fontSize: 11, fontWeight: 600,
      backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
      userSelect: "none", pointerEvents: "none",
      borderColor: `${color}40`,
      border: `1px solid ${color}40`,
      backgroundColor: darkMode ? `${color}14` : `${color}1c`,
      color,
      boxShadow: darkMode ? `0 0 18px ${color}25` : `0 2px 14px ${color}22`,
      ...style,
    }}>
      <span>{icon}</span>{label}
    </div>
  );
}

export default function Hero({ darkMode }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine,    setCurrentLine]    = useState("");
  const [lineIdx,        setLineIdx]        = useState(0);
  const [charIdx,        setCharIdx]        = useState(0);
  const [done,           setDone]           = useState(false);

  useEffect(() => {
    if (lineIdx >= TYPING_LINES.length) return;
    const line = TYPING_LINES[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => { setCurrentLine(p => p + line[charIdx]); setCharIdx(c => c + 1); }, 45);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayedLines(p => [...p, line]);
        setCurrentLine(""); setCharIdx(0); setLineIdx(l => l + 1);
      }, 320);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx]);

  useEffect(() => {
    if (lineIdx >= TYPING_LINES.length && !done) {
      const timer = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(timer);
    }
  }, [lineIdx, done]);

  const dk = darkMode;

  return (
    <section id="home" style={{
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "96px 24px 64px",
      overflow: "hidden",
      background: dk ? "#060912" : "#eef2ff",
      transition: "background 0.5s",
      boxSizing: "border-box",
    }}>

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: dk
          ? "radial-gradient(circle, rgba(56,189,248,0.16) 1px, transparent 1px)"
          : "radial-gradient(circle, rgba(2,132,199,0.11) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Glow blobs */}
      <div style={{
        position: "absolute", top: "5%", left: "8%",
        width: 500, height: 500, borderRadius: "50%", pointerEvents: "none",
        background: dk
          ? "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(56,189,248,0.13) 0%, transparent 70%)",
        filter: "blur(55px)",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "5%",
        width: 420, height: 420, borderRadius: "50%", pointerEvents: "none",
        background: dk
          ? "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 70%)",
        filter: "blur(55px)",
      }} />

      {/* Floating badges — visible on large screens only via CSS class */}
      <div className="hero-badges">
        <FloatingBadge {...BADGES[0]} darkMode={dk} style={{ top: "16%",   left:  "4%",  animation: "float1 6s ease-in-out infinite" }} />
        <FloatingBadge {...BADGES[1]} darkMode={dk} style={{ top: "24%",   right: "4%",  animation: "float2 7s ease-in-out infinite" }} />
        <FloatingBadge {...BADGES[2]} darkMode={dk} style={{ top: "56%",   left:  "2%",  animation: "float2 8s ease-in-out infinite" }} />
        <FloatingBadge {...BADGES[3]} darkMode={dk} style={{ bottom: "18%",right: "3%",  animation: "float1 6.5s ease-in-out infinite" }} />
        <FloatingBadge {...BADGES[4]} darkMode={dk} style={{ bottom: "30%",left:  "5%",  animation: "float3 9s ease-in-out infinite" }} />
        <FloatingBadge {...BADGES[5]} darkMode={dk} style={{ top: "43%",   right: "2%",  animation: "float1 7.5s ease-in-out infinite" }} />
        <FloatingBadge {...BADGES[6]} darkMode={dk} style={{ top: "8%",    right: "20%", animation: "float3 8.5s ease-in-out infinite" }} />
        <FloatingBadge {...BADGES[7]} darkMode={dk} style={{ bottom: "13%",left:  "18%", animation: "float2 7s ease-in-out infinite" }} />
      </div>

      {/* Main content */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center",
        width: "100%", maxWidth: 720, gap: 24,
      }}>

        {/* Status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 16px", borderRadius: 99,
          fontFamily: "monospace", fontSize: 12,
          border: dk ? "1px solid rgba(56,189,248,0.22)" : "1px solid rgba(2,132,199,0.22)",
          background: dk ? "rgba(56,189,248,0.08)" : "rgba(2,132,199,0.07)",
          color: dk ? "#38bdf8" : "#0284c7",
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#4ade80", boxShadow: "0 0 7px #4ade80",
            animation: "heroPulse 2s infinite",
            flexShrink: 0,
          }} />
          Learning React & building in public
        </div>

        {/* Headline */}
        <div>
          <h1 style={{
            margin: 0, fontFamily: "'Syne','Outfit',sans-serif",
            fontSize: "clamp(2.6rem, 7vw, 4.5rem)",
            fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em",
            color: dk ? "#fff" : "#0f172a", transition: "color 0.5s",
          }}>
            Hi, I'm{" "}
            <span style={{
              background: dk
                ? "linear-gradient(135deg,#38bdf8 0%,#818cf8 100%)"
                : "linear-gradient(135deg,#0284c7 0%,#6366f1 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", display: "inline-block", transform: "translateZ(0)",
            }}>Ebuka</span>
          </h1>
          <h2 style={{
            margin: "12px 0 0", fontFamily: "monospace",
            fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)", fontWeight: 500,
            color: dk ? "#94a3b8" : "#64748b", transition: "color 0.5s",
          }}>
            Frontend Developer &amp;{" "}
            <span style={{ color: dk ? "#38bdf8" : "#0284c7" }}>Aspiring Full-Stack Dev</span>
          </h2>
        </div>

        {/* Description */}
        <p style={{
          margin: 0, maxWidth: 560,
          fontFamily: "monospace", fontSize: "clamp(0.78rem, 1.6vw, 0.92rem)",
          lineHeight: 1.8, color: dk ? "#94a3b8" : "#64748b", transition: "color 0.5s",
        }}>
          I'm learning React and building real projects along the way.
          Every line of code is a step closer to where I want to be.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
          <a href="#projects" style={{
            padding: "12px 28px", borderRadius: 10,
            fontFamily: "monospace", fontSize: 14, fontWeight: 700,
            color: "#fff", textDecoration: "none",
            background: dk ? "linear-gradient(135deg,#0ea5e9,#6366f1)" : "linear-gradient(135deg,#0284c7,#4f46e5)",
            boxShadow: dk
              ? "0 0 28px rgba(56,189,248,0.32), 0 4px 20px rgba(99,102,241,0.2)"
              : "0 4px 20px rgba(2,132,199,0.35)",
            transition: "transform 0.2s, filter 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.1)"}
            onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
          >View Projects →</a>
          <a href="#contact" style={{
            padding: "12px 28px", borderRadius: 10,
            fontFamily: "monospace", fontSize: 14, fontWeight: 700,
            textDecoration: "none",
            color: dk ? "#38bdf8" : "#0284c7",
            border: dk ? "1px solid rgba(56,189,248,0.3)" : "1px solid rgba(2,132,199,0.35)",
            background: "transparent", transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = dk ? "rgba(56,189,248,0.08)" : "rgba(2,132,199,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >Contact Me ↗</a>
        </div>

        {/* Code block */}
        <div style={{
          width: "100%", borderRadius: 16, overflow: "hidden",
          border: dk ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(148,163,184,0.35)",
          background: dk ? "#0d1117" : "#fff",
          boxShadow: dk ? "0 25px 60px rgba(0,0,0,0.6)" : "0 12px 40px rgba(148,163,184,0.35)",
          transition: "all 0.5s",
        }}>
          {/* Titlebar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 7, padding: "10px 20px",
            borderBottom: dk ? "1px solid rgba(255,255,255,0.05)" : "1px solid #f1f5f9",
            background: dk ? "#161b22" : "#f8fafc",
          }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
            <span style={{ marginLeft: 10, fontFamily: "monospace", fontSize: 11, color: dk ? "#475569" : "#94a3b8" }}>ebuka.js</span>
            <span style={{
              marginLeft: "auto", fontFamily: "monospace", fontSize: 11,
              padding: "2px 10px", borderRadius: 6,
              color: dk ? "#38bdf8" : "#0284c7",
              border: dk ? "1px solid rgba(56,189,248,0.22)" : "1px solid rgba(2,132,199,0.2)",
              background: dk ? "rgba(56,189,248,0.08)" : "rgba(2,132,199,0.06)",
            }}>JavaScript</span>
          </div>

          {/* Code */}
          <div style={{ padding: "20px 24px", textAlign: "left", fontFamily: "monospace", fontSize: 13, lineHeight: 2, minHeight: 176 }}>
            {displayedLines.map((line, i) => (
              <div key={i} style={{ display: "flex", gap: 20 }}>
                <span style={{ minWidth: 16, textAlign: "right", color: dk ? "#2d3748" : "#d1d5db", userSelect: "none", fontSize: 11, paddingTop: 2 }}>{i + 1}</span>
                <span style={{ color: dk ? "#cbd5e1" : "#374151" }} dangerouslySetInnerHTML={{ __html: highlight(line, dk) }} />
              </div>
            ))}
            {!done && lineIdx < TYPING_LINES.length && (
              <div style={{ display: "flex", gap: 20 }}>
                <span style={{ minWidth: 16, textAlign: "right", color: dk ? "#2d3748" : "#d1d5db", userSelect: "none", fontSize: 11, paddingTop: 2 }}>{displayedLines.length + 1}</span>
                <span style={{ color: dk ? "#cbd5e1" : "#374151" }} dangerouslySetInnerHTML={{
                  __html: highlight(currentLine, dk) + `<span style="color:${dk ? "#38bdf8" : "#0284c7"};animation:blink 1s step-start infinite">▋</span>`
                }} />
              </div>
            )}
            {done && (
              <div style={{ display: "flex", gap: 20, marginTop: 4 }}>
                <span style={{ minWidth: 16, color: dk ? "#2d3748" : "#d1d5db", fontSize: 11 }}>{TYPING_LINES.length + 1}</span>
                <span style={{ color: dk ? "#38bdf8" : "#0284c7", animation: "blink 1s step-start infinite" }}>▋</span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ fontFamily: "monospace", fontSize: 11, color: dk ? "#1e293b" : "#94a3b8", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <span>scroll to explore</span>
          <span style={{ animation: "heroBounce 1.5s ease-in-out infinite" }}>↓</span>
        </div>
      </div>

      <style>{`
        @keyframes float1    { 0%,100%{transform:translateY(0) rotate(0deg)}  50%{transform:translateY(-14px) rotate(1deg)} }
        @keyframes float2    { 0%,100%{transform:translateY(0) rotate(0deg)}  50%{transform:translateY(-20px) rotate(-1deg)} }
        @keyframes float3    { 0%,100%{transform:translateY(0)} 33%{transform:translateY(-10px)} 66%{transform:translateY(-6px)} }
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes heroPulse { 0%,100%{opacity:1} 50%{opacity:0.45} }
        @keyframes heroBounce{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .hero-badges { display: none; }
        @media (min-width: 1280px) { .hero-badges { display: contents; } }
      `}</style>
    </section>
  );
}
