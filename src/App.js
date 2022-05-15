import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import fetchFavourites from "./services/favouritesRequests";
import postLogin from "./services/loginRequests";
import fetchUserWithId from "./services/userRequests";

class App extends React.Component {
  constructor(props) {
    super(props);

    let displayedPage = localStorage.getItem("displayedPage") || "login";

    this.state = {
      displayedPage: displayedPage, // Tells the component which page to display
      userId: localStorage.getItem("userId"),
      userData: JSON.parse(localStorage.getItem("userData")),
      userFavouriteSpots: JSON.parse(
        localStorage.getItem("userFavouriteSpots")
      ),
    };

    this.handleDisplayedPageChange = this.handleDisplayedPageChange.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
  }

  // Changes the page displayed on the App component
  handleDisplayedPageChange(newDisplayedPage) {
    localStorage.setItem("displayedPage", newDisplayedPage);
    this.setState({ displayedPage: newDisplayedPage });
  }

  // Adds user data to state and local storage when the user logs in
  handleUserLogin(userInfo) {
    localStorage.setItem("userId", userInfo.userId);
    this.setState({ userId: userInfo.userId });

    // Now fetch the user data
    fetchUserWithId(userInfo.userId, (data) => {
      localStorage.setItem("userData", JSON.stringify(data));
      this.setState({ userData: data });

      fetchFavourites((data) => {
        localStorage.setItem("userFavouriteSpots", JSON.stringify(data));
        this.setState({ userFavouriteSpots: data });
      });
    });
  }

  // Removes user data from state and local storage when the user logs out
  handleUserLogout() {
    localStorage.setItem("userId", null);
    localStorage.setItem("userData", null);
    localStorage.setItem("userFavouriteSpots", null);
    this.setState({ userId: null, userData: null, userFavouriteSpots: null });
  }

  // Conditional rendering of the page displayed
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
        userData={this.state.userData}
        userFavouriteSpots={this.state.userFavouriteSpots}
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
