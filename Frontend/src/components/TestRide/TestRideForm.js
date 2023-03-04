import React from "react";
import { Button, Form, Segment, Message } from "semantic-ui-react";

const CityOptions = [
  { key: "bg", value: "bg", text: "Banglore" },
  { key: "bh", value: "bh", text: "Bhopal" },
  { key: "deh", value: "deh", text: "Deharadun" },
  { key: "ind", value: "ind", text: "Indore" },
  { key: "jp", value: "jp", text: "Jabalpur" },
  { key: "kk", value: "kk", text: "Kolkata" },
  { key: "mm", value: "mm", text: "Mumbai" },
  { key: "pn", value: "pn", text: "Pune" },
];

const vehicleModels = [
  { key: "D15", value: "D15", text: "D15" },
  { key: "B8", value: "B8", text: "B8" },
  { key: "A2", value: "A2", text: "A2" },
];

const TestRideForm = () => (
  <Segment inverted>
    <Form inverted>
      <h2 style={{ textDecoration: "underline" }}>Book Your Test Ride :</h2>

      <Form.Group
        widths="equal"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        <Form.Dropdown
          placeholder="Select City"
          label="City"
          fluid
          search
          selection
          options={CityOptions}
          required
        />

        <Form.Dropdown
          placeholder="Select Vehicle"
          label="Vehicle"
          fluid
          search
          selection
          options={vehicleModels}
          required
        />

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
        <Form.Input label="Phone" placeholder="Phone" required={true} />
      </Form.Group>

      <br />
      <Form.Group>
        <Button type="submit" color="blue" style={{ marginLeft: "2rem" }}>
          Book Now
        </Button>

        <Button
          size="small"
          onClick={resetValues}
          style={{ marginLeft: "2rem" }}
        >
          Reset
        </Button>
      </Form.Group>
    </Form>
  </Segment>
);

const resetValues = () => {};
const setRecord = () => {};
export default TestRideForm;
