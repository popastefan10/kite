import React from "react";
import Header from "./Header";
import Home from "./Map";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default Dashboard;