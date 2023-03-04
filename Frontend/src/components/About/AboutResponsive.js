import React from "react";
import MediaQuery from "react-responsive";
import { Header, Grid, Segment } from "semantic-ui-react";
// import styled from "styled-components";
import aboutIMG from "./aboutIMG.jpg";
import mobIMG from "./mobIMG.PNG";
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
  background: `url(${aboutIMG}) no-repeat`,
  height: "60rem",
  backgroundSize: "cover",
  // background: "black",
};

const customcssMOB = {
  // background: `url(${aboutIMG}) no-repeat`,
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
                <Grid.Column width={8} style={{ padding: "0rem" }}>
                  <Header
                    as="h2"
                    style={{
                      color: "white",
                      fontFamily: "Goudy Old Style",
                      fontSize: "3rem",
                      fontWeight: "bold",
                      paddingTop: "2rem",
                    }}
                  >
                    About
                  </Header>
                  <hr />
                  <p
                    style={{
                      fontFamily: "Goudy Old Style",
                      fontSize: "1.8rem",
                      color: "white",
                      padding: "2rem 5rem",
                    }}
                  >
                    We can give your bikes superpowers to do things that you
                    never thought possible. Let us delight you and empower your
                    needs....
                  </p>
                  {/* <Image
                    fluid
                    width={10}
                    src={aboutIMG}
                    style={{ height: "35rem" }}
                  /> */}
                </Grid.Column>

                <Grid.Column
                  width={8}
                  style={{ padding: "2rem 4rem 2rem 4rem" }}
                ></Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={767}>
        <div style={customcssMOB}>
          <Card
            widths="equal"
            style={{
              width: "18rem",
              padding: "2rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">About</CardTitle>
              <hr />
            </CardBody>
            <img alt="E Bike" src={mobIMG} width="100%" />
            <CardBody>
              <CardText>
                We can give your bikes superpowers to do things that you never
                thought possible. Let us delight you and empower your needs....
              </CardText>
            </CardBody>
          </Card>
        </div>
      </MediaQuery>
    </>
  );
};

const About = () => {
  return <CustomTag />;
};

export default About;
