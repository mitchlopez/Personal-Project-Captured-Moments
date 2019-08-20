import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      currentAlbum: "none",
      first: "",
      second: "",
      third: "",
      first_id: "",
      second_id: "",
      third_id: "",
      landscape: "",
      sunset: "",
      moon: "",
      travel: "",
      wildlife: "",
      other: "",
      landscapeOffset: 0,
      sunsetOffset: 0,
      moonOffset: 0,
      travelOffset: 0,
      wildlifeOffset: 0,
      otherOffset: 0
    };
  }

  componentDidMount() {
    axios
      .all([axios.get("/featured"), axios.get("/albums")])
      .then(([res1, res2]) => {
        // console.log(res1.data);
        this.setState({ first: res1.data[0].url });
        this.setState({ second: res1.data[1].url });
        this.setState({ third: res1.data[2].url });
        this.setState({ first_id: res1.data[0].site_id });
        this.setState({ second_id: res1.data[1].site_id });
        this.setState({ third_id: res1.data[2].site_id });
        this.setState({ landscape: res2.data[0].url });
        this.setState({ sunset: res2.data[1].url });
        this.setState({ moon: res2.data[2].url });
        this.setState({ travel: res2.data[3].url });
        this.setState({ wildlife: res2.data[4].url });
        this.setState({ other: res2.data[5].url });
        this.setState({ landscapeOffset: res2.data[0].offsets });
        this.setState({ sunsetOffset: res2.data[1].offsets });
        this.setState({ moonOffset: res2.data[2].offsets });
        this.setState({ travelOffset: res2.data[3].offsets });
        this.setState({ wildlifeOffset: res2.data[4].offsets });
        this.setState({ otherOffset: res2.data[5].offsets });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    if (this.state.other === "") {
      return (
        <div>
          <img
            src="https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif"
            alt="loading"
            className="loading-animation"
          />
          <h1 className="loading">Getting Pictures</h1>
        </div>
      );
    }

    return (
      <div className="album-parent">
        <Link to="/album/landscape">
          <div className="mobile">
            <div className="mobile-label">Landscape</div>
            <img
              className="mobile-img"
              src={this.state.landscape}
              alt="landscape"
            />
          </div>
        </Link>
        <Link to="/album/sunset">
          <div className="mobile">
            <div className="mobile-label">Sunset</div>
            <img className="mobile-img" src={this.state.sunset} alt="sunset" />
          </div>
        </Link>
        <Link to="/album/moon">
          <div className="mobile">
            <div className="mobile-label">Moon</div>
            <img className="mobile-img" src={this.state.moon} alt="moon" />
          </div>
        </Link>
        <Link to="/album/travel">
          <div className="mobile">
            <div className="mobile-label">Travel</div>
            <img className="mobile-img" src={this.state.travel} alt="travel" />
          </div>
        </Link>
        <Link to="/album/wildlife">
          <div className="mobile">
            <div className="mobile-label">Wildlife</div>
            <img
              className="mobile-img"
              src={this.state.wildlife}
              alt="Wildlife"
            />
          </div>
        </Link>
        <Link to="/album/other">
          <div className="mobile">
            <div className="mobile-label">Other</div>
            <img className="mobile-img" src={this.state.other} alt="Other" />
          </div>
        </Link>
        <div className="featured-container">
          <h1 className="featured">Featured</h1>
          <section className="featured-preview-container">
            <Link to={`/photo/${this.state.first_id}`}>
              <img
                className="mobile-img"
                src={this.state.first}
                alt="first preview"
              />
            </Link>
            <Link to={`/photo/${this.state.second_id}`}>
              <img
                className="mobile-img"
                src={this.state.second}
                alt="second preview"
              />
            </Link>
            <Link to={`/photo/${this.state.third_id}`}>
              <img
                className="mobile-img"
                src={this.state.third}
                alt="third preview"
              />
            </Link>
          </section>

          <Link to="/bio">
            <div className="mobile-label bio-link">About Me</div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Album;
