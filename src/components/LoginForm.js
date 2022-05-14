import React from "react";
import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "", // TODO: replace with encrypted password
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(`Input ${name} changed its value to ${value}`);

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className={"login-form-container"}>
        <div className={"user-input-container"}>
          <div className={"user-input username-input"}>
            <p>Username</p>
            <input
              type={"text"}
              name={"username"}
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className={"user-input password-input"}>
            <p>Password</p>
            <input
              type={"password"}
              name={"password"}
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className={"login-button-container"}>
          <button
            className={"login-button"}
            onClick={(e) => this.props.onLogin()}
          >
            <p>Login</p>
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
