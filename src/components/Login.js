import React from "react";
import Title from "./Title";
import LoginForm from "./LoginForm";
import "./Login.css";

// Login page, which is first displayed when you enter the site;
// it's made of the site's title and a login form
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
