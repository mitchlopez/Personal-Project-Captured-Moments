import React from "react";

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      currentAlbum: "none"
    };
  }

  render() {
    return <h1>this is the Album Component</h1>;
  }
}
export default Album;
