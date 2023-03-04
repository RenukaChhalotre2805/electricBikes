import React from "react";
import NoSelectionMenu from "../NoSelectionMenu/NoSelectionMenu";
import ScrollButton from "../ScrollTopButton/ScrollTop";
import Footer from "../Footer/Footer";
import { Container, Header, Divider } from "semantic-ui-react";
import { commonFun, listItems } from "./commonFun";
const data = [
  {
    index: "",
    header: "Refund Policy",
    content: `Please note that the Customers will be eligible for refunds only for
     the booking amount paid by the Customers.

    ALL SALES ARE FINAL. No funds will be returned. The Customers shall not be eligible
     for any refunds on payment by the Customer of the complete purchase amount
      towards the vehicle.
    
    All eligible refunds shall be processed by us within a period of 7 working days.`,
  },
  {
    index: "",
    header: "Return Policy",
    content: `No returns/refunds accepted. Goods once sold will not be
     replaced or returned. Under any condition no refund will be made.`,
  },
];

function RefundPolicy() {
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
            <b>Refund</b>
          </Header>
          <Divider />
          {listItems}
        </div>
        <br />
      </Container>
      <Footer />
      <ScrollButton />
    </NoSelectionMenu>
  );
}

export default RefundPolicy;
