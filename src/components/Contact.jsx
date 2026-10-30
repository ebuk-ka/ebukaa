import { SOCIAL_LINKS } from "../data/socialLinks";
import "./Contact.css";
import useReveal from "../hooks/useReveal";
import { ArrowUpRight } from "lucide-react";

const CONTACTS = [
  {
    name: "WhatsApp",
    value: "Let's talk about your project",
    link: "https://wa.me/2349021094120",
  },
  {
    name: "Email",
    value: "okoloebuka756@gmail.com",
    link: "mailto:okoloebuka756@gmail.com",
  },
  {
    name: "GitHub",
    value: "github.com/ebuk-ka",
    link: SOCIAL_LINKS.github,
  },
  {
    name: "X",
    value: "x.com/ebv_ka",
    link: SOCIAL_LINKS.twitter
  }
];

export default function Contact() {

  const [sectionRef, visible] = useReveal();

  return (
    <>
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

              {CONTACTS.map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                  key={item.name}
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
