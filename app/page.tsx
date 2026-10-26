import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skiils from "./components/Skills";
import Project from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="md:mx-15 mx-5 overflow-hidden">
      <Navbar />
      <Hero />
      <Skiils />
      <Project />
      <About />
      <Contact />
    </div>
  );
}
