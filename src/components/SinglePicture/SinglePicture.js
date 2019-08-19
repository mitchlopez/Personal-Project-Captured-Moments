import React from "react";
import axios from "axios";
import Filter from "bad-words";
import { PermissibleRender } from "@brainhubeu/react-permissible";
import { connect } from "react-redux";
import { getPermissions, updatePermissions } from "../../redux/reducer";

const filter = new Filter();
class SinglePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      comments: [],
      url: "",
      description: "",
      showPopup: "no-popup",
      newComment: "",
      showDescription: "hide-description",
      userPermissions: ["regular"]
    };
  }
  componentDidMount() {
    Promise.all([
      axios.get(`/photo/${this.props.match.params.id}`),
      axios.get(`/photo/comments/${this.props.match.params.id}`),
      axios.get("/auth")
    ]).then(([result1, result2, result3]) => {
      this.setState({ url: result1.data[0].url }); //sets state with image url
      this.setState({ description: result1.data[0].description }); //sets state with image description
      this.setState({ userPermissions: this.props.userPermissions });
      if (result3.data.isAdmin === true) {
        this.props.updatePermissions(["admin"]);
        this.setState({ userPermissions: this.props.userPermissions });
      }
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
        newComment: "this is"
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
    if (this.state.newComment.length < 3) {
      alert("Please insert a minimum 3 characters!");
    } else if (this.state.newComment.length > 500) {
      alert("500 character maximum");
    } else {
      axios
        .post(`/photo/comment/${this.props.match.params.id}`, body)
        .then(() => {
          this.setState({ newComment: "" });
          this.refreshComments();
        });
      this.togglePopup();
    }
  };
  toggleDecriptionEdit = () => {
    if (this.state.showDescription !== "show-description") {
      this.setState({ showDescription: "show-description" });
    } else {
      this.setState({ showDescription: "hide-description" });
    }
  };

  handleNewDescription = () => {
    const body = {
      description: this.state.description
    };

    axios
      .put(`/photo/description/${this.props.match.params.id}`, body)
      .then(this.toggleDecriptionEdit())
      .catch(e => {
        console.log(e);
      });
  };

  handleInput = event => {
    // console.log(event);
    this.setState({
      newComment: event.target.value
    });
  };

  render() {
    if (this.state.url === "") {
      return (
        <div>
          <img
            src="https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif"
            alt="loading"
            className="loading-animation"
          />
          <h1 className="loading">Getting Picture</h1>
        </div>
      );
    }

    return (
      <div className="single-picture-container">
        <img className="single-image" src={this.state.url} alt="selected-img" />
        <div className="image-text">
          <div className="description">
            <div className="description-first-row">
              <h3 className="single-image-text">Description:</h3>
              <div className="description-text single-image-text">
                {this.state.description}
              </div>
              <PermissibleRender
                userPermissions={this.state.userPermissions}
                requiredPermissions={["admin"]}
              >
                <button
                  className="edit-description-button"
                  onClick={this.toggleDecriptionEdit}
                >
                  Edit
                </button>
              </PermissibleRender>
            </div>
            <div className={this.state.showDescription}>
              <input
                className="edit-description-input"
                value={this.state.description}
                onChange={e => {
                  this.setState({ description: e.target.value });
                }}
              />
              <button
                className="submit-new-description"
                onClick={this.handleNewDescription}
              >
                Submit
              </button>
            </div>
          </div>
          <h4 className="single-image-text">Comments: </h4>
          {this.state.comments.map(comment => {
            return (
              <div className="single-comment">
                <p className="single-image-text">
                  {filter.clean(comment.comment)}
                </p>
                <PermissibleRender
                  userPermissions={this.state.userPermissions}
                  requiredPermissions={["admin"]}
                >
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
                    Delete
                  </button>
                </PermissibleRender>
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

function mapStateToProps(reduxState) {
  return {
    userPermissions: reduxState.userPermissions
  };
}

export default connect(
  mapStateToProps,
  { getPermissions, updatePermissions }
)(SinglePicture);
