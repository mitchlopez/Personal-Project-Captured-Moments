import React from "react";
import axios from "axios";

class AlbumCovers extends React.Component {
  constructor() {
    super();
    this.state = {
      landscape: "",
      sunset: "",
      moon: "",
      travel: "",
      wildlife: "",
      other: "",
      moonOffset: 0,
      landscapeOffset: 0,
      sunsetOffset: 0,
      wildlifeOffset: 0,
      otherOffset: 0,
      travelOffset: 0
    };
  }

  componentDidMount() {
    axios
      .get("/albums")
      .then(res => {
        console.log(res.data);
        this.setState({ landscape: res.data[0].url });
        this.setState({ sunset: res.data[1].url });
        this.setState({ moon: res.data[2].url });
        this.setState({ travel: res.data[3].url });
        this.setState({ wildlife: res.data[4].url });
        this.setState({ other: res.data[5].url });
        this.setState({ landscapeOffset: res.data[0].offsets });
        this.setState({ sunsetOffset: res.data[1].offsets });
        this.setState({ moonOffset: res.data[2].offsets });
        this.setState({ travelOffset: res.data[3].offsets });
        this.setState({ wildlifeOffset: res.data[4].offsets });
        this.setState({ otherOffset: res.data[5].offsets });
      })
      .catch(e => {
        console.log(e);
      });
  }

  handleSave = () => {
    const body = {
      landscape: this.state.landscape,
      sunset: this.state.sunset,
      moon: this.state.moon,
      travel: this.state.travel,
      wildlife: this.state.wildlife,
      other: this.state.other,
      landscapeOffset: this.state.landscapeOffset,
      sunsetOffset: this.state.sunsetOffset,
      moonOffset: this.state.moonOffset,
      travelOffset: this.state.travelOffset,
      wildlifeOffset: this.state.wildlifeOffset,
      otherOffset: this.state.otherOffset
    };

    axios
      .put("/albums", body)
      .then(console.log("done"))
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="admin-option-container">
        <div className="admin-featured">
          <h3 className="admin-option-text">Landscape:</h3>
          <input
            className="link-input"
            value={this.state.landscape}
            onChange={e => {
              this.setState({ landscape: e.target.value });
            }}
          />
          <input
            className="id-input"
            value={this.state.landscapeOffset}
            onChange={e => {
              this.setState({ landscapeOffset: e.target.value });
            }}
          />
        </div>
        <div className="admin-featured">
          <h3 className="admin-option-text">Sunset:</h3>
          <input
            className="link-input"
            value={this.state.sunset}
            onChange={e => {
              this.setState({ sunset: e.target.value });
            }}
          />
          <input
            className="id-input"
            value={this.state.sunsetOffset}
            onChange={e => {
              this.setState({ sunsetOffset: e.target.value });
            }}
          />
        </div>
        <div className="admin-featured">
          <h3 className="admin-option-text">Moon:</h3>
          <input
            className="link-input"
            value={this.state.moon}
            onChange={e => {
              this.setState({ moon: e.target.value });
            }}
          />
          <input
            className="id-input"
            value={this.state.moonOffset}
            onChange={e => {
              this.setState({ moonOffset: e.target.value });
            }}
          />
        </div>
        <div className="admin-featured">
          <h3 className="admin-option-text">Travel:</h3>
          <input
            className="link-input"
            value={this.state.travel}
            onChange={e => {
              this.setState({ travel: e.target.value });
            }}
          />
          <input
            className="id-input"
            value={this.state.travelOffset}
            onChange={e => {
              this.setState({ travelOffset: e.target.value });
            }}
          />
        </div>
        <div className="admin-featured">
          <h3 className="admin-option-text">Wildlife:</h3>
          <input
            className="link-input"
            value={this.state.wildlife}
            onChange={e => {
              this.setState({ wildlife: e.target.value });
            }}
          />
          <input
            className="id-input"
            value={this.state.wildlifeOffset}
            onChange={e => {
              this.setState({ wildlifeOffset: e.target.value });
            }}
          />
        </div>
        <div className="admin-featured">
          <h3 className="admin-option-text">Other:</h3>
          <input
            className="link-input"
            value={this.state.other}
            onChange={e => {
              this.setState({ other: e.target.value });
            }}
          />
          <input
            className="id-input"
            value={this.state.otherOffset}
            onChange={e => {
              this.setState({ otherOffset: e.target.value });
            }}
          />
        </div>
        <button onClick={this.handleSave} className="login-button">
          Save
        </button>
        <section className="featured-preview-container">
          <img
            className="featured-preview"
            src={this.state.landscape}
            alt="first preview"
          />
          <img
            className="featured-preview"
            src={this.state.sunset}
            alt="second preview"
          />
          <img
            className="featured-preview"
            src={this.state.moon}
            alt="third preview"
          />
        </section>
        <section className="featured-preview-container">
          <img
            className="featured-preview"
            src={this.state.travel}
            alt="first preview"
          />
          <img
            className="featured-preview"
            src={this.state.wildlife}
            alt="second preview"
          />
          <img
            className="featured-preview"
            src={this.state.other}
            alt="third preview"
          />
        </section>
        <p className="login-text">
          Instructions: There are 6 input fields above with a number next to
          them. The input fields represent the links to the pictures that are
          the album photo for the 6 albums on the landing page. When you change
          a link, you will see the preview picture below change. The numbers are
          the number of pictures to add (a negative number subtracts) to the
          first column on that album. The number 0 will attempt to split the
          images evenly between the two columns,with the first having the extra
          if there are an odd number. Nothing will save until the save button,
          above the preview pictures, is pressed. ALL LINKS MUST END IN (.jpg),
          (.png), OR ANOTHER IMAGE FILE-TYPE.
        </p>
      </div>
    );
  }
}

export default AlbumCovers;
