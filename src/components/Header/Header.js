import React from "react";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "close",
      menu: "close"
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
    if (this.state.menu !== "menu-item") {
      this.setState({ menu: "menu-item" });
    } else {
      this.setState({
        menu: "close"
      });
    }
  };

  handleLogoClick = () => {
    if (this.state.current === "open") {
      this.setState({ current: "closed" });
      this.setState({ menu: "close" });
    }
  };

  render() {
    return (
      <div className="header-menu-wrapper">
        <header>
          <div className="nav-container">
            <div className="left-nav">
              <Link to="/">
                <div onClick={this.handleLogoClick} className="logo">
                  Captured Moments
                </div>
              </Link>
              <img
                className="menu"
                src="https://ya-webdesign.com/transparent250_/hamburger-menu-icon-png-white-1.png"
                onClick={this.handleMenuClick}
                alt="menu icon"
              />
            </div>
            <div className="right-nav">
              <Link to="/album/landscape">
                <p className="nav-item">Landscape</p>
              </Link>
              <Link to="/album/sunset">
                <p className="nav-item">Sunset</p>
              </Link>
              <Link to="/album/moon">
                <p className="nav-item">Moon</p>
              </Link>
              <Link to="/album/travel">
                <p className="nav-item">Travel</p>
              </Link>
              <Link to="/album/wildlife">
                <p className="nav-item">Wildlife</p>
              </Link>
              <Link to="/album/other">
                <p className="nav-item">Other</p>
              </Link>
              <Link to="/auth">
                <p className="nav-item">Admin</p>
              </Link>
            </div>
          </div>
        </header>
        <Menu state={this.state} click={this.handleMenuClick} />
      </div>
    );
  }
}

export default Header;
