import React from "react";
import axios from "axios";

class FeaturedPhotos extends React.Component {
  constructor() {
    super();
    this.state = {
      first: "",
      second: "",
      third: "",
      first_id: 1,
      second_id: 0,
      third_id: 0
    };
  }

  componentDidMount() {
    axios
      .get("/featured")
      .then(res => {
        // console.log(res.data);
        this.setState({ first: res.data[0].url });
        this.setState({ second: res.data[1].url });
        this.setState({ third: res.data[2].url });
        this.setState({ first_id: res.data[0].site_id });
        this.setState({ second_id: res.data[1].site_id });
        this.setState({ third_id: res.data[2].site_id });
      })
      .catch(e => {
        console.log(e);
      });
  }

  handleSave = () => {
    const body = {
      first: this.state.first,
      second: this.state.second,
      third: this.state.third,
      first_id: this.state.first_id,
      second_id: this.state.second_id,
      third_id: this.state.third_id
    };

    axios
      .put("/featured", body)
      .then(console.log("done"))
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="admin-option-container">
        <div className="admin-featured">
          <h3 className="admin-option-text">Featured photo #1:</h3>
          <input
            className="link-input"
            value={this.state.first}
            onChange={e => {
              this.setState({ first: e.target.value });
            }}
          />
          <input
            className="id-input"
            value={this.state.first_id}
            onChange={e => {
              this.setState({ first_id: e.target.value });
            }}
          />
        </div>
        <div className="admin-featured">
          <h3 className="admin-option-text">Featured photo #2:</h3>
          <input
            className="link-input"
            value={this.state.second}
            onChange={e => {
              this.setState({ second: e.target.value });
            }}
          />
          <input
            className="id-input"
            value={this.state.second_id}
            onChange={e => {
              this.setState({ second_id: e.target.value });
            }}
          />
        </div>
        <div className="admin-featured">
          <h3 className="admin-option-text">Featured photo #3:</h3>
          <input
            className="link-input"
            value={this.state.third}
            onChange={e => {
              this.setState({ third: e.target.value });
            }}
          />
          <input
            className="id-input"
            value={this.state.third_id}
            onChange={e => {
              this.setState({ third_id: e.target.value });
            }}
          />
        </div>
        <button onClick={this.handleSave} className="login-button">
          Save
        </button>
        <section className="featured-preview-container">
          <img
            className="featured-preview"
            src={this.state.first}
            alt="first preview"
          />
          <img
            className="featured-preview"
            src={this.state.second}
            alt="second preview"
          />
          <img
            className="featured-preview"
            src={this.state.third}
            alt="third preview"
          />
        </section>
        <p className="login-text">
          Instructions: There are 3 input fields above with a number next to
          them. The input fields represent the links to the featured photos on
          the landing page. When you change a link, you will see the preview
          picture above change. The numbers are the number it will put in the
          url when you click on a picture. If a number is selected, that does
          not exist, the app will crash upon clicking that picture. If the
          picture is not on the site already, then enter the number 0 and the
          link will send users to an error message, instructing them how to view
          the image larger. Nothing will save until the save button, above the
          preview pictures, is pressed. ALL LINKS MUST END IN (.jpg), (.png), OR
          ANOTHER IMAGE FILE-TYPE.
        </p>
      </div>
    );
  }
}

export default FeaturedPhotos;
