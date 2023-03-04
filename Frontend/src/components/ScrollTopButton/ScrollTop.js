import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import styled from "styled-components";

const sizes = {
  mobileM: "375px",
  mobileL: "768px",
  tablet: "500px",
  laptopS: "1024px",
  laptop: "1800px",
  laptopL: "2300px",
  desktop: "2560px",
};
export const devices = {
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};
export const Button = styled.div`
  position: fixed;
  width: 100rem;
  left: 98rem;
  bottom: 3rem;
  height: 4rem;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: olive;

  @media ${devices.mobileL} {
    color: olive;
    left: 38rem;
    bottom: 1.5rem;
    position: fixed;
    z-index: 0;
  }
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.pageYOffset;

    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="container" style={{ display: "flex" }}>
      <Button>
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </Button>
    </div>
  );
};

export default ScrollButton;
