import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


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
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: darkMode ? "#060912" : "#eef2ff", transition: "background 0.5s" }}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
         
        <Footer />
      </div>
    </BrowserRouter>
    
    
  );
}


