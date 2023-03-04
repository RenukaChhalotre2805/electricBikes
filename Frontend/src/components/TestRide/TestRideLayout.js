import React from "react";
import MediaQuery from "react-responsive";
import { Header, Grid, Segment } from "semantic-ui-react";

// import styled from "styled-components";
import testLAP from "./testLAP.png";
import testMOB from "./testMOB.PNG";

import TestRideForm from "./TestRideForm";
import {
  // CardLink,
  CardText,
  CardBody,
  Card,
  CardTitle,
  // CardSubtitle,
} from "reactstrap";
const customcssLAP = {
  textAlign: "center",
  paddingTop: "2rem",
  background: `url(${testLAP}) no-repeat`,
  height: "65rem ",
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
  display: "flex",
  background: `url(${testMOB}) center no-repeat`,
  height: "30rem",
  backgroundColor: "black",
  //   backgroundSize: "cover",
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
          </Segment>
        </div>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={767}>
        <div className="container" style={customcssMOB}>
          <Card
            // widths="equal"
            style={{
              width: "equal",
              padding: "4rem",
            }}
          ></Card>
        </div>
      </MediaQuery>
      <div
        style={{
          padding: "2rem",
        }}
      >
        <TestRideForm widths="equal"></TestRideForm>
      </div>
    </>
  );
};

const TestRideLayout = () => {
  return <CustomTag />;
};

export default TestRideLayout;
