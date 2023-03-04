import React from "react";
import NoSelectionMenu from "../NoSelectionMenu/NoSelectionMenu";
import ScrollButton from "../ScrollTopButton/ScrollTop";
import Footer from "../Footer/Footer";
import { Container, Header, Divider } from "semantic-ui-react";
import { commonFun, listItems } from "./commonFun";
const data = [
  {
    index: "1.",
    header: "Information Security",
    content: `Company does not rent, sell or share Your Personal Information with third 
    parties or non affiliated companies except to provide the services You have requested.
     We limit the disclosure of Personal Information to Our employees, independent 
     contractors including vendors, affiliates, consultants, business associates, 
     service providers and distributors of Our services, on a “need-to-know” basis, 
     and only if the disclosure will enable that entity to provide Us with business, 
     professional, or technical support or fulfill Your request.`,
  },
  {
    index: "2.",
    header: "User Discretion",
    content: `You can always choose not to provide information and in such cases, if the 
    information required is classified as mandatory, You will not be able to avail of that
     part of the Services, features or content.

    You can add or update Your Personal Information on a regular basis. 
    When You update information
    ,We will keep a copy of the prior version for its records..`,
  },
  {
    index: "3.",
    header: "Change in Privacy Policy",
    content: `The User acknowledges that becoming a User of the Website and its Services 
    signifies their assent to this privacy policy. Company may update this privacy 
    policy at any time, with or without advance notice. In the event there are
     significant changes in the way Company treats User’s personally identifiable 
     information, Company will display a notice on the Website or send Users an email, 
     as provided for above. Unless stated otherwise, Company’s current privacy policy 
     applies to all information that Company has about Users and their account.
      Notwithstanding the above, Company shall not be required to notify the Users 
      of any changes made to the privacy policy. If a User uses the Services after 
      notice of changes have been sent to such User or published on the Website, 
    such User hereby provides his/her/its consent to the changed practices.`,
  },
  {
    index: "4.",
    header: "Advertisements",
    content: `Some of the advertisements You see on the Site are selected and delivered by third
 parties, such as ad networks, advertising agencies, 
advertisers, and audience segment providers. These third parties may collect information 
about You and Your online activities, either on the Site or on other websites, through 
cookies, web beacons, and other technologies in an effort to understand Your interests 
and deliver to You advertisements that are tailored to Your interests.
Please remember that the Company does not have access to, or control over, the information these third parties may collect. The information practices of these third parties are not covered by this Privacy Policy.`,
  },
  {
    index: "5.",
    header: "Choice/Opt-Out",
    content: `Company provides all its Users with the opportunity to opt-out of receiving
     non-essential (promotional, marketing-related) communications from Us or on behalf of 
     Our partners after setting up an Account.

    `,
  },
  {
    index: "6.",
    header: "General Provisions",
    content: `By using this Website and the products, content and services provided on the
     Website, You agree and acknowledge that Your Personal Information collected through 
     the Website may be transferred across national boundaries and stored and processed in
      any the country around the world. You also acknowledge that in certain countries
     or with respect to certain activities, the collection, transfer, storage, `,
  },
];

function PrivacyPolicy() {
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
            <b>Privacy Policies</b>
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

export default PrivacyPolicy;
