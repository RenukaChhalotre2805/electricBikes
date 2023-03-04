import React, { Component } from "react";
import ManualMenu from "./../Menu/Menu";

import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";

// import styled from "styled-components";
import homeImg from "./../Home/HomeImg.jpg";
// import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  // Menu,
  Segment,
  // Sidebar,
  Visibility,
} from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => (
  <Container Image>
    <Image
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
    />
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
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

class DesktopContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <Media greaterThan="mobile">
        <Visibility once={false}>
          <p>Hiii form lap</p>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <Media at="mobile">
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 350, padding: "0em 0em" }}
          vertical
        >
          <p>Hi from mobile</p>
        </Segment>

        {children}
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

function About({ children }) {
  return (
    <div>
      <ManualMenu />
      <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
      </MediaContextProvider>
    </div>
  );
}

export default About;
