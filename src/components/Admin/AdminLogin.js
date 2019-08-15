import React from "react";
import axios from "axios";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
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
      .then()
      .catch(e => console.log(e));
  };

  render() {
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

export default AdminLogin;
