/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
// import Carousel from "./Carousel";
import Footer from "../Footer/Footer";
import Accordion from "./Accordion/Accordion";
import ResponsiveContainer from "./../Menu/MenuBar";
import Scroll from "./Scroll";

import logo from "./logo.svg";
import homeImg from "./HomeImg.jpg";
import ScrollButton from "../ScrollTopButton/ScrollTop";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */

const HomepageHeading = ({ mobile }) => (
  <Container Image>
    {/* <Image
      fluid
      inverted
      as="a"
      src={homeImg}
      size=""
      href="#"
      target="_blank"
      style={{
        width: "100%",
      }}
    /> */}
    {/* <Carousel /> */}
    <Divider hidden />
    <Header
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="Go wherever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button circular color="olive" size="huge">
      Enquire Now
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Scroll />
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Bikes That Can Fly
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bikes can fly.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src={homeImg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button
              as={Link}
              to="/knowmore"
              style={{ color: "chocolate" }}
              size="huge"
            >
              Know More
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header
              as="h3"
              style={{ fontSize: "2em", fontFamily: "Times new roman" }}
            >
              "What we do?"
            </Header>
            <p style={{ fontSize: "1.33em", fontFamily: "Times new roman" }}>
              We provide E-Bikes.
            </p>
          </Grid.Column>
          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingTop: "5em",
            }}
          >
            <Header
              as="h3"
              style={{ fontSize: "2em", fontFamily: "Times new roman" }}
            >
              "What we don't do?"
            </Header>
            <p style={{ fontSize: "1.33em", fontFamily: "Times new roman" }}>
              <Image avatar src={logo} />
              <b> Never </b> ditch our customers.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <br />
    <br />
    <br />
    {/* <Carousel /> */}

    <Accordion />
    <br />

    <Footer />
    <ScrollButton />
  </ResponsiveContainer>
);

export default HomepageLayout;
