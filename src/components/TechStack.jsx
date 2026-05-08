import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

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
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
];
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');

.tech-stack-section {
  background: #2D1F1F;
  padding: 120px 24px;
  overflow: hidden;
  font-family: 'Syne', sans-serif;
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

  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;

  backdrop-filter: blur(10px);
}

.tech-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(196,106,60,0.12),
    transparent
  );

  opacity: 0;
  transition: 0.4s ease;
}

.tech-card:hover::before {
  opacity: 1;
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
    grid-template-columns: 1fr;
    gap: 18px;
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
} `

export default function TechStack() {
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
            My go-to tools for building premium, scalable and modern web experiences.
          </p>
        </div>

        <div className="tech-grid">
          {stack.map((item, index) => (
            <div className="tech-card" key={index}>
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