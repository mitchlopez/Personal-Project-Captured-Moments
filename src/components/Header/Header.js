import React from "react";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "close"
    };
  }

  handleMenuClick = () => {
    if (this.state.current !== "open") {
      this.setState({ current: "open" });
    } else {
      this.setState({
        current: "closed"
      });
    }
  };

  render() {
    return (
      <div className="header-menu-wrapper">
        <header>
          <div className="nav-container">
            <div className="left-nav">
              <Link to="/">
                <div className="logo">Captured Moments</div>
              </Link>
              <img
                className="menu"
                src="https://ya-webdesign.com/transparent250_/hamburger-menu-icon-png-white-1.png"
                onClick={this.handleMenuClick}
                alt="menu icon"
              />
            </div>
            <div className="right-nav">
              <p className="nav-item">Landscape</p>
              <p className="nav-item">Sunset</p>
              <p className="nav-item">Moon</p>
              <p className="nav-item">Travel</p>
              <p className="nav-item">Wildlife</p>
              <p className="nav-item">Other</p>
            </div>
          </div>
        </header>
        <Menu state={this.state.current} click={this.handleMenuClick} />
      </div>
    );
  }
}

export default Header;
