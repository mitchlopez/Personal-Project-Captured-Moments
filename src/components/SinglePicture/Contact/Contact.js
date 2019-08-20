import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import axios from "axios";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      returnAddress: ""
    };
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleMessage = e => {
    this.setState({ message: e.target.value });
  };

  handleReturnAddress = e => {
    this.setState({ returnAddress: e.target.value });
  };

  handleSend = e => {
    let body = {
      returnAddress: this.state.returnAddress,
      name: this.state.name,
      message: this.state.message,
      picture: this.props.picture
    };
    if (
      this.state.name.length > 1 &&
      this.state.returnAddress.includes("@") === true &&
      this.state.message.length > 10
    ) {
      axios
        .post("/photo/contact", body)
        .then(this.props.sent())
        .catch(e => {
          console.log(e);
        });
    } else if (this.state.message.length < 10) {
      alert("Message must be at least 10 characters long");
    } else {
      alert(
        "Please make sure that your name and return email address are correct"
      );
    }
  };

  render(props) {
    return (
      <label className={this.props.display}>
        Contact:
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Your Name:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
            onChange={this.handleName}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Return Address"
            aria-label="Return Address"
            aria-describedby="basic-addon2"
            onChange={this.handleReturnAddress}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">
              YourEmail@example.com
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Message:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            onChange={this.handleMessage}
          />
        </InputGroup>
        <Button onClick={this.handleSend}>Send</Button>
      </label>
    );
  }
}

export default Contact;
