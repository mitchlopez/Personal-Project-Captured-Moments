import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  //   console.log(props);
  return (
    <div className={props.state}>
      <Link to="/album/landscape">
        <div className="menu-item" onClick={props.click}>
          Landscape
        </div>
      </Link>
      <Link to="/album/sunset">
        <div className="menu-item" onClick={props.click}>
          Sunset
        </div>
      </Link>
      <Link to="/album/moon">
        <div className="menu-item" onClick={props.click}>
          Moon
        </div>
      </Link>
      <Link to="/album/travel">
        <div className="menu-item" onClick={props.click}>
          Travel
        </div>
      </Link>
      <Link to="/album/wildlife">
        <div className="menu-item" onClick={props.click}>
          Wildlife
        </div>
      </Link>
      <Link to="/album/Other">
        <div className="menu-item" onClick={props.click}>
          Other
        </div>
      </Link>
    </div>
  );
}
