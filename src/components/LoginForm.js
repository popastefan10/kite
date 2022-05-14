import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div className={"user-input"}>
          <div className={"username-input"}>
            <p>Username</p>
            <input type={"text"} placeholder={"Type in your username..."} />
          </div>
          <div className={"password-input"}>
            <p>Password</p>
            <input type={"password"} placeholder={"Type in your password..."} />
          </div>
        </div>

        <div className={"login-button-container"}>
          <button className={"login-button"}>
            <p>Login</p>
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
