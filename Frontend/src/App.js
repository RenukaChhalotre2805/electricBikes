import React from "react";
// import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import TestRide from "./components/TestRide/TestRide";
import Blog from "./components/Blog/Blog";
import DetailsBlog from "./components/Blog/DetailsBlog";
import Terms from "./components/TermsAndPolicies/Terms";
import PrivacyPolicy from "./components/TermsAndPolicies/PrivacyPolicy";
import RefundPolicy from "./components/TermsAndPolicies/RefundPolicy";
import FindYourStore from "./components/FindyourStore/FindYourStore";
import KnowMore from "./components/Home/KnowMore";
import Disclaimer from "./components/TermsAndPolicies/Disclaimer";
import Offers from "./components/Offers/offers";
import D15 from "./components/Products/D15/D15";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/testride" element={<TestRide />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blogs/cards" element={<DetailsBlog />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/privacy" element={<PrivacyPolicy />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/refund" element={<RefundPolicy />} />
          <Route exact path="/findstore" element={<FindYourStore />} />
          <Route exact path="/knowmore" element={<KnowMore />} />
          <Route exact path="/offers" element={<Offers />} />
          <Route exact path="/products/D15" element={<D15 />} />

          {/* <Route exact path="/createuser" element={<SignUp />} />s */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
