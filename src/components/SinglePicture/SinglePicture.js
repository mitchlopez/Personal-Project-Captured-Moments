import React from "react";
import axios from "axios";
import AddCommentPopup from "./AddCommentPopup/AddCommentPopup";

class SinglePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      comments: [],
      url: "",
      description: "",
      showPopup: false,
      newComment: ""
    };
  }
  componentDidMount() {
    // if (this.state.currentImage !== 0) {
    Promise.all([
      axios.get(`/photo/${this.props.match.params.id}`),
      axios.get(`/photo/comments/${this.props.match.params.id}`)
    ]).then(([result1, result2]) => {
      this.setState({ url: result1.data[0].url }); //sets state with image url
      this.setState({ description: result1.data[0].description }); //sets state with image description

      //   console.log(result2.data[0]);

      if (result2.data[0] !== undefined) {
        this.setState({ comments: result2.data });
      }
    });
  }

  togglePopup = () => {
    if (this.state.showPopup === "popup") {
      this.setState({
        showPopup: "no-popup"
      });
    } else {
      this.setState({
        showPopup: "popup"
      });
    }
  };

  handleSubmit = () => {
    const body = {
      comment: this.state.newComment
    };
    if (this.state.newComment !== undefined) {
      axios.post(`/photo/comments/${this.props.match.params.id}`, body);
    }
  };

  handleInput = event => {
    console.log(event);
    this.setState({
      newComment: event.target.value
    });
  };

  render() {
    console.log(this.state.newComment);
    if (this.state.url === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <div className="single-picture-container">
        <img className="single-image" src={this.state.url} alt="selected-img" />
        <div className="image-text">
          <div className="description">
            <h3 className="single-image-text">Description:</h3>
            <div className="description-text single-image-text">
              {this.state.description}
            </div>
          </div>
          <h4 className="single-image-text">Comments: </h4>
          {this.state.comments.map(comment => {
            return <p className="single-image-text">{comment.comment}</p>;
          })}
        </div>
        <div>
          {/*Popup for comment*/}
          <button onClick={this.togglePopup}> Click To Launch Popup</button>

          {this.state.showPopup === false ? null : (
            <div className={this.state.showPopup}>
              <div className="popup\_inner">
                <h1>Comment:</h1>
                <input
                  placeholder="Comment Here:"
                  onChange={this.handleInput}
                />
                <button onClick={this.closePopup}>Cancel</button>
                <button onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SinglePicture;
