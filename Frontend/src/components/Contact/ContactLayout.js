import React from "react";
import MediaQuery from "react-responsive";
import { Header, Grid, Segment, Image, Item, Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import ContactLap from "./ContactLap.PNG";
import contactMob from "./contactMob.PNG";
import email from "./email.png";
import whatsapp from "./whatsapp.png";
import contactlogo from "./contactlogo.png";
import Enquiryform from "./EnquiryForm";
import {
  // CardLink,
  CardText,
  CardBody,
  Card,
  CardTitle,
  // CardSubtitle,
} from "reactstrap";

const panes = [
  {
    menuItem: "Email",
    render: () => (
      <Tab.Pane>
        <div style={{ display: "flex" }}>
          <div style={{ float: "left", width: "33.33%", padding: "5px" }}>
            <Image
              as={Link}
              style={ImageStyle}
              src={email}
              to="/contact"
              size="tiny"
            />
          </div>

          <div style={{ float: "left", width: "33.33%", padding: "5px" }}>
            <h4 style={{ padding: "1rem 0rem 0rem 0rem" }}>Email:</h4>
            <p>testmail@gmail.com</p>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Chat",
    render: () => (
      <Tab.Pane>
        <div style={{ display: "flex" }}>
          <div style={{ float: "left", width: "33.33%", padding: "5px" }}>
            <Image
              as={Link}
              style={ImageStyle}
              src={whatsapp}
              to="/contact"
              size="tiny"
            />
          </div>

          <div style={{ float: "left", width: "33.33%", padding: "5px" }}>
            <h4 style={{ padding: "1rem 0rem 0rem 0rem" }}>Whatsapp:</h4>
            <p>1234567891</p>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Call",
    render: () => (
      <Tab.Pane>
        {" "}
        <div style={{ display: "flex" }}>
          <div style={{ float: "left", width: "33.33%", padding: "5px" }}>
            <Image
              as={Link}
              style={ImageStyle}
              src={contactlogo}
              to="/contact"
              size="tiny"
            />
          </div>

          <div style={{ float: "left", width: "33.33%", padding: "5px" }}>
            <h4 style={{ padding: "1rem 0rem 0rem 0rem" }}>Contact:</h4>
            <p>1987654321</p>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
];
const customcssLAP = {
  textAlign: "center",
  paddingTop: "2rem",
  background: `url(${ContactLap}) no-repeat`,
  height: "43.8rem ",
  backgroundSize: "cover",
  // background: "black",
};

const ImageStyle = {
  padding: "0.5rem",
  margin: " 0rem 80rem 0rem 0rem",
  // "&:hover": {
  //   color: "red",
  // },
};
const customcssMOB = {
  // background: `url(${ContactLap}) no-repeat`,
  height: "30rem",
  background: "white",
  // backgroundSize: "cover",
};
const CustomTag = () => {
  return (
    <>
      <MediaQuery minDeviceWidth={768}>
        <div style={customcssLAP}>
          <Segment vertical>
            <Grid verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header
                    as="h2"
                    style={{
                      color: "white",
                      fontFamily: "Goudy Old Style",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      paddingTop: "2rem",
                    }}
                  >
                    GET IN TOUCH
                  </Header>

                  <p
                    style={{
                      fontFamily: "Goudy Old Style",
                      fontSize: "1.5rem",
                      color: "white",
                      padding: "0rem 5rem",
                    }}
                  >
                    Write us your queries and we'll get back to you.
                  </p>

                  {/* <Image
                    fluid
                    width={10}
                    src={ContactLap}
                    style={{ height: "35rem" }}
                  /> */}
                </Grid.Column>

                <Grid.Column
                  width={8}
                  style={{ padding: "2rem 4rem 2rem 4rem" }}
                ></Grid.Column>
              </Grid.Row>
            </Grid>
            <br />
            <br />
            <br />
            <br />
            <Tab
              style={{ width: "40rem", paddingLeft: "12rem" }}
              menu={{ fluid: true, vertical: true, tabular: true }}
              panes={panes}
              size="tiny"
            />
          </Segment>
        </div>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={767}>
        <div style={customcssMOB}>
          <Card
            widths="equal"
            style={{
              // width: "equal",
              padding: "4rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">GET IN TOUCH</CardTitle>
              <hr />
            </CardBody>

            <CardBody>
              <CardText>
                Write us your queries and we'll get back to you.
              </CardText>
            </CardBody>
            <br />
            <br />
            <CardBody>
              <Tab
                menu={{ fluid: true, tabular: true }}
                panes={panes}
                size="tiny"
              />
            </CardBody>
          </Card>
        </div>
      </MediaQuery>
      <div
        style={{
          padding: "4rem",
        }}
      >
        <Enquiryform widths="equal"></Enquiryform>
      </div>
    </>
  );
};

const ContactLayout = () => {
  return <CustomTag />;
};

export default ContactLayout;
