import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import AccordionTemplate from "./AccordionTemplate";
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
const AccordionSection = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50vh;
  background: white;
  width: 100rem;

  @media ${devices.mobileL} {
    color: black;
    padding-left: 4px;
    padding-right: 5px;
    background: white;
    height: 50vh;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  position: relative;
  top: 10%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  border: 1px solid grey;
  @media ${devices.mobileL} {
    border: none;
  }
  h1 {
    padding: 1rem;
    font-family: Modern No. 20;
    font-size: 1.5rem;
    @media ${devices.mobileL} {
      padding: 0.5rem;
      font-size: 1rem;
    }
  }
  &:hover {
    box-shadow: 0px 0px 5px black;
  }
`;

const Wrap = styled.div`
  background: ivory;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    font-family: Modern No. 20;
    padding-bottom: 0.2rem;
    font-size: 1.4rem;
    @media ${devices.mobileL} {
      font-size: 0.5rem;
    }
  }

  span {
    margin-right: 5rem;
    FiPlus {
      @media ${devices.mobileL} {
        size: 0.2rem;
        margin-right: 10rem;
      }
    }
    FiMinus {
      @media ${devices.mobileL} {
        margin-right: 10rem;
        size: 0.2rem;
      }
    }
  }
`;

const Dropdown = styled.div`
  font-family: Modern No. 20;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 1rem;
  padding-right: 1rem;

  p {
    font-size: 1.2rem;
    @media ${devices.mobileL} {
      font-size: 0.4rem;
    }
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="container">
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Frequently Asked Question
      </h1>
      <AccordionTemplate />
    </div>
  );
};
export default Accordion;
