// src/components/About.jsx
import { useEffect, useRef, useState } from "react";
import { Code2, Layers, Zap, Users, ShieldCheck } from "lucide-react";

const ORANGE = "#F97316";

const CSS = `
.about-section {
  position: relative;
  width: 100%;
  padding: 120px 24px;
  background: #271919;
  overflow: hidden;
  color: #f5ece6;
}

.about-overlay-dot-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, rgba(249,115,22,0.07) 1px, transparent 1px);
  background-size: 30px 30px;
}

.about-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  top: -10%;
  right: -15%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(249,115,22,0.08), transparent 70%);
}

.about-container {
  position: relative;
  z-index: 10;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 999px;
  border: 1px solid rgba(249,115,22,0.25);
  background: rgba(249,115,22,0.15);
  margin-bottom: 32px;
}

.about-eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #F97316;
  display: inline-block;
}

.about-eyebrow-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #F97316;
}

.about-headline {
  text-align: center;
  margin-bottom: 12px;
}

.about-headline h2 {
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.about-headline h2.main {
  font-size: clamp(2.4rem, 6.5vw, 5.8rem);
  line-height: 0.97;
  color: #f5ede8;
}

.about-headline h2.accent {
  font-size: clamp(2.4rem, 6.5vw, 5.8rem);
  line-height: 1.05;
  margin-top: 4px;
  font-style: italic;
  color: #F97316;
}

.about-headline h2.sub {
  font-size: clamp(1.6rem, 4vw, 3.8rem);
  line-height: 1.1;
  margin-top: 10px;
  font-weight: 700;
  color: rgba(245,237,232,0.7);
}

.about-divider {
  width: 52px;
  height: 3px;
  border-radius: 2px;
  background: #F97316;
  margin: 36px 0;
}

.about-bio {
  max-width: 680px;
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.9;
  color: rgba(245,237,232,0.65);
  text-align: center;
  margin: 0 0 72px;
}

/* WHAT I DO */
.about-what-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #F97316;
  margin: 0 0 12px;
  text-align: center;
}

.about-what-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #f5ede8;
  margin: 0 0 48px;
  text-align: center;
  letter-spacing: -0.03em;
}

.about-carousel {
  width: 100%;
  max-width: 920px;
  margin: 0 auto 24px;
  overflow: hidden;
  position: relative;
}

.about-carousel-track {
  display: flex;
  transition: transform 0.65s ease;
  width: 100%;
}

.about-carousel-slide {
  min-width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
}

.about-carousel-card {
  position: relative;
  width: 100%;
  padding: 28px 24px 26px;
  border-radius: 24px;
  background: rgba(61,42,42,0.75);
  border: 1px solid rgba(249,115,22,0.12);
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: hidden;
}

.about-carousel-card:hover {
  border-color: rgba(249,115,22,0.28);
  background: rgba(61,42,42,0.9);
}

.about-card-glow {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  top: -30px;
  right: -20px;
  background: radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.about-carousel-card:hover .about-card-glow {
  opacity: 1;
}

.about-card-num {
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: rgba(249,115,22,0.45);
  text-transform: uppercase;
}

.about-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(249,115,22,0.12);
  border: 1px solid rgba(249,115,22,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-card-title {
  font-family: 'Syne', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #f5ede8;
  line-height: 1.2;
  margin: 0;
}

.about-card-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(245,237,232,0.78);
  margin: 0;
}

.about-card-line {
  width: 28px;
  height: 2px;
  border-radius: 2px;
  background: rgba(249,115,22,0.4);
  margin-top: 4px;
  transition: width 0.3s ease;
}

.about-carousel-card:hover .about-card-line {
  width: 48px;
}

.about-carousel-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 56px;
}

.about-carousel-button {
  border: 1px solid rgba(249,115,22,0.18);
  background: rgba(255,255,255,0.04);
  color: #f5ece6;
  padding: 12px 20px;
  border-radius: 999px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.about-carousel-button:hover {
  background: rgba(249,115,22,0.18);
  transform: translateY(-1px);
}

.about-carousel-counter {
  color: rgba(245,237,232,0.65);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  letter-spacing: 0.08em;
}

/* TAGS */
.about-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.about-tag {
  padding: 8px 16px;
  border-radius: 999px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  background: rgba(249,115,22,0.08);
  border: 1px solid rgba(249,115,22,0.18);
  color: rgba(245,237,232,0.75);
}

@media (max-width: 760px) {
  .about-section { padding: 100px 18px; }
  .about-carousel { max-width: 100%; }
}

@media (max-width: 560px) {
  .about-section { padding: 80px 16px; }
}
`;

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
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % skills.length);
    }, 4500);

    return () => clearInterval(autoSlide);
  }, []);

  const prevSlide = () => setCurrentSlide((current) => (current - 1 + skills.length) % skills.length);
  const nextSlide = () => setCurrentSlide((current) => (current + 1) % skills.length);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(40px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <>
      <style>{CSS}</style>

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
            <h2 className="main">I don't just build</h2>
            <h2 className="accent">websites.</h2>
            <h2 className="sub">I solve business problems.</h2>
          </div>

          {/* Divider */}
          <div className="about-divider" style={fadeUp(0.18)} />

          {/* Bio */}
          <p className="about-bio" style={fadeUp(0.22)}>
            I'm <strong style={{ color: "#f5ede8", fontWeight: 600 }}>Ebuka Okolo</strong> — a fullstack
            developer who helps businesses get online, get noticed, and get results. Whether you need a
            landing page, a complete web system, or a mobile app — I take your problem and turn it into
            a product that works.
          </p>

          {/* What I do */}
          <p className="about-what-label" style={fadeUp(0.26)}>What I do</p>
          <h3 className="about-what-title" style={fadeUp(0.3)}>Clean, responsive work with modern development and clear communication.</h3>

          <div className="about-carousel" style={fadeUp(0.34)}>
            <div className="about-carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {skills.map((s) => {
                const { Icon } = s;
                return (
                  <div key={s.num} className="about-carousel-slide">
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
            <div className="about-carousel-counter">{String(currentSlide + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}</div>
            <button type="button" className="about-carousel-button" onClick={nextSlide}>Next</button>
          </div>

          {/* Tags */}
          <div className="about-tags" style={fadeUp(0.5)}>
            {["React", "Node.js", "Supabase", "React Native", "PostgreSQL", "REST APIs", "UI/UX Design", "Fullstack Systems"].map((tag) => (
              <span key={tag} className="about-tag">{tag}</span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}