import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  //   console.log(props);
  return (
    <div className={props.state.current}>
      <Link to="/album/landscape">
        <div className={props.state.menu} onClick={props.click}>
          Landscape
        </div>
      </Link>
      <Link to="/album/sunset">
        <div className={props.state.menu} onClick={props.click}>
          Sunset
        </div>
      </Link>
      <Link to="/album/moon">
        <div className={props.state.menu} onClick={props.click}>
          Moon
        </div>
      </Link>
      <Link to="/album/travel">
        <div className={props.state.menu} onClick={props.click}>
          Travel
        </div>
      </Link>
      <Link to="/album/wildlife">
        <div className={props.state.menu} onClick={props.click}>
          Wildlife
        </div>
      </Link>
      <Link to="/album/Other">
        <div className={props.state.menu} onClick={props.click}>
          Other
        </div>
      </Link>
    </div>
  );
}
