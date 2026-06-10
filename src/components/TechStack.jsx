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
  SiTypescript
} from "react-icons/si";

import { useEffect, useRef, useState } from "react";

const stack = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "Typescript",
    icon : <SiTypescript/>,
  }
];

const CSS = `
.tech-stack-section {
  background: #271919;
  padding: 120px 24px;
  overflow: hidden;
}

.tech-stack-container {
  max-width: 1250px;
  margin: 0 auto;
}

.tech-stack-top {
  margin-bottom: 60px;
}

.stack-mini {
  color: #C46A3C;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 18px;
}

.tech-stack-top h2 {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  line-height: 0.95;
  color: #f5ece6;
  font-family: "Syne", sans-serif;
  margin-bottom: 18px;
  max-width: 900px;
}

.tech-stack-top h2 span {
  color: #C46A3C;
}

.stack-desc {
  color: #bca9a1;
  font-size: 18px;
  max-width: 620px;
  line-height: 1.7;
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
  padding: 42px 24px;
  min-height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  opacity: 0;
  transform: translateY(70px) scale(.96);
  filter: blur(8px);

  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(0.22, 1, 0.36, 1),
    filter .8s ease,
    border-color .35s ease;
}

.tech-stack-section.show .tech-card {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  transition-delay: var(--delay);
}

.tech-card:hover {
  transform: translateY(-10px);
  border-color: rgba(196,106,60,0.35);
}

.tech-icon {
  width: 74px;
  height: 74px;
  border-radius: 22px;

  background: rgba(255,255,255,0.05);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 34px;
  color: #C46A3C;

  margin-bottom: 38px;

  border: 1px solid rgba(255,255,255,0.06);
}

.tech-card h3 {
  color: #f5ece6;
  font-size: 22px;
  font-weight: 700;
  font-family: "Syne", sans-serif;
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

  .tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

  .tech-card {
    min-height: 180px;
    padding: 30px 20px;
  }

  .tech-icon {
    width: 62px;
    height: 62px;
    font-size: 28px;
    margin-bottom: 28px;
  }

  .stack-desc {
    font-size: 16px;
  }
}
`;

export default function TechStack() {

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <>
      <style>{CSS}</style>

      <section
        ref={sectionRef}
        className={`tech-stack-section ${visible ? "show" : ""}`}
        id="skills"
      >
        <div className="tech-stack-container">

          <div className="tech-stack-top">
            <p className="stack-mini">MY STACK</p>

            <h2>
              Top Languages <span>& Technologies</span>
            </h2>

            <p className="stack-desc">
              My go-to tools for building premium, scalable and modern web experiences.
            </p>
          </div>

          <div className="tech-grid">

            {stack.map((item, index) => (
              <div
                className="tech-card"
                key={index}
                style={{
                  "--delay": `${index * 0.08}s`,
                }}
              >
                <div className="tech-icon">
                  {item.icon}
                </div>

                <h3>{item.name}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}