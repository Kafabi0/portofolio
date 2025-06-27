import Hero from "../component/Hero";
import About from "./About";
import Projects from "../component/Projects";
import Contact from "../component/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Projects />
      <Contact />
    </>
  );
}
