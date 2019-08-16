import React from "react";
import axios from "axios";

class RemovePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOne: 0,
      numberTwo: 0
    };
  }

  handleSubmit = () => {
    if (
      this.state.numberOne === this.state.numberTwo &&
      this.state.numberOne !== 0
    ) {
      axios
        .delete(`/photo/${this.state.numberOne}`)
        .then(alert("Deleted Successfuly"))
        .catch(e => console.log(e));
    } else {
      alert("Numbers do not match or are still 0");
    }
  };

  render() {
    // console.log(this.state.numberOne);
    return (
      <div className="admin-option-container">
        <p className="login-text">
          Instructions: This tab has two inputs, which are both numbers. The
          purpose of this, is to make sure you do not accidently delete a number
          you put in by mistake. With this being said, please double check the
          number of the photo you wish to delete. As long as the numbers match
          and that photo exists, the photo with that number will be deleted once
          you click confirm.
        </p>
        <div className="delete-photo-inputs">
          <h2 className="login-text">
            Insert Photo Number You Wish to Delete:
          </h2>
          <input
            className="delete-input"
            placeholder="#"
            value={this.state.numberOne}
            onChange={e => this.setState({ numberOne: e.target.value })}
          />
          <h2 className="login-text">
            Please Confirm Photo Number You Wish to Delete:
          </h2>
          <input
            className="delete-input"
            placeholder="#"
            value={this.state.numberTwo}
            onChange={e => this.setState({ numberTwo: e.target.value })}
          />
          <button onClick={this.handleSubmit} className="login-button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default RemovePicture;
