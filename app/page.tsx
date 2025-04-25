import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function page() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
