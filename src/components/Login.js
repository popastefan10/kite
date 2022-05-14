import React from "react";
import Title from "./Title";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <LoginForm />
      </div>
    );
  }
}

export default Login;