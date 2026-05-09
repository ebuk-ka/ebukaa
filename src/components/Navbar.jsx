// src/components/Navbar.jsx
// Dark navbar — blends with #2D1F1F hero
// Working hamburger, smooth dropdown, fully responsive
import { useState, useEffect, useRef } from "react";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --nav-bg:     rgba(45,31,31,0.88);
    --nav-border: rgba(255,255,255,0.08);
    --accent:     #C46A3C;
    --accent-soft: rgba(196,106,60,0.17);
    --text:       #f0e8e4;
    --text-mid:   #d4c4be;
    --text-muted: #7a6056;
  }

  /* ── Shell ── */
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
    background: rgba(30,18,18,0.95);
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

  /* ── Logo ── */
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
    flex-shrink: 0;
    box-shadow: 0 0 0 3px rgba(196,106,60,0.18);
  }
  .en-logo__mark span {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 17px;
    color: #000;
    line-height: 1;
    letter-spacing: -0.5px;
  }
  .en-logo__text {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.3px;
  }
  .en-logo__text em {
    font-style: normal;
    color: #C46A3C;
  }

  /* ── Desktop links ── */
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
    transition: color 0.16s, background 0.16s;
    white-space: nowrap;
    cursor: pointer;
    background: none;
    border: none;
    font-family: 'DM Sans', sans-serif;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .en-link:hover {
    color: var(--text);
    background: rgba(255,255,255,0.06);
  }

  /* Work pill */
  .en-link--pill {
    background: rgba(196,106,60,0.15);
    border: 1px solid rgba(196,106,60,0.22);
    border-radius: 999px;
    color: #C46A3C;
    padding: 6px 14px 6px 11px;
    font-weight: 700;
  }
  .en-link--pill:hover {
    background: rgba(196,106,60,0.22);
    color: #C46A3C;
  }
  .en-pill-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #C46A3C;
    flex-shrink: 0;
  }

  /* Separator */
  .en-sep {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--text-muted);
    flex-shrink: 0;
    margin: 0 6px;
  }

  /* Availability badge */
  .en-avail {
    display: flex;
    align-items: center;
    gap: 7px;
    background: rgba(196,106,60,0.08);
    border: 1px solid rgba(196,106,60,0.16);
    border-radius: 999px;
    padding: 5px 13px 5px 10px;
    margin-left: 14px;
    white-space: nowrap;
  }
  .en-avail__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #C46A3C;
    flex-shrink: 0;
    animation: avail-pulse 2.2s ease infinite;
  }
  @keyframes avail-pulse {
    0%,100% { box-shadow: 0 0 0 0   rgba(196,106,60,0.45); }
    50%      { box-shadow: 0 0 0 5px rgba(196,106,60,0);    }
  }
  .en-avail__text {
    font-size: 12px;
    font-weight: 600;
    color: #C46A3C;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Right icons ── */
  .en-right {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    flex-shrink: 0;
  }
  .en-icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-mid);
    width: 36px;
    height: 36px;
    border-radius: 10px;
    transition: background 0.15s, color 0.15s;
  }
  .en-icon-btn:hover {
    background: rgba(255,255,255,0.08);
    color: var(--text);
  }

  /* ── Hamburger ── */
  .en-ham {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 8px;
    border-radius: 10px;
    transition: background 0.15s;
    margin-left: 6px;
  }
  .en-ham:hover { background: rgba(255,255,255,0.08); }

  .en-ham__bar {
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: transform 0.32s cubic-bezier(0.22,1,0.36,1),
                opacity 0.22s, width 0.28s;
    transform-origin: center;
  }
  .en-ham__bar:nth-child(1) { width: 13px; }
  .en-ham__bar:nth-child(2) { width: 22px; }
  .en-ham__bar:nth-child(3) { width: 17px; }

  /* X state */
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

  /* ── Mobile menu ── */
  .en-mobile {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  z-index: 99;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  background: #1e1212;
  border-top: 1px solid var(--nav-border);
  transition: max-height 0.44s cubic-bezier(0.22,1,0.36,1), opacity 0.3s;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    background: #1e1212;
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
    gap: 0;
  }

  .en-mobile__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Syne', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--text);
    text-decoration: none;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    letter-spacing: -0.5px;
    transition: color 0.15s, padding-left 0.2s;
    cursor: pointer;
    background: none;
    border-right: none;
    border-top: none;
    border-left: none;
    width: 100%;
    text-align: left;
  }
  .en-mobile__link:last-of-type { border-bottom: none; }
  .en-mobile__link:hover {
    color: var(--green);
    padding-left: 6px;
  }
  .en-mobile__link .arrow {
    font-size: 20px;
    opacity: 0.3;
    transition: opacity 0.15s, transform 0.2s;
  }
  .en-mobile__link:hover .arrow {
    opacity: 0.7;
    transform: translate(3px, -3px);
  }

  /* Social row in mobile */
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
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }
  .en-mobile__soc:hover {
    background: rgba(34,197,94,0.12);
    color: var(--green);
    border-color: rgba(34,197,94,0.22);
  }

  /* ── Responsive ── */
  @media (max-width: 860px) {
    .en-links { display: none; }
    .en-avail { display: none; }
    .en-ham   { display: flex; }
  }
  @media (max-width: 480px) {
    .en-nav__inner { padding: 0 16px; }
    .en-mobile__inner { padding: 16px 16px 28px; }
    .en-mobile__link  { font-size: 21px; }
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#projects", label: "Projects"      },
  { href: "#work",     label: "Let's Work", pill: true },
  { href: "#skills",   label: "Skills & Tools" },
  { href: "#contact",  label: "Contact"       },
];

export default function Navbar({
  name          = "Ebuka Okolo",
  githubUrl     = "https://github.com",
  twitterUrl    = "https://x.com",
  linkedinUrl   = "https://linkedin.com",
}) {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav,  setShowNav]  = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 860px)");
    const updateNav = () => {
      const currentY = window.scrollY;
      const isMobile = mobileQuery.matches;

      if (!isMobile || open || currentY <= 0) {
        setShowNav(true);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > lastScrollY.current + 10) {
        setShowNav(false);
      } else if (currentY < lastScrollY.current - 10) {
        setShowNav(true);
      }
      lastScrollY.current = currentY;
    };

    const onScroll = () => updateNav();
    const onResize = () => {
      if (!mobileQuery.matches) setShowNav(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
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
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 320); // let menu close first
    }
  };

  const firstName = name.split(" ")[0].toLowerCase();
  const lastName  = name.split(" ")[1]?.toLowerCase() || "";

  return (
    <>
      <style>{CSS}</style>
      <header>
        <nav className={`en-nav${scrolled ? " scrolled" : ""}${!showNav ? " hidden" : ""}`}>
          <div className="en-nav__inner">

            {/* Logo */}
            <a href="/" className="en-logo">
              <div className="en-logo__mark">
                <span>{name[0]}</span>
              </div>
              <span className="en-logo__text">
                {firstName}<em>{lastName}</em>
              </span>
            </a>

            {/* Desktop links */}
            <div className="en-links">
              {NAV_LINKS.map((link, i) => (
                <span key={link.href} style={{ display: "flex", alignItems: "center" }}>
                  {i === 2 && <div className="en-sep" />}
                  {link.pill ? (
                    <a href={link.href} className="en-link en-link--pill">
                      <div className="en-pill-dot" />
                      {link.label}
                    </a>
                  ) : (
                    <a href={link.href} className="en-link">{link.label}</a>
                  )}
                </span>
              ))}

        
            </div>

            {/* Right: social + hamburger */}
            <div className="en-right">
              <button className="en-icon-btn" onClick={() => window.open(githubUrl, "_blank")} aria-label="GitHub">
                <GithubIcon />
              </button>
              <button className="en-icon-btn" onClick={() => window.open(twitterUrl, "_blank")} aria-label="Twitter">
                <XIcon />
              </button>
              <button className="en-icon-btn" onClick={() => window.open(linkedinUrl, "_blank")} aria-label="LinkedIn">
                <LinkedInIcon />
              </button>

              {/* Hamburger → X */}
              <button
                className={`en-ham${open ? " open" : ""}`}
                  onClick={() => {
                   setShowNav(true);
                   setOpen((p) => !p);
                 }}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}>
                <div className="en-ham__bar" />
                <div className="en-ham__bar" />
                <div className="en-ham__bar" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div className={`en-mobile${open ? " open" : ""}`} aria-hidden={!open}>
          <div className="en-mobile__inner">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                className="en-mobile__link"
                onClick={() => handleMobileNav(link.href)}>
                {link.label}
                <span className="arrow">↗</span>
              </button>
            ))}

            <div className="en-mobile__socials">
              <a href={githubUrl}   target="_blank" rel="noreferrer" className="en-mobile__soc"><GithubIcon />  GitHub</a>
              <a href={twitterUrl}  target="_blank" rel="noreferrer" className="en-mobile__soc"><XIcon />       Twitter</a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="en-mobile__soc"><LinkedInIcon /> LinkedIn</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}