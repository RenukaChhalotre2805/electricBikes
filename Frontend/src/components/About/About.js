import React from "react";
import ManualMenu from "./AboutMenu";
import Footer from "../Footer/Footer";
import ScrollButton from "../ScrollTopButton/ScrollTop";

import AboutResponsive from "./AboutResponsive";

function About() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
  		in place of 'smooth' */
    });
  };
  scrollToTop();
  return (
    <div>
      <ManualMenu>
        <AboutResponsive />
        <Footer />
        <ScrollButton />
      </ManualMenu>
    </div>
  );
}

export default About;
