import React from "react";
import TestRideMenu from "./TestRideMenu";
import TestRideLayout from "./TestRideLayout";
import Footer from "./../Footer/Footer";
import ScrollButton from "../ScrollTopButton/ScrollTop";
import Scroll from "../Home/Scroll";
function TestRide() {
  return (
    <div>
      <TestRideMenu>
        <Scroll />
        <TestRideLayout />
        <Footer />
        <ScrollButton />
      </TestRideMenu>
    </div>
  );
}

export default TestRide;
