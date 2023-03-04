/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Dropdown,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Divider,
  Header,
} from "semantic-ui-react";

const options = [
  {
    // key: "user",
    text: "D15",
    // icon: "user",
    value: "/products/D15",
    background: "black",
    // image: { src: { logo } },
  },
  { text: "B8", value: "/products/B8" },
  { text: "A2", value: "/products/A2" },
];

const MySpan = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: burlywood;
  }
`;
const HomepageHeading = ({ mobile }) => (
  <Container>
    <Divider hidden />
    <Header
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        color: "white",
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

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 70, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="big"
            >
              <Container>
                <Menu.Item as={Link} to="/#">
                  <MySpan>HOME</MySpan>
                </Menu.Item>

                <Menu.Item as={Link} to="/about">
                  <MySpan>ABOUT</MySpan>
                </Menu.Item>
                <MySpan>
                  <Dropdown
                    simple
                    icon={null}
                    onMouseOver={this.MouseOver}
                    onMouseOut={this.MouseOut}
                    text="PRODUCTS"
                    style={{ paddingTop: "1.6rem" }}
                    className="link item"
                    options={options}
                  ></Dropdown>
                </MySpan>
                <Menu.Item as={Link} to="/contact" active>
                  <MySpan>CONTACT</MySpan>
                </Menu.Item>
                <Menu.Item as={Link} to="/findstore">
                  <MySpan>FIND YOUR STORE</MySpan>
                </Menu.Item>
                <Menu.Item as={Link} to="/testride">
                  <MySpan>TEST RIDE</MySpan>
                </Menu.Item>
                <Menu.Item as={Link} to="/offers">
                  <MySpan>OFFERS</MySpan>
                </Menu.Item>
                <Menu.Item as={Link} to="/blog">
                  <MySpan>BLOG</MySpan>
                </Menu.Item>

                <Menu.Item position="right">
                  <Button as={Link} to="/booknow" inverted={!fixed}>
                    BOOK NOW
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
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
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as={Link} to="/#">
              <MySpan>HOME</MySpan>
            </Menu.Item>
            <Menu.Item as={Link} to="/about">
              <MySpan>ABOUT</MySpan>
            </Menu.Item>
            <MySpan>
              <Dropdown
                pointing="top right"
                onMouseOver={this.MouseOver}
                onMouseOut={this.MouseOut}
                text="PRODUCTS"
                className="link item"
                options={options}
              ></Dropdown>
            </MySpan>
            <Menu.Item as={Link} to="/contact" active>
              <MySpan>CONTACT</MySpan>
            </Menu.Item>
            <Menu.Item as={Link} to="/findstore">
              <MySpan>FIND YOUR STORE</MySpan>
            </Menu.Item>
            <Menu.Item as={Link} to="/testride">
              <MySpan>TEST RIDE</MySpan>
            </Menu.Item>
            <Menu.Item as={Link} to="/offers">
              <MySpan>OFFERS</MySpan>
            </Menu.Item>
            <Menu.Item as={Link} to="/blog">
              <MySpan>BLOG</MySpan>
            </Menu.Item>
            <Menu.Item position="right">
              <Button as={Link} to="/booknow" inverted>
                BOOK NOW
              </Button>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 30, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right"></Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
