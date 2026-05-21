import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
  SiJavascript,
  SiSupabase,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

import { useEffect, useRef, useState } from "react";

const stack = [
  { name: "React", icon: <FaReact />, type: "Frontend Library" },
  { name: "JavaScript", icon: <SiJavascript />, type: "Programming Language" },
  { name: "Tailwind", icon: <SiTailwindcss />, type: "CSS Framework" },
  { name: "Supabase", icon: <SiSupabase />, type: "Backend & Auth" },
  { name: "PostgreSQL", icon: <SiPostgresql />, type: "Database" },
  { name: "HTML5", icon: <FaHtml5 />, type: "Structure" },
  { name: "CSS3", icon: <FaCss3Alt />, type: "Styling" },
  { name: "Git", icon: <FaGitAlt />, type: "Version Control" },
  { name: "GitHub", icon: <FaGithub />, type: "Code Hosting" },
  { name: "VS Code", icon: <VscVscode />, type: "Code Editor" },
  { name: "Figma", icon: <FaFigma />, type: "Design Tool" },
];

const CSS = `
.tech-stack-section {
  background: #2D1F1F;
  padding: 120px 24px;
  overflow: hidden;
}

.tech-stack-container {
  max-width: 1250px;
  margin: 0 auto;
}

.tech-stack-top {
  margin-bottom: 65px;
}

.stack-mini {
  color: #C46A3C;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 18px;
}

.tech-stack-top h2 {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  line-height: 0.95;
  color: #f5ece6;
  font-family: "Syne", sans-serif;
  margin-bottom: 20px;
  max-width: 900px;
  letter-spacing: -0.06em;
}

.tech-stack-top h2 span {
  color: #C46A3C;
}

.stack-desc {
  color: #bca9a1;
  font-size: 18px;
  max-width: 620px;
  line-height: 1.8;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.tech-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 28px;

  padding: 34px 24px;
  min-height: 210px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  overflow: hidden;

  backdrop-filter: blur(10px);

  opacity: 0;
  transform: translateY(80px) scale(.94);
  filter: blur(10px);

  transition:
    opacity .85s cubic-bezier(0.22, 1, 0.36, 1),
    transform .85s cubic-bezier(0.22, 1, 0.36, 1),
    filter .85s ease,
    border-color .35s ease,
    background .35s ease;
}

.tech-card-show {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  transition-delay: var(--delay);
}

.tech-card::before {
  content: "";
  position: absolute;
  inset: 0;

  background: radial-gradient(
    circle at top right,
    rgba(196,106,60,0.18),
    transparent 45%
  );

  opacity: 0;
  transition: .4s ease;
}

.tech-card::after {
  content: "";
  position: absolute;
  width: 90px;
  height: 90px;
  right: -35px;
  bottom: -35px;

  background: rgba(196,106,60,0.08);
  border-radius: 50%;

  transition: .4s ease;
}

.tech-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(196,106,60,0.38);
  background: rgba(255,255,255,0.06);
}

.tech-card:hover::before {
  opacity: 1;
}

.tech-card:hover::after {
  transform: scale(1.8);
}

.tech-icon {
  width: 72px;
  height: 72px;
  border-radius: 22px;

  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.07);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 34px;
  color: #C46A3C;

  position: relative;
  z-index: 2;

  transition: .35s ease;
}

.tech-card:hover .tech-icon {
  background: #C46A3C;
  color: #111;
  transform: rotate(-6deg) scale(1.06);
}

.tech-info {
  position: relative;
  z-index: 2;
}

.tech-info h3 {
  color: #f5ece6;
  font-size: 22px;
  font-weight: 800;
  font-family: "Syne", sans-serif;
  margin-bottom: 8px;
}

.tech-info p {
  color: #bca9a1;
  font-size: 14px;
  line-height: 1.5;
}

@media (max-width: 1000px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .tech-stack-section {
    padding: 90px 18px;
  }

  .tech-stack-top {
    margin-bottom: 42px;
  }

  .tech-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .tech-card {
    min-height: 180px;
    padding: 28px 22px;
  }

  .tech-icon {
    width: 62px;
    height: 62px;
    font-size: 28px;
  }

  .stack-desc {
    font-size: 16px;
  }
}
`;

export default function TechStack() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);

            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{CSS}</style>

      <section className="tech-stack-section" id="skills">
        <div className="tech-stack-container">
          <div className="tech-stack-top">
            <p className="stack-mini">MY STACK</p>

            <h2>
              Top Languages <span>& Technologies</span>
            </h2>

            <p className="stack-desc">
              My go-to tools for building premium, scalable and modern web
              experiences.
            </p>
          </div>

          <div className="tech-grid">
            {stack.map((item, index) => (
              <div
                className={`tech-card ${
                  visibleCards.includes(index) ? "tech-card-show" : ""
                }`}
                key={item.name}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                style={{
                  "--delay": `${index * 0.07}s`,
                }}
              >
                <div className="tech-icon">{item.icon}</div>

                <div className="tech-info">
                  <h3>{item.name}</h3>
                  <p>{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}