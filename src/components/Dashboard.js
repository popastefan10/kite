import React from "react";
import Header from "./Header";
import Map from "./Map";
import LocationTable from "./LocationTable";
import fetchUsers from "../services/userRequests";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spots: [] };
  }

  componentDidMount() {
    fetchUsers((data) => this.setState({ spots: data }));
  }

  render() {
    return (
      <div>
        <Header onLogout={this.props.onLogout} />
        <Map spots={this.state.spots} />
        <LocationTable spots={this.state.spots} />
      </div>
    );
  }
}

export default Dashboard;
