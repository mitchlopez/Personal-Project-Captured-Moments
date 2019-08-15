import React from "react";
import AddPictures from "./AdminConsole/AddPictures";
import AlbumCovers from "./AdminConsole/AlbumCovers";
import FeaturedPhotos from "./AdminConsole/FeaturedPhotos";
import RemovePictures from "./AdminConsole/RemovePictures";

class AdminConsole extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "add"
    };
  }

  renderContent() {
    if (this.state.content === "add") {
      return <AddPictures />;
    } else if (this.state.content === "delete") {
      return <RemovePictures />;
    } else if (this.state.content === "album") {
      return <AlbumCovers />;
    } else {
      return <FeaturedPhotos />;
    }
  }

  render() {
    return (
      <div>
        <nav className="admin-nav">
          <ul
            className="admin-tab"
            onClick={() => this.setState({ content: "featured" })}
          >
            Featured Photos
          </ul>
          <ul
            className="admin-tab"
            onClick={() => this.setState({ content: "add" })}
          >
            Add Pictures
          </ul>
          <ul
            className="admin-tab"
            onClick={() => this.setState({ content: "delete" })}
          >
            Remove Pictures
          </ul>
          <ul
            className="admin-tab"
            onClick={() => this.setState({ content: "album" })}
          >
            Album Covers
          </ul>
        </nav>
        {this.renderContent()}
        <div className="admin-container" />
      </div>
    );
  }
}

export default AdminConsole;
