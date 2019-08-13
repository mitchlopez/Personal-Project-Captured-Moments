import React from "react";

class AddCommentPopup extends React.Component {
  render(props) {
    console.log(this.props);
    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1>Comment:</h1>
          <input
            placeholder="Comment Here:"
            onChange={this.props.handleInput}
          />
          <button onClick={this.props.closePopup}>Cancel</button>
          <button onClick={this.props.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default AddCommentPopup;
