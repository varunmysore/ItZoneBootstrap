import React from "react";

import About from "../About/About";
import AppServices from "../AppServices/AppServices";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Navbarfile from "../Navbarfile/Navbarfile";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="App">
      <header id="header">
        <Navbarfile />
      </header>
      <main>
        <Hero />
        <About />
        <AppServices />
        <Contact />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
