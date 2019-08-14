import React from "react";
import axios from "axios";
import { CLIENT_RENEG_LIMIT } from "tls";
// import AddCommentPopup from "./AddCommentPopup/AddCommentPopup";

class SinglePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      comments: [],
      url: "",
      description: "",
      showPopup: "no-popup",
      newComment: ""
    };
  }
  componentDidMount() {
    Promise.all([
      axios.get(`/photo/${this.props.match.params.id}`),
      axios.get(`/photo/comments/${this.props.match.params.id}`)
    ]).then(([result1, result2]) => {
      this.setState({ url: result1.data[0].url }); //sets state with image url
      this.setState({ description: result1.data[0].description }); //sets state with image description
      // console.log(result2.data);
      //   console.log(result2.data[0]);

      if (result2.data[0] !== undefined) {
        this.setState({ comments: result2.data });
      }
    });
  }

  refreshComments = () => {
    axios.get(`/photo/comments/${this.props.match.params.id}`).then(res => {
      this.setState({ comments: res.data });
    });
  };

  togglePopup = () => {
    if (this.state.showPopup === "popup") {
      this.setState({
        showPopup: "no-popup",
        newComment: ""
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
    if (this.state.newComment.length > 2) {
      axios
        .post(`/photo/comment/${this.props.match.params.id}`, body)
        .then(() => {
          this.setState({ newComment: "" });
          this.refreshComments();
        });
      this.togglePopup();
    } else {
      alert("Please insert a minimum 3 characters!");
    }
  };

  handleInput = event => {
    // console.log(event);
    this.setState({
      newComment: event.target.value
    });
  };

  render() {
    // console.log(this.state.comments);
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
            return (
              <div className="single-comment">
                <p className="single-image-text">{comment.comment}</p>
                <button
                  onClick={() => {
                    axios
                      .delete(`/photo/comment/${comment.comment_id}`)
                      .then(() => {
                        this.refreshComments();
                      })
                      .catch(e => console.log(e));
                    console.log(comment.comment_id);
                  }}
                  className="admin-delete-button"
                >
                  Delete Comment
                </button>
              </div>
            );
          })}
        </div>
        <div>
          {/*Popup for comment*/}
          <button className="add-comment-button" onClick={this.togglePopup}>
            {" "}
            Click To Add Comment
          </button>

          <div className={this.state.showPopup}>
            <div className="popup\_inner">
              <h1 className="comment-header">Comment:</h1>

              <input
                className="comment-input"
                placeholder=" Type Here:"
                onChange={this.handleInput}
                value={this.state.newComment}
              />
              <div className={this.state.togglePopup}>
                <button className="comment-button" onClick={this.togglePopup}>
                  Cancel
                </button>
                <button className="comment-button" onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePicture;
