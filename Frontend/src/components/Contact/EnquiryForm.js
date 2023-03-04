import React from "react";
import { Button, Form, Segment, Message } from "semantic-ui-react";

const Enquiryform = () => (
  <Segment inverted>
    <Form inverted>
      <h2 style={{ textDecoration: "underline" }}>Feedback :</h2>

      <Form.Group
        widths="equal"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        <Form.Input
          fluid
          label="First name"
          placeholder="First name"
          required
          onChange={(e) => setRecord(e.target.value)}
        />
        <Form.Input
          fluid
          label="Last name"
          placeholder="Last name"
          required={true}
        />
      </Form.Group>
      <Form.Group
        widths={2}
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        <Form.Input label="Email" placeholder="joe@schmoe.com" required />
        <Message
          warning
          header="Could you check something!"
          list={[
            "That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.",
          ]}
        />
        <Form.Input label="Phone" placeholder="Phone" />
      </Form.Group>
      <Form.Group
        widths="equal"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        <Form.Input
          label="Message"
          placeholder="Feedback/Queries"
          required={true}
        />
      </Form.Group>
      <br />
      <Form.Group>
        <Button type="submit" color="blue" style={{ marginLeft: "2rem" }}>
          Submit
        </Button>
        <Button onClick={resetValues} style={{ marginLeft: "2rem" }}>
          Reset
        </Button>
      </Form.Group>
    </Form>
  </Segment>
);

const resetValues = () => {};
const setRecord = () => {};
export default Enquiryform;
