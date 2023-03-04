import React from "react";
import NoSelectionMenu from "../NoSelectionMenu/NoSelectionMenu";
import ScrollButton from "../ScrollTopButton/ScrollTop";
import Footer from "../Footer/Footer";
import { Container, Header, Divider } from "semantic-ui-react";
import { commonFun, listItems } from "./commonFun";
const data = [
  {
    index: "1.",
    header: "Terms of Use",
    content: `Your use of the Website and services and tools are governed by the 
  following terms and conditions ("Terms of Use") as applicable to the Website including 
  the applicable policies which are incorporated herein by way of reference. If You 
  transact on the Website, You shall be subject to the policies that are applicable to 
  the Website for such transaction. By mere use of the Website, You shall be contracting 
  with Company and these terms and conditions including the policies 
  constitute your binding obligations, with the Website.`,
  },
  {
    index: "2.",
    header: "Eligibility to use",
    content: `Use of the Website is available only to persons who can form legally binding 
    contracts under Indian Contract Act, 1872. Persons who are "incompetent to contract" 
    within the meaning of the Indian Contract Act, 1872 including minors, un-discharged
     insolvents etc. are not eligible to use the Website. If you are a minor i.e. 
     under the age of 18 years, you shall not register as a User of the Company website 
     and shall not transact on or use the Website. As a minor if you wish to use or
      transact on Website, such use or transaction may be made by your legal guardian 
      or parents on the Website. Company reserves the right to refuse You access to the
       Website if it is brought to Company's notice or if it is discovered that you are
        under the age of 18 years. By visiting Company Website or accepting these Terms
         of Use, You represent and warrant to Company that You are 18 years of age or older,
          and that You have the right, authority and capacity to use the Website and agree to
           and abide by these Terms of Use. You also represent and warrant to the Company 
           that You will use the Website in
     a manner consistent with any and all applicable laws and regulations.`,
  },
  {
    index: "3.",
    header: "Pricing Information",
    content: `We provide You with the best prices possible on products and services 
    You buy or avail of from the Website. The pricing details for purchase 
    of products and services from the Website are detailed under the Terms of Offer
     For Sale`,
  },
];

function Terms() {
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
            <b>Terms Of Use</b>
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

export default Terms;
