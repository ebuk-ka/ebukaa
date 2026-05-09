import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home({ darkMode }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <TechStack />
      <FAQ />
      <Contact darkMode={darkMode} />
    </>
  );
}
