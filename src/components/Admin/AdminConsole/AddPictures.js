import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class AddPictures extends React.Component {
  constructor() {
    super();
    this.state = {
      link: "",
      id: 0,
      description: ""
    };
  }

  handleSave = () => {
    const body = {
      url: this.state.link,
      album_id: this.state.id,
      description: this.state.description
    };

    if (this.state.id > 0 && this.state.id < 7 && this.state.link.length > 10) {
      axios
        .post("/photo", body)
        .then(alert("photo added successfuly"))
        .catch(e => console.log(e));
    } else {
      alert("Please Read the Instructions and Try Again");
    }
  };

  logout = () => {
    axios
      .post("/auth/signout")
      .then(alert("Signed Out Successfully"))
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="admin-option-container">
        <div className="add-pictures-inputs">
          <input
            onChange={e => this.setState({ link: e.target.value })}
            className="link-input"
            placeholder="Link (required)"
            value={this.state.link}
          />
          <input
            onChange={e => this.setState({ description: e.target.value })}
            className="link-input"
            placeholder="Description (optional)"
            value={this.state.description}
          />
          <input
            onChange={e => this.setState({ id: e.target.value })}
            className="id-input"
            placeholder="Album-ID"
            value={this.state.id}
          />
        </div>
        <button onClick={this.handleSave} className="login-button">
          Add
        </button>

        <Link to="/">
          <button className="login-button" onClick={this.logout}>
            Sign Out
          </button>
        </Link>

        <img
          src={this.state.link}
          className="preview-image"
          alt="When you enter a link, it will preview here"
        />
        <p className="login-text">
          Instructions: On this tab there are three inputs. One for a link,
          another for the photo description (optional), and one last with a
          number. The link should be a link directly to the picture (Should end
          in .png, .jpg or other picture filetype!). The number depends on what
          album you wish to send the picture to. Press save to add picture to
          album. Here is the template:
        </p>
        <h3 className="comment-header">1: Landscape</h3>
        <h3 className="comment-header">2: Sunset</h3>
        <h3 className="comment-header">3: Moon</h3>
        <h3 className="comment-header">4: Travel</h3>
        <h3 className="comment-header">5: Wildlife</h3>
        <h3 className="comment-header">6: Other</h3>
      </div>
    );
  }
}

export default AddPictures;
