import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      currentAlbum: "none"
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

  render() {
    return (
      <div className="album-parent">
        <Link to="/album/landscape">
          <div className="mobile">
            <div className="mobile-label">Landscape</div>
            <img
              className="mobile-img"
              src="https://photos.smugmug.com/BEST/i-P7Hrz94/0/5b911b18/XL/IMG_7952-XL.jpg"
              alt="landscape"
            />
          </div>
        </Link>
        <Link to="/album/sunset">
          <div className="mobile">
            <div className="mobile-label">Sunset</div>
            <img
              className="mobile-img"
              src="https://photos.smugmug.com/BEST/i-RtvX54w/0/8608335a/XL/IMG_4961-XL.jpg"
              alt="sunset"
            />
          </div>
        </Link>
        <Link to="/album/moon">
          <div className="mobile">
            <div className="mobile-label">Moon</div>
            <img
              className="mobile-img"
              src="https://photos.smugmug.com/BEST/i-VgnPjVk/0/c420512a/XL/IMG_2844-XL.jpg"
              alt="moon"
            />
          </div>
        </Link>
        <Link to="/album/travel">
          <div className="mobile">
            <div className="mobile-label">Travel</div>
            <img
              className="mobile-img"
              src="https://photos.smugmug.com/BEST/i-CPtzCgh/0/fcf73f31/XL/IMG_7379-XL.jpg"
              alt="travel"
            />
          </div>
        </Link>
        <Link to="/album/wildlife">
          <div className="mobile">
            <div className="mobile-label">Wildlife</div>
            <img
              className="mobile-img"
              src="https://photos.smugmug.com/BEST/i-bJ2r28s/0/11c8a308/X4/IMG_3420-X4.png"
              alt="Wildlife"
            />
          </div>
        </Link>
        <Link to="/album/other">
          <div className="mobile">
            <div className="mobile-label">Other</div>
            <img
              className="mobile-img"
              src="https://photos.smugmug.com/BEST/i-Nbnc8dK/0/bd6ae82c/XL/IMG_6931-XL.jpg"
              alt="Other"
            />
          </div>
        </Link>
        <div className="featured-container">
          <h1 className="featured">Featured:</h1>
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
        </div>
      </div>
    );
  }
}
export default Album;
