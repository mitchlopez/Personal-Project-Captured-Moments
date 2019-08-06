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
            src="https://photos.smugmug.com/BEST/i-4zVFdRx/0/46ba1e3e/XL/IMG_1921-XL.jpg"
            alt="landscape"
          />
        </div>
        <div className="mobile">
          <div className="mobile-label">Sunset</div>
          <img
            className="mobile-img"
            src="https://photos.smugmug.com/BEST/i-RtvX54w/0/8608335a/XL/IMG_4961-XL.jpg"
            alt="sunset"
          />
        </div>
        <div className="mobile">
          <div className="mobile-label">Moon</div>
          <img
            className="mobile-img"
            src="https://photos.smugmug.com/BEST/i-6D7jwww/0/dd501db8/X2/IMG_3142-X2.jpg"
            alt="moon"
          />
        </div>
        <div className="mobile">
          <div className="mobile-label">Travel</div>
          <img
            className="mobile-img"
            src="https://photos.smugmug.com/BEST/i-CPtzCgh/0/fcf73f31/XL/IMG_7379-XL.jpg"
            alt="travel"
          />
        </div>
        <div className="mobile">
          <div className="mobile-label">Wildlife</div>
          <img
            className="mobile-img"
            src="https://photos.smugmug.com/BEST/i-bJ2r28s/0/11c8a308/X4/IMG_3420-X4.png"
            alt="Wildlife"
          />
        </div>
        <div className="mobile">
          <div className="mobile-label">Other</div>
          <img
            className="mobile-img"
            src="https://photos.smugmug.com/BEST/i-Nbnc8dK/0/bd6ae82c/XL/IMG_6931-XL.jpg"
            alt="Other"
          />
        </div>
        {/* Will only render on window width greater than 872 */}
        <div className="album-row-1">
          <div className="album landscape">Landscape</div>
          <div className="album sunset">Sunset</div>
          <div className="album wildlife">Wildlife</div>
        </div>
        <div className="album-row-2">
          <div className="album moon">Moon</div>
          <div className="album travel">Travel</div>
          <div className="album other">Other</div>

        </div>
      </div>
    );
  }
}
export default Album;
