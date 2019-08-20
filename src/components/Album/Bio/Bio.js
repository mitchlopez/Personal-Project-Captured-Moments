import React from "react";
import { Link } from "react-router-dom";

export default function Bio() {
  return (
    <div className="bio-container">
      <h2 className="bio">About Me:</h2>
      <p className="left-text bio">
        I am a native Arizonan who thinks I have finally found the family's
        artistic gene. Born and raised in southern Arizona, I enjoy exploring
        the desert and capturing not only the landscape, but also its creatures,
        it’s unique plants and cacti, and the various moods of the desert. I
        also have an appreciation for the moon, a great sunset, travel, and
        capturing life’s moments as I see them.
      </p>
      <h3 className="bio">Thank you for visiting my site - Shane</h3>
      <div className="bio-image-container">
        <img
          className="bio-pic"
          src="https://photos.smugmug.com/photos/i-rLcpNrh/0/X2/i-rLcpNrh-X2.jpg"
          alt="first-bio-pic"
        />
        <img
          className="bio-pic"
          src="https://photos.smugmug.com/photos/i-mvnrDtw/0/X2/i-mvnrDtw-X2.jpg"
          alt="second-bio-pic"
        />
        <img
          className="bio-pic"
          src="https://photos.smugmug.com/photos/i-NcW74sG/0/X2/i-NcW74sG-X2.jpg"
          alt="third-bio-pic"
        />
      </div>
      <Link to="/instagram">
        <h3 className="bio">
          Click here to see more pictues of mine on my Instagram
        </h3>
      </Link>
    </div>
  );
}
