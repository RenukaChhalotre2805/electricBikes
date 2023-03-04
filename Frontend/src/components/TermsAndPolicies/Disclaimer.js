import React from "react";
import NoSelectionMenu from "../NoSelectionMenu/NoSelectionMenu";
import ScrollButton from "../ScrollTopButton/ScrollTop";
import Footer from "../Footer/Footer";
import { Container, Header, Divider } from "semantic-ui-react";
import { commonFun, listItems } from "./commonFun";
const data = [
  {
    index: "",
    header: "",
    content: `Company shall not be liable for any loss or damage sustained by reas
    on of any disclosure (inadvertent or otherwise) of any information concerning 
    the user’s account and/or their verification process and particulars nor for any
     error, omission or inaccuracy with respect to any information so disclosed and used 
     whether or not in pursuance of a legal process or otherwise. The terms in this 
     agreement may be changed by Company at any time. Company is free 
      to offer its services to any client/prospective client without restriction.`,
  },
];

function Disclaimer() {
  commonFun(data);
  //   useLayoutEffect = () => {
  //     scrollToTop();
  //   };
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
    <NoSelectionMenu>
      <Container text textAlign="center">
        <br />
        <div style={{ outline: "solid 1px silver", padding: "2rem" }}>
          <Header style={{ fontSize: "2rem" }}>
            <b>Disclaimer</b>
          </Header>
          <Divider />
          {listItems}
        </div>
      </Container>
      <br />
      <Footer />
      <ScrollButton />
    </NoSelectionMenu>
  );
}

export default Disclaimer;
