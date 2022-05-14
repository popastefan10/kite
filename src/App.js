import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import postLogin from "./services/loginRequests";

class App extends React.Component {
  constructor(props) {
    super(props);

    let displayedPage = localStorage.getItem("displayedPage") || "login";

    this.state = {
      displayedPage: displayedPage,
      userId: null,
    };

    this.handleDisplayedPageChange = this.handleDisplayedPageChange.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
  }

  handleDisplayedPageChange(newDisplayedPage) {
    localStorage.setItem("displayedPage", newDisplayedPage);
    this.setState({ displayedPage: newDisplayedPage });
  }

  // Adds user data to state and local storage
  handleUserLogin(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
    this.setState({ userId: userData.userId });
  }

  // Removes user data from state and local storage
  handleUserLogout() {
    localStorage.setItem("userData", null);
    this.setState({ userId: null });
  }

  // Conditional rendering
  getDisplayedPage() {
    if (this.state.displayedPage == "login")
      return (
        <Login
          onLogin={() => {
            postLogin((userData) => this.handleUserLogin(userData));
            this.handleDisplayedPageChange("dashboard");
          }}
        />
      );
    return (
      <Dashboard
        onLogout={() => {
          this.handleUserLogout();
          this.handleDisplayedPageChange("login");
        }}
      />
    );
  }

  render() {
    return <div className="App">{this.getDisplayedPage()}</div>;
  }
}

export default App;
