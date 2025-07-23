import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";
import SocialLink from "../components/SocialLink";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
        <SocialLink />
      </main>
      <Footer />
    </>
  );
};

export default Home;
