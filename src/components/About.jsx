// src/components/About.jsx
import { useEffect, useRef, useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuUser, LuUserRound } from "react-icons/lu";

const ORANGE = "#F97316";
const ORANGE_DIM = "rgba(249,115,22,0.15)";
const ORANGE_BORDER = "rgba(249,115,22,0.25)";
const DARK = "#271919";

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

.about-review-intro {
  text-align: center;
  margin-bottom: 40px;
}

.about-review-intro p {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #F97316;
  margin: 0 0 8px;
}

.about-review-intro h3 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #f5ede8;
  margin: 0;
  letter-spacing: -0.03em;
}

.about-reviews {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  max-width: 900px;
  margin-bottom: 56px;
}

.about-nav-button {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  flex-shrink: 0;
  border: 1px solid rgba(249,115,22,0.2);
  background: rgba(249,115,22,0.15);
  color: #F97316;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.2s;
}

.about-card {
  flex: 1;
  width: 100%;
  max-width: 760px;
  min-height: 320px;
  padding: 32px 28px;
  border-radius: 22px;
  background: rgba(61,42,42,0.68);
  border: 1px solid rgba(249,115,22,0.15);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.about-star-row {
  display: flex;
  gap: 4px;
}

.about-review-text {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.85;
  color: rgba(245,237,232,0.78);
  flex: 1;
}

.about-reviewer {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 18px;
  border-top: 1px solid rgba(249,115,22,0.12);
}

.about-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.about-reviewer-info {
  display: flex;
  flex-direction: column;
}

.about-reviewer-name {
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #f5ede8;
}

.about-reviewer-role {
  margin: 2px 0 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: rgba(245,237,232,0.42);
}

.about-badge {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 0.04em;
  color: #F97316;
}

.about-dots {
  display: flex;
  justify-content: center;
  gap: 7px;
  margin-top: 4px;
}

.about-dots button {
  border: none;
  cursor: pointer;
  transition: width 0.35s ease, background 0.35s ease;
}

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

@media (max-width: 900px) {
  .about-reviews {
    flex-direction: column;
  }
}

@media (max-width: 760px) {
  .about-section {
    padding: 100px 18px;
  }

  .about-card {
    min-height: auto;
    padding: 28px 22px;
  }
}

@media (max-width: 560px) {
  .about-section {
    padding: 80px 16px;
  }

  .about-eyebrow {
    padding: 6px 14px;
  }

  .about-headline h2.main,
  .about-headline h2.accent,
  .about-headline h2.sub {
    font-size: clamp(1.8rem, 9vw, 3.2rem);
  }

  .about-tag {
    font-size: 12px;
    padding: 7px 14px;
  }
}
`;

const reviews = [
  {
    name: "Chidi Okonkwo",
    role: "CEO, Okonkwo Ventures",
    initials: "CO",
    gender: "male",
    text: "Ebuka built our entire business platform from scratch. Clean, fast, and exactly what we needed. He understood the brief immediately and delivered beyond expectations.",
    stars: 5,
  },
  {
    name: "Ngozi Adeyemi",
    role: "Founder, NaijaMart",
    initials: "NA",
    gender: "female",
    text: "I came with just an idea and left with a fully functional e-commerce site. He's not just a developer — he thinks like a business owner. Highly recommend.",
    stars: 5,
  },
  {
    name: "Emeka Nwosu",
    role: "Director, TechBridge Lagos",
    initials: "EN",
    gender: "male",
    text: "We had a broken system nobody could fix. Ebuka diagnosed the problem in hours and rebuilt the whole backend. Our team was shocked. Real problem solver.",
    stars: 5,
  },
  {
    name: "Amaka Obi",
    role: "Owner, Amaka Couture",
    initials: "AO",
    gender: "female",
    text: "My fashion brand needed a proper online presence. He delivered a stunning website that gets me new clients every week. The ROI has been amazing.",
    stars: 5,
  },
  {
    name: "Tunde Fashola",
    role: "MD, Fashola Properties",
    initials: "TF",
    gender: "male",
    text: "Professional, fast and communicates clearly. He built our property listing platform and it's been running flawlessly for months. Will work with him again.",
    stars: 5,
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState("next");
  const autoRef = useRef(null);

  const goTo = (idx, dir = "next") => {
    if (sliding) return;
    setDirection(dir);
    setSliding(true);
    setTimeout(() => {
      setCurrent(idx);
      setSliding(false);
    }, 420);
  };

  const prev = () => goTo((current - 1 + reviews.length) % reviews.length, "prev");
  const next = () => goTo((current + 1) % reviews.length, "next");

  // Auto-advance every 4 seconds
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setDirection("next");
      setSliding(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % reviews.length);
        setSliding(false);
      }, 420);
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, []);

  // Reset timer when user manually navigates
  const manualNav = (fn) => {
    clearInterval(autoRef.current);
    fn();
    autoRef.current = setInterval(() => {
      setDirection("next");
      setSliding(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % reviews.length);
        setSliding(false);
      }, 420);
    }, 4000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(40px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const slideStyle = {
    opacity: sliding ? 0 : 1,
    transform: sliding
      ? direction === "next" ? "translateX(40px)" : "translateX(-40px)"
      : "translateX(0px)",
    transition: "opacity 0.42s ease, transform 0.42s ease",
  };

  const r = reviews[current];
  const isFemale = r.gender === "female";

  // Female = pinkish avatar, Male = blue-ish avatar
  const avatarBg = isFemale ? "rgba(249,115,22,0.18)" : "rgba(249,115,22,0.1)";
  const avatarBorder = isFemale ? "rgba(249,115,22,0.4)" : "rgba(249,115,22,0.22)";

  return (
    <>
      <style>{CSS}</style>

      <section id="about" ref={sectionRef} className="about-section">
        <div className="about-overlay-dot-grid" />
        <div className="about-glow" />

        <div className="about-container">
          <div className="about-eyebrow" style={fadeUp(0)}>
            <span className="about-eyebrow-dot" />
            <span className="about-eyebrow-text">About me</span>
          </div>

          <div className="about-headline" style={fadeUp(0.1)}>
            <h2 className="main">I don't just build</h2>
            <h2 className="accent">websites.</h2>
            <h2 className="sub">I solve business problems.</h2>
          </div>

          <div className="about-divider" style={fadeUp(0.18)} />

          <p className="about-bio" style={fadeUp(0.22)}>
            I'm <strong style={{ color: "#f5ede8", fontWeight: 600 }}>Ebuka Okolo</strong> — a fullstack developer who helps businesses get online, get noticed, and get results. Whether you need a landing page, a complete web system, or a mobile app — I take your problem and turn it into a product that works.
          </p>

          <div className="about-review-intro" style={fadeUp(0.28)}>
            <p>What clients say</p>
            <h3>Real results, real people.</h3>
          </div>

          <div className="about-reviews" style={fadeUp(0.34)}>
            <button type="button" className="about-nav-button" onClick={() => manualNav(prev)}>
              <FaChevronLeft size={14} />
            </button>

            <div className="about-card" style={slideStyle}>
              <FaQuoteLeft style={{ color: ORANGE, opacity: 0.4, fontSize: 22 }} />

              <div className="about-star-row">
                {Array(r.stars).fill(0).map((_, si) => (
                  <FaStar key={si} style={{ color: ORANGE, fontSize: 14 }} />
                ))}
              </div>

              <p className="about-review-text">"{r.text}"</p>

              <div className="about-reviewer">
                <div className="about-avatar" style={{ background: avatarBg, border: `2px solid ${avatarBorder}` }}>
                  {isFemale ? <LuUserRound size={22} color={ORANGE} strokeWidth={1.8} /> : <LuUser size={22} color={ORANGE} strokeWidth={1.8} />}
                </div>
                <div className="about-reviewer-info">
                  <p className="about-reviewer-name">{r.name}</p>
                  <p className="about-reviewer-role">{r.role}</p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <span className="about-badge" style={{ background: isFemale ? "rgba(249,115,22,0.18)" : "rgba(249,115,22,0.09)", border: `1px solid ${isFemale ? "rgba(249,115,22,0.35)" : "rgba(249,115,22,0.2)"}` }}>
                    {isFemale ? "Client ♀" : "Client ♂"}
                  </span>
                </div>
              </div>

              <div className="about-dots">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => manualNav(() => goTo(idx, idx > current ? "next" : "prev"))}
                    style={{
                      width: idx === current ? 22 : 8,
                      height: 8,
                      borderRadius: 999,
                      background: idx === current ? ORANGE : "rgba(249,115,22,0.22)",
                    }}
                  />
                ))}
              </div>
            </div>

            <button type="button" className="about-nav-button" onClick={() => manualNav(next)}>
              <FaChevronRight size={14} />
            </button>
          </div>

          <div className="about-tags" style={fadeUp(0.44)}>
            {["React", "Node.js", "Supabase", "React Native", "PostgreSQL", "REST APIs", "UI/UX Design", "Fullstack Systems"].map((tag) => (
              <span key={tag} className="about-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
