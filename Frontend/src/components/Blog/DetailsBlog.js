import React from "react";
import { useLocation } from "react-router-dom";
import { Image, Container, Divider, Header } from "semantic-ui-react";
import ResponsiveContainer from "./BlogMenu";
import Footer from "../Footer/Footer";
import ScrollButton from "../ScrollTopButton/ScrollTop";
import card1 from "./card1.png";
function DetailsBlog() {
  const location = useLocation();
  const data = location.state;
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
    <ResponsiveContainer>
      <Container text textAlign="center">
        <br />
        <Image src={card1} alt="Sample photo" />
        <Header style={{ fontSize: "2rem" }}>
          <b>{data.header}</b>
        </Header>

        <Divider />
        <p style={{ fontSize: "1.3rem", textAlign: "left" }}>{data.content}</p>
      </Container>
      <br />
      <br />
      <Footer />
      <ScrollButton />
    </ResponsiveContainer>
  );
}

export default DetailsBlog;
