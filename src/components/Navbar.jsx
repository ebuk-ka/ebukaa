// src/components/Navbar.jsx
import { useState, useEffect } from "react";

const NAV_ITEMS = ["home", "about", "code", "skills", "projects", "contact"];

export default function Navbar({ darkMode, setDarkMode }) {
  const [active,   setActive]   = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (let id of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop - 120;
        if (window.scrollY >= top && window.scrollY < top + el.offsetHeight) {
          setActive(id); return;
        }
      }
      setActive("home");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const dk = darkMode;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
        transition: "all 0.4s ease",
        background: scrolled ? (dk ? "rgba(6,9,18,0.88)" : "rgba(255,255,255,0.88)") : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(148,163,184,0.3)"
          : "1px solid transparent",
        boxSizing: "border-box",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
              outline: "none", userSelect: "none", WebkitTapHighlightColor: "transparent" }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10, flexShrink: 0,
              background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 900, fontSize: 14, fontFamily: "monospace",
              position: "relative",
              boxShadow: dk ? "0 0 18px rgba(56,189,248,0.45)" : "0 4px 14px rgba(2,132,199,0.35)",
            }}>
              E
              <span style={{
                position: "absolute", top: -4, right: -4,
                width: 9, height: 9, borderRadius: "50%",
                background: "#4ade80",
                border: `2px solid ${dk ? "#060912" : "#eef2ff"}`,
                boxShadow: "0 0 6px #4ade80",
              }} />
            </div>
            <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 14, color: dk ? "#fff" : "#0f172a" }}>
              ebuka
              <span style={{
                background: "linear-gradient(135deg,#38bdf8,#818cf8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", display: "inline-block", transform: "translateZ(0)",
              }}>.codes</span>
            </span>
          </a>

          <ul className="nb-desktop" style={{ display: "flex", alignItems: "center", gap: 2, listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_ITEMS.map(item => {
              const on = active === item;
              return (
                <li key={item}>
                  <a href={`#${item}`} style={{
                    display: "flex", alignItems: "center", gap: 5,
                    padding: "7px 14px", borderRadius: 9,
                    fontFamily: "monospace", fontSize: 12, textDecoration: "none",
                    transition: "all 0.25s",
                    color: on ? (dk ? "#38bdf8" : "#0284c7") : (dk ? "#94a3b8" : "#64748b"),
                    background: on ? (dk ? "rgba(56,189,248,0.1)" : "rgba(2,132,199,0.08)") : "transparent",
                  }}>
                    {on && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#38bdf8", flexShrink: 0 }} />}
                    /{item}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setDarkMode(d => !d)} aria-label="Toggle theme" style={{
              width: 46, height: 24, borderRadius: 99, cursor: "pointer", padding: 0,
              border: dk ? "1px solid rgba(56,189,248,0.3)" : "1px solid #cbd5e1",
              background: dk ? "rgba(56,189,248,0.08)" : "#e2e8f0",
              position: "relative", flexShrink: 0,
            }}>
              <span style={{
                position: "absolute", top: 3,
                left: dk ? 3 : "calc(100% - 21px)",
                width: 16, height: 16, borderRadius: "50%",
                background: dk ? "#0ea5e9" : "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
                boxShadow: dk ? "0 0 10px rgba(14,165,233,0.7)" : "0 1px 4px rgba(0,0,0,0.18)",
              }}>{dk ? "🌙" : "☀️"}</span>
            </button>

            <a href="#contact" className="nb-desktop" style={{
              padding: "8px 16px", borderRadius: 9,
              fontFamily: "monospace", fontSize: 12, fontWeight: 700,
              color: "#fff", textDecoration: "none", whiteSpace: "nowrap",
              background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
              boxShadow: dk ? "0 0 20px rgba(56,189,248,0.28)" : "0 4px 14px rgba(2,132,199,0.3)",
            }}>Let's Connect ↗</a>

            <button onClick={() => setMenuOpen(o => !o)} className="nb-mobile" aria-label="Toggle menu" style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 6, display: "flex", flexDirection: "column",
              gap: 5, alignItems: "center", justifyContent: "center",
            }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", height: 1.5, width: 22,
                  background: dk ? "#fff" : "#0f172a",
                  borderRadius: 4, transition: "all 0.3s ease", transformOrigin: "center",
                  transform:
                    i === 0 && menuOpen ? "rotate(45deg) translate(4px, 4px)" :
                    i === 2 && menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      <div style={{ position: "fixed", inset: 0, zIndex: 49, pointerEvents: menuOpen ? "auto" : "none" }}>
        <div onClick={() => setMenuOpen(false)} style={{
          position: "absolute", inset: 0,
          background: dk ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.25)",
          backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0, transition: "opacity 0.4s",
        }} />
        <div style={{
          position: "absolute", top: 0, right: 0, height: "100%", width: 280,
          background: dk ? "#060912" : "#fff",
          borderLeft: dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid #e2e8f0",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
          display: "flex", flexDirection: "column", boxSizing: "border-box",
        }}>
          <div style={{
            height: 64, padding: "0 24px", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            borderBottom: dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid #f1f5f9",
          }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: dk ? "#475569" : "#94a3b8" }}>navigation</span>
            <button onClick={() => setMenuOpen(false)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 24, color: dk ? "#94a3b8" : "#64748b", lineHeight: 1, padding: 4,
            }}>×</button>
          </div>

          <ul style={{ listStyle: "none", margin: 0, padding: "20px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_ITEMS.map((item, i) => {
              const on = active === item;
              return (
                <li key={item} style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(24px)",
                  transition: `all 0.35s ease ${i * 55}ms`,
                }}>
                  <a href={`#${item}`} onClick={() => setMenuOpen(false)} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 16px", borderRadius: 12,
                    fontFamily: "monospace", fontSize: 13, textDecoration: "none", transition: "all 0.25s",
                    color: on ? (dk ? "#38bdf8" : "#0284c7") : (dk ? "#94a3b8" : "#64748b"),
                    background: on ? (dk ? "rgba(56,189,248,0.1)" : "rgba(2,132,199,0.07)") : "transparent",
                    border: on ? `1px solid ${dk ? "rgba(56,189,248,0.2)" : "rgba(2,132,199,0.15)"}` : "1px solid transparent",
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontFamily: "monospace", fontSize: 10, color: dk ? "#334155" : "#cbd5e1" }}>0{i + 1}</span>
                      /{item}
                    </span>
                    {on && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8" }} />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ padding: "0 16px" }}>
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 14, borderRadius: 12,
              fontFamily: "monospace", fontSize: 13, fontWeight: 700,
              color: "#fff", textDecoration: "none",
              background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
              boxShadow: "0 0 20px rgba(56,189,248,0.2)",
            }}>Let's Connect ↗</a>
          </div>

          <div style={{
            marginTop: "auto", padding: "32px 0", textAlign: "center",
            fontFamily: "monospace", fontSize: 11,
            color: dk ? "#1e293b" : "#e2e8f0",
          }}>ebuka.codes</div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .nb-mobile { display: none !important; } }
        @media (max-width: 767px) { .nb-desktop { display: none !important; } }
      `}</style>
    </>
  );
}
