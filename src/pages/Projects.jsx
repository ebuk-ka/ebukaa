import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import kravelyImg from "../assets/images/Kravely.png";
import portfolioImg from "../assets/images/hairtopia.jpeg";
import businessImg from "../assets/images/movietrailer.jpeg";

const projects = [
  {
    title: "Kravely",
    type: "Food Delivery Platform",
    desc: "A FUTO-focused food ordering platform built for students, vendors and riders with ordering, vendor listings and delivery flow.",
    image: kravelyImg,
    tags: ["React", "Supabase", "Tailwind", "Food Tech"],
    link: "https://kravely-qc1s.vercel.app/",
  },
  {
    title: "HairTopia",
    type: "Personal Hair Website",
    desc: "A clean and modern hair website for easu bookings and easy orders.",
    image: portfolioImg,
    tags: ["React", "CSS", "Responsive"],
    link: "https://hairtopiang.shop",
  },
  {
    title: "Movie Trailer Website",
    type: "Movie Trailer Website",
    desc: "A movie website where users can watch their trailer",
    image: businessImg,
    tags: ["UI Design", "Landing Page", "Movie trailer"],
    link: "https://movietrailerrr.netlify.app/",
  },
];

const CSS = `
.projects-page {
  background: #2D1F1F;
  min-height: 100vh;
  padding: 120px 24px 90px;
  color: #f5ece6;
}

.projects-container {
  max-width: 1250px;
  margin: 0 auto;
}

.projects-header {
  margin-bottom: 70px;
}

.projects-mini {
  color: #C46A3C;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 18px;
}

.projects-title {
  font-family: "Syne", sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: .9;
  letter-spacing: -0.07em;
  max-width: 850px;
  margin-bottom: 22px;
}

.projects-title span {
  color: #C46A3C;
}

.projects-subtitle {
  color: #bca9a1;
  font-size: 17px;
  line-height: 1.8;
  max-width: 620px;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
}

.project-card {
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 34px;
  align-items: center;

  padding: 24px;
  border-radius: 34px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: .35s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(196,106,60,.45);
  background: rgba(255,255,255,0.055);
}

.project-image-wrap {
  width: 100%;
  min-height: 390px;
  border-radius: 26px;
  overflow: hidden;
  background: rgba(255,255,255,.05);
}

.project-image {
  width: 100%;
  height: 100%;
  transition: .6s ease;
   object-fit: contain;
  object-position: center;
}

.project-card:hover .project-image {
  transform: scale(1.06);
}

.project-content {
  padding: 20px 12px;
}

.project-type {
  color: #C46A3C;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.project-name {
  font-family: "Syne", sans-serif;
  font-size: clamp(2.2rem, 5vw, 4.2rem);
  line-height: .92;
  letter-spacing: -0.06em;
  margin-bottom: 20px;
}

.project-desc {
  color: #bca9a1;
  font-size: 16px;
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 30px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 34px;
}

.project-tags span {
  font-size: 12px;
  color: #f5ece6;
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.08);
  padding: 8px 12px;
  border-radius: 999px;
}

.project-btn {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #C46A3C;
  color: #111;
  padding: 13px 18px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
}

.project-btn svg {
  transition: .25s ease;
}

.project-card:hover .project-btn svg {
  transform: translate(3px, -3px);
}

.back-home {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 50px;
  color: #bca9a1;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
}

.back-home:hover {
  color: #C46A3C;
}

@media (max-width: 900px) {
  .project-card {
    grid-template-columns: 1fr;
  }

  .project-image-wrap {
  height: auto;
  min-height: 230px;
  padding: 12px;
  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
}
}

@media (max-width: 560px) {
  .projects-page {
    padding: 100px 16px 70px;
  }

  .projects-header {
    margin-bottom: 45px;
  }

  .project-card {
    padding: 14px;
    border-radius: 24px;
    gap: 18px;
  }

  .project-image-wrap {
    height: 230px;
    border-radius: 18px;
  }

  .project-content {
    padding: 12px 4px 8px;
  }

  .project-desc {
    font-size: 14px;
  }
}
  .project-card {
  opacity: 0;
  transform: translateY(70px);
}

.show-projects .project-card {
  animation: projectReveal 0.9s cubic-bezier(0.22,1,0.36,1) forwards;
  animation-delay: var(--delay);
}

@keyframes projectReveal {

  0% {
    opacity: 0;
    transform: translateY(70px) scale(.96);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
`;

export default function Projects() {
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
      threshold: 0.15,
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

      <main className="projects-page">
        <div className="projects-container">
          <Link to="/" className="back-home">
            ← Back home
          </Link>

          <header className="projects-header">
            <p className="projects-mini">SELECTED PROJECTS</p>

            <h1 className="projects-title">
              Projects I’ve built <span>& worked on.</span>
            </h1>

            <p className="projects-subtitle">
              A collection of web apps, business websites and digital products
              showing my frontend, backend and UI skills.
            </p>
          </header>

          <section
            className={`projects-list ${visible ? "show-projects" : ""}`}
            ref={sectionRef}
          >
            {projects.map((project, index) => (
              <a
                 href={project.link}
                 target="_blank"
                 rel="noreferrer"
                 className="project-card"
                 style={{
                   "--delay": `${index * 0.12}s`,
                 }}
               >
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>

                <div className="project-content">
                  <p className="project-type">{project.type}</p>

                  <h2 className="project-name">{project.title}</h2>

                  <p className="project-desc">{project.desc}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-btn">
                    View project
                    <ArrowUpRight size={17} strokeWidth={2.6} />
                  </div>
                </div>
              </a>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}