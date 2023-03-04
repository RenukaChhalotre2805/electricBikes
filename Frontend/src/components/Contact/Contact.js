import React from "react";
import ContactMenu from "./ContactMenu";
import ContactLayout from "./ContactLayout";
import Footer from "./../Footer/Footer";
import ScrollButton from "../ScrollTopButton/ScrollTop";
function Contact() {
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
      <ContactMenu>
        <ContactLayout />
        <br />
        <Footer />
        <ScrollButton />
      </ContactMenu>
    </div>
  );
}

export default Contact;
