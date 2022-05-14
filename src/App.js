import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

class App extends React.Component {
  constructor(props) {
    super(props);

    let displayedPage = localStorage.getItem("displayedPage") || "login";

    this.state = {
      displayedPage: displayedPage,
      userId: null,
    };

    this.handleDisplayedPageChange = this.handleDisplayedPageChange.bind(this);
  }

  handleDisplayedPageChange(newDisplayedPage) {
    localStorage.setItem("displayedPage", newDisplayedPage);
    this.setState({ displayedPage: newDisplayedPage });
  }

  // Conditional rendering
  getDisplayedPage() {
    if (this.state.displayedPage == "login")
      return <Login onLogin={this.handleDisplayedPageChange} />;
    return <Dashboard />;
  }

  render() {
    if (this.state.displayedPage == "dashboard") {
      setInterval(() => this.handleDisplayedPageChange("login"), 5000);
    }

    return <div className="App">{this.getDisplayedPage()}</div>;
  }
}

export default App;
