import {
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";

import React from "react";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div>
      <Segment inverted vertical style={{ padding: "5em 2em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header color="blue" inverted as="h3" content="BikeSystem" />
                <List link inverted>
                  <List.Item as={Link} to="/about">
                    Our Story
                  </List.Item>
                  <List.Item as={Link} to="">
                    Calculate Your Savings
                  </List.Item>
                  <List.Item as={Link} to="/contact">
                    Contact Us
                  </List.Item>
                  <List.Item as={Link} to="/blog">
                    Blog
                  </List.Item>
                  <List.Item as={Link} to="">
                    Book now
                  </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={3}>
                <Header color="blue" inverted as="h3" content="Legal" />
                <List link inverted>
                  <List.Item as={Link} to="/terms">
                    Terms
                  </List.Item>
                  <List.Item as={Link} to="/privacy">
                    Privacy Policy
                  </List.Item>
                  <List.Item as={Link} to="/refund">
                    Refund Policy
                  </List.Item>
                  <List.Item as={Link} to="/disclaimer">
                    Disclaimer
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header
                  color="blue"
                  inverted
                  as="h3"
                  content="Connect with us"
                />
                <List link inverted>
                  <List.Item as={Link} to="">
                    <Icon name="facebook" size="large"></Icon>
                  </List.Item>
                  <List.Item as={Link} to="">
                    <Icon name="twitter" size="large" />
                  </List.Item>
                  <List.Item as={Link} to="">
                    <Icon name="instagram" size="large" />
                  </List.Item>
                  <List.Item as={Link} to="">
                    <Icon name="linkedin" size="large" />
                  </List.Item>
                  <List.Item as={Link} to="">
                    <Icon name="youtube" size="large" />
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header color="blue" as="h3" inverted></Header>
                <br />
                <p align="center" style={{ backgroundColor: "darkcyan" }}>
                  All information is subject to specific conditions | Copyright
                  © 2023 BikeSystem. All rights reserved.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default footer;
