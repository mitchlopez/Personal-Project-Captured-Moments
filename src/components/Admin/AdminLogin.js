import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updatePermissions } from "../../redux/reducer";
import { Redirect } from "react-router-dom";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }

  componentDidMount() {
    axios.get("/auth").then(res => {
      if (res.data.isAdmin === true) {
        this.props.updatePermissions(["admin"]);
        this.setState({ redirect: true });
      }
    });
  }

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = () => {
    const body = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("/auth", body)
      .then(res => {
        if (res.data.isAdmin) {
          this.props.updatePermissions(["admin"]);
          this.setState({ redirect: true });
        } else {
          alert(
            "Sorry,That Information Does Not Match, Please Check Username and Password and Try Again"
          );
        }
      })
      .catch(e => console.log(e));
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="login-container">
        <p className="login-text warning">
          This is the site Admin Login. If you have reached this page by
          mistake, please click on the logo above.
        </p>
        <div className="username">
          <h2 className="login-text">Username:</h2>
          <input
            className="login-input"
            placeholder="Username"
            onChange={this.handleUsername}
            value={this.state.username}
          />
        </div>
        <div className="password">
          <h2 className="login-text">Password:</h2>
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={this.handlePassword}
            value={this.state.password}
          />
        </div>
        <button onClick={this.handleSubmit} className="login-button">
          Login
        </button>
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
)(AdminLogin);
