import { useEffect, useRef, useState } from "react";

const SOCIALS = [
    {
    name: "Email",
    handle: "okoloebuka756@gmail.com",
    url: "mailto:okoloebuka756@gmail.com",
    color: "#22d3ee",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "codewithebuka",
    url: "https://tiktok.com/@ebv_ka",
    color: "#ff0050",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+234 07079629569",
    url: "https://wa.me/2347079629569",
    color: "#25d366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "ebuk-ka",
    url: "https://github.com/EbukaOkolo",
    color: "#f0f6fc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Ebuka Okolo",
    url: "https://www.linkedin.com/in/ebuka-okolo-2022b0380/",
    color: "#0a66c2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@ebv_ka",
    url: "https://x.com/home",
    color: "#e7e9ea",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Contact({ darkMode }) {
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
      id="contact"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
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
        position: "absolute", bottom: "10%", right: "5%",
        width: 400, height: 400, borderRadius: "50%", pointerEvents: "none",
        background: dk
          ? "radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
        filter: "blur(50px)",
      }} />

      <div style={{
        position: "relative", zIndex: 10,
        width: "100%", maxWidth: 640,
        display: "flex", flexDirection: "column", gap: 48,
      }}>

        {/* Header */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          textAlign: "center",
        }}>
          <span style={{
            fontFamily: "monospace", fontSize: 11,
            color: dk ? "#22d3ee" : "#0e7490",
            letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            // let's connect
          </span>
          <h2 style={{
            fontFamily: "'Syne', 'Outfit', system-ui, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900, margin: "8px 0 0",
            color: dk ? "#f8fafc" : "#0f172a",
            letterSpacing: "-0.02em",
            transition: "color 0.5s",
          }}>
            Get In{" "}
            <span style={{
              background: dk
                ? "linear-gradient(135deg, #38bdf8, #818cf8)"
                : "linear-gradient(135deg, #0284c7, #6366f1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", display: "inline-block", transform: "translateZ(0)",
            }}>
              Touch
            </span>
          </h2>
          <p style={{
            fontFamily: "monospace", fontSize: 13, lineHeight: 1.8,
            color: dk ? "#64748b" : "#94a3b8",
            marginTop: 12, transition: "color 0.5s",
          }}>
            Whether it's a project, a collab, or just a hello — my DMs are open.
          </p>
        </div>

        {/* Social cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {SOCIALS.map((social, i) => (
            <SocialCard
              key={social.name}
              social={social}
              darkMode={dk}
              visible={visible}
              delay={i * 80}
            />
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.8s",
        }}>
          <p style={{
            fontFamily: "monospace", fontSize: 11,
            color: dk ? "#334155" : "#cbd5e1",
            margin: 0, transition: "color 0.5s",
          }}>
            Built with React ⚡ — ebuka
          </p>
        </div>

      </div>
    </section>
  );
}

function SocialCard({ social, darkMode, visible, delay }) {
  const [hovered, setHovered] = useState(false);
  const dk = darkMode;
  const { name, handle, url, color, icon } = social;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "16px 20px",
        borderRadius: 14,
        textDecoration: "none",
        border: hovered
          ? `1px solid ${color}55`
          : dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
        background: hovered
          ? dk ? `${color}10` : `${color}08`
          : dk ? "#0d1117" : "#ffffff",
        boxShadow: hovered
          ? `0 8px 30px ${color}18`
          : dk ? "0 4px 20px rgba(0,0,0,0.2)" : "0 2px 12px rgba(100,116,139,0.07)",
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.3s ease, border 0.3s, background 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: 44, height: 44,
        borderRadius: 12,
        background: hovered ? `${color}20` : dk ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
        border: hovered ? `1px solid ${color}44` : dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? color : dk ? "#64748b" : "#94a3b8",
        flexShrink: 0,
        transition: "all 0.3s",
      }}>
        {icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'Syne', system-ui, sans-serif",
          fontWeight: 700, fontSize: 14,
          color: dk ? "#f1f5f9" : "#0f172a",
          transition: "color 0.3s",
        }}>
          {name}
        </div>
        <div style={{
          fontFamily: "monospace", fontSize: 11,
          color: hovered ? color : dk ? "#475569" : "#94a3b8",
          marginTop: 2, transition: "color 0.3s",
        }}>
          {handle}
        </div>
      </div>

      {/* Arrow */}
      <span style={{
        fontFamily: "monospace", fontSize: 16,
        color: hovered ? color : dk ? "#334155" : "#cbd5e1",
        transition: "color 0.3s, transform 0.3s",
        transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
      }}>
        ↗
      </span>
    </a>
  );
}