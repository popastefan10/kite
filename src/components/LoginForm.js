import React from "react";
import "./LoginForm.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div className={"login-form-container"}>
        <div className={"user-input-container"}>
          <div className={"user-input username-input"}>
            <p>Username</p>
            <input type={"text"} />
          </div>
          <div className={"user-input password-input"}>
            <p>Password</p>
            <input type={"password"} />
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
