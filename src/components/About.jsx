import "./About.css";
// src/components/About.jsx
import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { Code2, Layers, Zap, Users, ShieldCheck } from "lucide-react";

const ORANGE = "#F97316";

const skills = [
  {
    num: "01",
    Icon: Code2,
    title: "Fullstack Development",
    desc: "I build both the frontend and backend, from React UIs to Node APIs, databases, and authentication. One developer handles the whole stack so nothing gets lost in translation.",
  },
  {
    num: "02",
    Icon: Layers,
    title: "Design That Converts",
    desc: "Clean, modern interfaces that not only look great but guide users toward action. I think about UX, hierarchy, and flow.",
  },
  {
    num: "03",
    Icon: Zap,
    title: "Fast Delivery",
    desc: "Fast delivery with clear direction. I understand the brief, ask the right questions, and deliver work that launches quickly.",
  },
  {
    num: "04",
    Icon: Users,
    title: "Business-First Thinking",
    desc: "I focus on customers, goals, and revenue. Every decision is about making your product work for your business.",
  },
  {
    num: "05",
    Icon: ShieldCheck,
    title: "Reliable & Maintainable",
    desc: "Code you can build on. I write clean, structured systems, not a mess you'll have to rewrite.",
  },
];

export default function About() {
  const [sectionRef, visible] = useReveal();
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide((current) => (current - 1 + skills.length) % skills.length);
  const nextSlide = () => setCurrentSlide((current) => (current + 1) % skills.length);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(40px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <>
      <section id="about" ref={sectionRef} className="about-section">
        <div className="about-overlay-dot-grid" />
        <div className="about-glow" />

        <div className="about-container">

          {/* Eyebrow */}
          <div className="about-eyebrow" style={fadeUp(0)}>
            <span className="about-eyebrow-dot" />
            <span className="about-eyebrow-text">About me</span>
          </div>

          {/* Headline */}
         <div className="about-headline" style={fadeUp(0.1)}>
          <h2 className="main">I BUILD WITH</h2>
          <h2 className="accent">PURPOSE.</h2>
          <h2 className="sub">Engineering ideas into reality.</h2>
        </div>

          {/* Divider */}
          <div className="about-divider" style={fadeUp(0.18)} />

          {/* Bio */}
              <p className="about-bio" style={fadeUp(0.22)}>
  I'm <strong style={{ color: "#f5ede8", fontWeight: 600 }}>Ebuka Okolo</strong> —
  a software engineer and product builder focused on turning ideas into
  useful digital experiences. From intuitive interfaces to backend systems
  and APIs, I enjoy working across the stack to solve real problems and
  build technology people can rely on.
</p>

          {/* What I do */}
          <p className="about-what-label" style={fadeUp(0.26)}>What I do</p>
          <h3 className="about-what-title" style={fadeUp(0.3)}>Clean, responsive work with modern development and clear communication.</h3>

          <div className="about-carousel" role="region" aria-roledescription="carousel" aria-label="Services" style={fadeUp(0.34)}>
            <div className="about-carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {skills.map((s) => {
                const { Icon } = s;
                return (
                  <div key={s.num} className="about-carousel-slide" role="group" aria-roledescription="slide" aria-label={`${s.num} of ${skills.length}`} aria-hidden={currentSlide !== Number(s.num) - 1}>
                    <div className="about-carousel-card">
                      <div className="about-card-glow" />
                      <span className="about-card-num">{s.num}</span>
                      <div className="about-card-icon">
                        <Icon size={20} color={ORANGE} strokeWidth={1.8} />
                      </div>
                      <p className="about-card-title">{s.title}</p>
                      <p className="about-card-desc">{s.desc}</p>
                      <div className="about-card-line" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about-carousel-nav" style={fadeUp(0.42)}>
            <button type="button" className="about-carousel-button" onClick={prevSlide}>Previous</button>
            <div className="about-carousel-counter" aria-live="polite" aria-atomic="true">{String(currentSlide + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}</div>
            <button type="button" className="about-carousel-button" onClick={nextSlide}>Next</button>
          </div>

        </div>
      </section>
    </>
  );
}
