import "./TechStack.css";
import {
  FaReact,
  FaPython,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
  SiJavascript,
  SiSupabase,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

import useReveal from "../hooks/useReveal";

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
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
 {
  name: "Python",
  icon: <FaPython />,
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
    name: "TypeScript",
    icon: <SiTypescript />,
  }
];

export default function TechStack() {

  const [sectionRef, visible] = useReveal();

  return (
    <>
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
  The languages and tools I use to build digital products, develop backend
  systems, and bring ideas to life.
</p>
          </div>

          <div className="tech-grid">

            {stack.map((item, index) => (
              <div
                className="tech-card"
                key={item.name}
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
