import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import postLogin from "./services/loginRequests";
import fetchUserWithId from "./services/userRequests";

class App extends React.Component {
  constructor(props) {
    super(props);

    let displayedPage = localStorage.getItem("displayedPage") || "login";

    this.state = {
      displayedPage: displayedPage,
      userId: localStorage.getItem("userId"),
      userData: JSON.parse(localStorage.getItem("userData")),
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
  handleUserLogin(userInfo) {
    localStorage.setItem("userId", userInfo.userId);
    this.setState({ userId: userInfo.userId });

    // Now fetch the user data
    fetchUserWithId(userInfo.userId, (data) => {
      localStorage.setItem("userData", JSON.stringify(data));
      this.setState({ userData: data });
    });
  }

  // Removes user data from state and local storage
  handleUserLogout() {
    localStorage.setItem("userId", null);
    this.setState({ userId: null, userData: null });
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
