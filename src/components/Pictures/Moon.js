import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Moon extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      items: 0,
      offset: 0
    };
  }

  componentDidMount() {
    axios
      .all([axios.get("/album/moon"), axios.get("/albums")])
      .then(([res1, res2]) => {
        this.setState({ pictures: res1.data });
        this.setState({ offset: res2.data[2].offsets });
        this.setState({
          items: Math.ceil(this.state.pictures.length / 2) + this.state.offset
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.offset);
    if (this.state.pictures[0] === undefined) {
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
    const columOnePictures = this.state.pictures
      .slice(0, this.state.items)
      .map(picture => {
        return (
          <Link to={`/photo/${picture.photo_id}`}>
            <img
              className="map-image"
              src={picture.url}
              alt={picture.description}
            />
          </Link>
        );
      });

    const columTwoPictures = this.state.pictures
      .slice(this.state.items, this.state.pictures.length)
      .map(picture => {
        return (
          <Link to={`/photo/${picture.photo_id}`}>
            <img
              className="map-image"
              src={picture.url}
              alt={picture.description}
            />
          </Link>
        );
      });

    return (
      <div className="images-container">
        <div className="images one">{columOnePictures}</div>
        <div className="images two">{columTwoPictures}</div>
      </div>
    );
  }
}

export default Moon;
