import React from "react";

export default function(props) {
  //   console.log(props);
  return (
    <div className={props.state}>
      <div className="menu-item" onClick={props.click}>
        Landscape
      </div>
      <div className="menu-item" onClick={props.click}>
        Sunset
      </div>
      <div className="menu-item" onClick={props.click}>
        Moon
      </div>
      <div className="menu-item" onClick={props.click}>
        Travel
      </div>
      <div className="menu-item" onClick={props.click}>
        Wildlife
      </div>
      <div className="menu-item" onClick={props.click}>
        Other
      </div>
    </div>
  );
}
