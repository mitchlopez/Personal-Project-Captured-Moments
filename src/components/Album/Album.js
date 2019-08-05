import React from "react";

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      currentAlbum: "none"
    };
  }

  render() {
    return (
      <div className="album-parent">
        {/* will only render when width is less than 872px */}
        <div className="mobile">
          <div className="mobile-label">Landscape</div>
          <img
            className="mobile-img"
            src="https://photos.smugmug.com/July-2019/i-fTwrjFh/0/7fc3df7d/X3/DSC_4004-X3.jpg"
            alt="landscape"
          />
        </div>
        <div className="mobile">
          <div className="mobile-label">Sunset</div>
          <img
            className="mobile-img"
            src="https://photos.smugmug.com/July-2019/i-CNdkWmJ/0/942dbfa1/X3/DSC_4168-X3.jpg"
            alt="sunset"
          />
        </div>
        <div className="mobile">
          <div className="mobile-label">Moon</div>
          <img
            className="mobile-img"
            src="https://photos.smugmug.com/May-2019/i-fJqp6LG/0/432288d2/X3/DSC_3548-X3.jpg"
            alt="moon"
          />
        </div>
        <div className="mobile">
          <div className="mobile-label">Travel</div>
          <img
            className="mobile-img"
            src="https://photos.smugmug.com/Biogen-Washington-DC-2019/i-CvtSv49/0/4d3dcf24/X3/DSC_1861-X3.jpg"
            alt="travel"
          />
        </div>

        {/* Will only render on width greater than 872 */}
        <div className="album-row-1">
          <div className="album">Landscape</div>
          <div className="album">Sunset</div>
        </div>
        <div className="album-row-2">
          <div className="album">Moon</div>
          <div className="album">Travel</div>
        </div>
      </div>
    );
  }
}
export default Album;
