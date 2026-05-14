import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const CONTACTS = [
  {
    name: "WhatsApp",
    value: "Let's talk about your project",
    link: "https://wa.me/2347079629569",
  },
  {
    name: "Email",
    value: "okoloebuka756@gmail.com",
    link: "mailto:okoloebuka756@gmail.com",
  },
  {
    name: "GitHub",
    value: "github.com/EbukaOkolo",
    link: "https://github.com/EbukaOkolo",
  },
];

const CSS = `
.contact-section {
  background: #2D1F1F;
  padding: 120px 24px;
  overflow: hidden;
}

.contact-container {
  max-width: 1050px;
  margin: 0 auto;
}

.contact-box {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 34px;
  padding: 70px 50px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(12px);
}

.contact-box::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top right,
    rgba(196,106,60,0.18),
    transparent 40%);
  pointer-events: none;
}

.contact-mini {
  color: #C46A3C;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 18px;
}

.contact-title {
  font-family: "Syne", sans-serif;
  font-size: clamp(2.8rem, 7vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
  color: #f5ece6;
  max-width: 700px;
  margin-bottom: 22px;
}

.contact-text {
  color: #bca9a1;
  font-size: 17px;
  line-height: 1.8;
  max-width: 620px;
  margin-bottom: 46px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.contact-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 22px;
  padding: 24px;
  text-decoration: none;
  transition: 0.35s ease;
}

.contact-card:hover {
  transform: translateY(-8px);
  border-color: rgba(196,106,60,0.35);
  background: rgba(196,106,60,0.08);
}

.contact-name {
  color: #f5ece6;
  font-size: 20px;
  font-family: "Syne", sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
}

.contact-value {
  color: #bca9a1;
  font-size: 14px;
  line-height: 1.7;
}

.contact-arrow {
  margin-top: 22px;
  color: #C46A3C;
  font-size: 18px;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {

  .contact-section {
    padding: 90px 18px;
  }

  .contact-box {
    padding: 40px 22px;
    border-radius: 24px;
  }

  .contact-title {
    line-height: 1;
  }

  .contact-text {
    font-size: 15px;
  }
}
`;

export default function Contact() {

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
        className="contact-section"
        id="contact"
        ref={sectionRef}
      >
        <div className="contact-container">

          <div
            className="contact-box"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(60px)",
              transition: "0.8s ease",
            }}
          >

            <p className="contact-mini">
              CONTACT
            </p>

            <h2 className="contact-title">
              Let’s build something people will remember.
            </h2>

            <p className="contact-text">
              Need a modern website, an online store,
              or a clean digital experience for your brand?
              I’m available for freelance projects and collaborations.
            </p>

            <div className="contact-grid">

              {CONTACTS.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                  key={index}
                >

                  <h3 className="contact-name">
                    {item.name}
                  </h3>

                  <p className="contact-value">
                    {item.value}
                  </p>

                  <div className="contact-arrow">
                    <ArrowUpRight size={18} />
                  </div>

                </a>
              ))}

            </div>

          </div>

        </div>
      </section>
    </>
  );
}