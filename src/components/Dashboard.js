import React from "react";
import Header from "./Header";
import Map from "./Map";
import LocationTable from "./LocationTable";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
        <LocationTable />
      </div>
    );
  }
}

export default Dashboard;