import "./Navbar.css";
// src/components/Navbar.jsx

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../data/socialLinks";

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
  { href: "/#contact", label: "Let's Work", pill: true },
  { href: "/#skills", label: "Skills & Tools" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar({
  name = "Ebuka Okolo",
  githubUrl = SOCIAL_LINKS.github,
  twitterUrl = SOCIAL_LINKS.twitter,
  linkedinUrl = SOCIAL_LINKS.linkedin,
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const menuButtonRef = useRef(null);

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

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 861px)");
    const closeOnDesktop = () => setOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const firstName = name.split(" ")[0].toLowerCase();
  const lastName = name.split(" ")[1]?.toLowerCase() || "";

  return (
    <>
      <header>
        <nav className={`en-nav${scrolled ? " scrolled" : ""}${!showNav ? " hidden" : ""}`}>
          <div className="en-nav__inner">
            <Link to="/" className="en-logo">
              <div className="en-logo__mark">
                <span>{name[0]}</span>
              </div>
              <span className="en-logo__text">
                {firstName}<em>{lastName}</em>
              </span>
            </Link>

            <div className="en-links">
              {NAV_LINKS.map((link, i) => (
                <span key={link.label} style={{ display: "flex", alignItems: "center" }}>
                  {i === 2 && <div className="en-sep" />}
                  <Link to={link.href} className={`en-link ${link.pill ? "en-link--pill" : ""}`}>
                    {link.pill && <div className="en-pill-dot" />}
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>

            <div className="en-right">
              <a className="en-icon-btn" href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>

              <a className="en-icon-btn" href={twitterUrl} target="_blank" rel="noreferrer" aria-label="X">
                <XIcon />
              </a>

              <a className="en-icon-btn" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>

              <button
                ref={menuButtonRef}
                aria-controls="mobile-navigation"
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

        <div id="mobile-navigation" className={`en-mobile${open ? " open" : ""}`} inert={!open} aria-hidden={!open}>
          <div className="en-mobile__inner">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="en-mobile__link"
                onClick={() => setOpen(false)}
              >
                {link.label}

                <span className="en-mobile__icon">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </span>
              </Link>
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
