import React from "react";
import axios from "axios";

class Moon extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    axios
      .get("/album/landscape")
      .then(res => {
        this.setState({ pictures: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
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
    const pictures = this.state.pictures.map(picture => {
      return (
        <img
          className="map-image"
          src={picture.url}
          alt={picture.description}
        />
      );
    });

    return <div className="images">{pictures}</div>;
  }
}

export default Moon;
