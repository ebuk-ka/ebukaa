// src/components/Navbar.jsx

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --nav-bg: rgba(39,25,25,0.94);
    --nav-border: rgba(255,255,255,0.08);
    --accent: #C46A3C;
    --text: #f0e8e4;
    --text-mid: #d4c4be;
    --text-muted: #7a6056;
  }

  .en-nav {
    font-family: 'DM Sans', sans-serif;
    background: var(--nav-bg);
    border-bottom: 1px solid var(--nav-border);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    transition: transform 0.25s ease, box-shadow 0.3s, background 0.3s;
    backdrop-filter: blur(20px);
  }

  .en-nav.hidden {
    transform: translateY(-120%);
  }

  .en-nav.scrolled {
    background: rgba(39,25,25,0.94);
    box-shadow: 0 2px 28px rgba(0,0,0,0.35);
  }

  .en-nav__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 28px;
    height: 64px;
    display: flex;
    align-items: center;
  }

  .en-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
    margin-right: 28px;
  }

  .en-logo__mark {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    background: #C46A3C;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 3px rgba(196,106,60,0.18);
  }

  .en-logo__mark span {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 17px;
    color: #000;
  }

  .en-logo__text {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
  }

  .en-logo__text em {
    font-style: normal;
    color: #C46A3C;
  }

  .en-links {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
  }

  .en-link {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-mid);
    text-decoration: none;
    padding: 7px 13px;
    border-radius: 10px;
    transition: 0.16s;
    white-space: nowrap;
  }

  .en-link:hover {
    color: var(--text);
    background: rgba(255,255,255,0.06);
  }

  .en-link--pill {
    background: rgba(196,106,60,0.15);
    border: 1px solid rgba(196,106,60,0.22);
    border-radius: 999px;
    color: #C46A3C;
    padding: 6px 14px 6px 11px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .en-pill-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #C46A3C;
  }

  .en-sep {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--text-muted);
    margin: 0 6px;
  }

  .en-right {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
  }

  .en-icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-mid);
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s;
  }

  .en-icon-btn:hover {
    background: rgba(255,255,255,0.08);
    color: var(--text);
  }

  .en-ham {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 8px;
    border-radius: 10px;
    margin-left: 6px;
  }

  .en-ham__bar {
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: 0.3s ease;
  }

  .en-ham__bar:nth-child(1) { width: 13px; }
  .en-ham__bar:nth-child(2) { width: 22px; }
  .en-ham__bar:nth-child(3) { width: 17px; }

  .en-ham.open .en-ham__bar:nth-child(1) {
    width: 20px;
    transform: translateY(7px) rotate(45deg);
  }

  .en-ham.open .en-ham__bar:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }

  .en-ham.open .en-ham__bar:nth-child(3) {
    width: 20px;
    transform: translateY(-7px) rotate(-45deg);
  }

  .en-mobile {
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    z-index: 99;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    background: rgba(39,25,25,0.98);
    border-top: 1px solid var(--nav-border);
    transition: max-height 0.44s cubic-bezier(0.22,1,0.36,1), opacity 0.3s;
  }

  .en-mobile.open {
    max-height: 500px;
    opacity: 1;
  }

  .en-mobile__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 22px 28px 32px;
    display: flex;
    flex-direction: column;
  }

  .en-mobile__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Syne', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--text);
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    width: 100%;
    cursor: pointer;
    text-align: left;
  }

  .en-mobile__icon {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(196,106,60,0.12);
    color: #C46A3C;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s ease;
  }

  .en-mobile__link:hover .en-mobile__icon {
    transform: translate(3px, -3px);
    background: #C46A3C;
    color: #111;
  }

  .en-mobile__socials {
    display: flex;
    gap: 10px;
    margin-top: 22px;
    padding-top: 18px;
    border-top: 1px solid rgba(255,255,255,0.06);
    flex-wrap: wrap;
  }

  .en-mobile__soc {
    display: flex;
    align-items: center;
    gap: 7px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 9px 14px;
    color: var(--text-mid);
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
  }

  @media (max-width: 860px) {
    .en-links { display: none; }
    .en-ham { display: flex; }
  }

  @media (max-width: 480px) {
    .en-nav__inner { padding: 0 16px; }
    .en-mobile__inner { padding: 16px 16px 28px; }
    .en-mobile__link { font-size: 21px; }
  }
`;

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.261 5.635L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4.1 0 4.8 2.7 4.8 6.3V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8V24h-4V8z"/>
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "#work", label: "Let's Work", pill: true },
  { href: "#skills", label: "Skills & Tools" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({
  name = "Ebuka Okolo",
  githubUrl = "https://github.com/EbukaOkolo",
  twitterUrl = "https://x.com/@ebv_ka",
  linkedinUrl = "https://www.linkedin.com/in/ebuka-okolo-2022b0380/",
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const updateNav = () => {
      const currentY = window.scrollY;
      const isMobile = window.matchMedia("(max-width: 860px)").matches;

      if (!isMobile || open || currentY <= 0) {
        setShowNav(true);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > lastScrollY.current + 10) setShowNav(false);
      else if (currentY < lastScrollY.current - 10) setShowNav(true);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", updateNav, { passive: true });
    return () => window.removeEventListener("scroll", updateNav);
  }, [open]);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

   const handleMobileNav = (href) => {
  setOpen(false);

  if (href.startsWith("#")) {

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);

  } else {

    setTimeout(() => {
      navigate(href);
    }, 300);

  }
};

  const firstName = name.split(" ")[0].toLowerCase();
  const lastName = name.split(" ")[1]?.toLowerCase() || "";

  return (
    <>
      <style>{CSS}</style>

      <header>
        <nav className={`en-nav${scrolled ? " scrolled" : ""}${!showNav ? " hidden" : ""}`}>
          <div className="en-nav__inner">
            <a href="/" className="en-logo">
              <div className="en-logo__mark">
                <span>{name[0]}</span>
              </div>
              <span className="en-logo__text">
                {firstName}<em>{lastName}</em>
              </span>
            </a>

            <div className="en-links">
              {NAV_LINKS.map((link, i) => (
                <span key={link.href} style={{ display: "flex", alignItems: "center" }}>
                  {i === 2 && <div className="en-sep" />}
                  <a href={link.href} className={`en-link ${link.pill ? "en-link--pill" : ""}`}>
                    {link.pill && <div className="en-pill-dot" />}
                    {link.label}
                  </a>
                </span>
              ))}
            </div>

            <div className="en-right">
              <button className="en-icon-btn" onClick={() => window.open(githubUrl, "_blank")}>
                <GithubIcon />
              </button>

              <button className="en-icon-btn" onClick={() => window.open(twitterUrl, "_blank")}>
                <XIcon />
              </button>

              <button className="en-icon-btn" onClick={() => window.open(linkedinUrl, "_blank")}>
                <LinkedInIcon />
              </button>

              <button
                className={`en-ham${open ? " open" : ""}`}
                onClick={() => {
                  setShowNav(true);
                  setOpen((p) => !p);
                }}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <div className="en-ham__bar" />
                <div className="en-ham__bar" />
                <div className="en-ham__bar" />
              </button>
            </div>
          </div>
        </nav>

        <div className={`en-mobile${open ? " open" : ""}`}>
          <div className="en-mobile__inner">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                className="en-mobile__link"
                onClick={() => handleMobileNav(link.href)}
              >
                {link.label}

                <span className="en-mobile__icon">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </span>
              </button>
            ))}

            <div className="en-mobile__socials">
              <a href={githubUrl} target="_blank" rel="noreferrer" className="en-mobile__soc">
                <GithubIcon /> GitHub
              </a>

              <a href={twitterUrl} target="_blank" rel="noreferrer" className="en-mobile__soc">
                <XIcon /> Twitter
              </a>

              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="en-mobile__soc">
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}