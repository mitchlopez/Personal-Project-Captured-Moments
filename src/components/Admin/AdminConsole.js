import React from "react";
import AddPictures from "./AdminConsole/AddPictures";
import AlbumCovers from "./AdminConsole/AlbumCovers";
import FeaturedPhotos from "./AdminConsole/FeaturedPhotos";
import RemovePictures from "./AdminConsole/RemovePictures";
import { PermissibleRender } from "@brainhubeu/react-permissible";
import { connect } from "react-redux";
import { updatePermissions } from "../../redux/reducer";
import axios from "axios";
// import { Redirect } from "react-router-dom";

class AdminConsole extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "add",
      userPermissions: ["regular"],
      redirect: false
    };
  }

  componentDidMount() {
    axios.get("/auth").then(res => {
      // console.log(this.props);
      if (res.data.isAdmin === true) {
        this.props.updatePermissions(["admin"]);
        this.setState({ userPermissions: this.props.userPermissions });
      }
    });
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
    // if (this.state.userPermissions !== ["admin"]) {
    //   return <Redirect to="/auth" />;
    // }

    return (
      <div className="admin-container">
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
        <PermissibleRender
          userPermissions={this.state.userPermissions}
          requiredPermissions={["admin"]}
        >
          {this.renderContent()}
        </PermissibleRender>
        <div className="admin-container" />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    userPermissions: reduxState.userPermissions
  };
}

export default connect(
  mapStateToProps,
  { updatePermissions }
)(AdminConsole);
