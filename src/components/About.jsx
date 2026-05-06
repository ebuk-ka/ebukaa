// src/components/About.jsx

import { useEffect, useRef, useState } from "react";

export default function About({ darkMode }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
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
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px",
        background: "linear-gradient(to bottom, rgba(45,31,31,0.6) 0%, #2D1F1F 20%)",
        overflow: "hidden",
        transition: "background 0.5s ease",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: dk
            ? "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)"
            : "radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.4,
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          top: "10%",
          right: "-10%",
          background: dk
            ? "radial-gradient(circle, rgba(56,189,248,0.10), transparent 70%)"
            : "radial-gradient(circle, rgba(99,102,241,0.10), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Quote Icon */}
        <div
          style={{
            fontSize: "clamp(5rem, 12vw, 10rem)",
            lineHeight: 1,
            fontWeight: 900,
            color: dk
              ? "rgba(255,255,255,0.08)"
              : "rgba(15,23,42,0.08)",
            marginBottom: -20,
            fontFamily: "'Syne', sans-serif",
            userSelect: "none",
          }}
        >
          ”
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.4rem, 7vw, 6.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.07em",
            fontWeight: 800,
            maxWidth: 1000,
            color: dk ? "#f8fafc" : "#0f172a",
            margin: 0,
          }}
        >
          Building
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              opacity: 0.75,
              marginLeft: 16,
            }}
          >
            modern
          </span>

          <br />

          digital experiences
          <span
            style={{
              display: "inline-block",
              padding: "0px 14px",
              borderRadius: 12,
              marginLeft: 14,
              background: dk
                ? "rgba(255,255,255,0.08)"
                : "rgba(15,23,42,0.08)",
            }}
          >
            that convert.
          </span>
        </h2>

        {/* Divider */}
        <div
          style={{
            width: 120,
            height: 1,
            margin: "42px 0 32px",
            background: dk
              ? "rgba(255,255,255,0.14)"
              : "rgba(15,23,42,0.14)",
          }}
        />

        {/* About Text */}
        <p
          style={{
            maxWidth: 720,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            lineHeight: 1.9,
            color: dk ? "#94a3b8" : "#475569",
            margin: 0,
          }}
        >
          I’m Ebuka Okolo — a fullstack developer focused on creating
          clean, scalable and visually refined web experiences.
          From sleek landing pages to full web systems,
          I build products that combine performance,
          simplicity and modern design.
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            marginTop: 42,
          }}
        >
          {[
            "React",
            "Supabase",
            "Modern UI",
            "Responsive Systems",
            "Frontend & Backend",
          ].map((item) => (
            <span
              key={item}
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                background: dk
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(15,23,42,0.05)",
                border: dk
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(15,23,42,0.08)",
                color: dk ? "#e2e8f0" : "#334155",
                backdropFilter: "blur(10px)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}