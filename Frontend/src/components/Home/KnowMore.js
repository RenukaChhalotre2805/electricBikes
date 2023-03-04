import React from "react";

import NoSelectionMenu from "../NoSelectionMenu/NoSelectionMenu";
import Footer from "../Footer/Footer";
import ScrollTop from "../ScrollTopButton/ScrollTop";
import { Container, Header, Divider, Image } from "semantic-ui-react";
import battery from "./battery.png";
import speedometer from "./speedometer.png";
import gps from "./gps.jpg";
import track from "./track.png";
const data = [
  {
    image: battery,
    header: "BATTERY INFORMATION",
    content: `From your battery health to the state of charge and everything you need to know.`,
  },
  {
    image: speedometer,
    header: "RIDING STATISTICS",
    content: `This covers all your riding history and analyses like distance travelled,
     speed etc.`,
  },
  {
    image: track,
    header: "TRACKING & MONITORING",
    content: `To keep an eye on your e-scooter when someone else is riding it.`,
  },
  {
    image: gps,
    header: "DIRECTION TO SCOOTER",
    content: `Uding GPS instruct your scooter.`,
  },
];

function KnowMore() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
  		in place of 'smooth' */
    });
  };
  scrollToTop();
  let listItems = [];
  function commonFun(data) {
    listItems = data.map((dataSet) => (
      <div style={{ display: "flex" }}>
        <div
          style={{
            float: "left",
            width: "10%",
            padding: "5px",
          }}
        >
          <Image src={dataSet.image} />
        </div>
        <div style={{ float: "left", padding: "5px" }}>
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "left",
              marginBottom: "1%",
            }}
            key={dataSet.header}
          >
            <b>
              {dataSet.index} {dataSet.header}
            </b>
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "left",
            }}
            key={dataSet.content}
          >
            {dataSet.content}
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    ));
  }
  commonFun(data);
  return (
    <NoSelectionMenu>
      <br />
      <Container text textAlign="center">
        <div div style={{ outline: "solid 1px silver" }}>
          <br />
          <Header style={{ fontSize: "1.5rem" }}>
            <b>NOT JUST A SCOOTER - A SMART SCOOTER</b>
          </Header>
          <Divider />
          <p>
            With the IoT extension and technologically advanced model of the B8,
            many more things are remotely accessible at just a few taps on your
            phone!Our e-scooters are well synced to provide the information you
            need, whenever and wherever.
          </p>
          <br />
          {listItems}
          <br />{" "}
        </div>
      </Container>

      <Container text textAlign="center">
        <div style={{ outline: "solid 1px silver" }}>
          <br />
          <Header style={{ fontSize: "1.5rem" }}>
            <b>NO AIR & NOISE POLLUTION</b>
          </Header>
          <Divider />
          <p style={{ textAlign: "left", padding: "0rem 2rem 2rem" }}>
            According to the World Health Organisation (WHO), air pollution is
            closely followed by noise pollution in the impact it has on health.
            With a population of about 130 million, India is already facing
            major breathing issues in most metropolitan cities. 33 of the 100
            most polluted cities in the world are in India and the statistics
            are mind-boggling. And automobiles are the primary source
            contributing to this, with an estimated 261 tonnes of CO2.
            <br />
            From eye, nose mouth and throat irritations to cancer - air
            pollution can cause a plethore of illnesses, along with indirect
            health issues like radioactive radiations causing skin diseases due
            to the constantly depleting ozone layer.
            <br />
            Noise pollution caused by vehicles rise above the set limit in a
            number of Indian metro cities. While horn cause a nuisance, the
            engine and silencer noise contribute equally. According to studies,
            exposure to 93 dB noise for more than 8 hours a day can lead to
            temporary or permanent hearing loss.
          </p>{" "}
        </div>
      </Container>
      <br />
      <Footer />
      <ScrollTop />
    </NoSelectionMenu>
  );
}

export default KnowMore;
