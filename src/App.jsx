// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Code from "./components/Code"
import Skills from "./components/Skills"
import Project from "./components/Projects" 
import Contact from "./components/Contact"


export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem("theme") !== "light"; } catch { return true; }
  });

  useEffect(() => {
    try { localStorage.setItem("theme", darkMode ? "dark" : "light"); } catch { /* localStorage unavailable */ }
    document.body.style.background = darkMode ? "#060912" : "#eef2ff";
    document.documentElement.style.background = darkMode ? "#060912" : "#eef2ff";
  }, [darkMode]);

  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#060912" : "#eef2ff", transition: "background 0.5s" }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero   darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Code darkMode={darkMode} />
      <Skills darkMode={darkMode}/>
      <Project darkMode={darkMode}/>
       <Contact darkMode={darkMode}/>
    </div>
  );
}
