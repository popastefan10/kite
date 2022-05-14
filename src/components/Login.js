import React from "react";
import Title from "./Title";
import LoginForm from "./LoginForm";
import "./Login.css";

class Login extends React.Component {
  render() {
    let titleStyle = {
      fontSize: "350%",
    };

    return (
      <div className={"login"}>
        <Title style={titleStyle} />
        <LoginForm onLogin={this.props.onLogin} />
      </div>
    );
  }
}

export default Login;
