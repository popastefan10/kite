import React from "react";
import Header from "./Header";
import Map from "./Map";
import LocationTable from "./LocationTable";
import fetchSpots from "../services/spotRequests";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spots: [] };
  }

  componentDidMount() {
    fetchSpots((data) => this.setState({ spots: data }));
  }

  render() {
    return (
      <div>
        <Header userData={this.props.userData} onLogout={this.props.onLogout} />
        <Map
          spots={this.state.spots}
          userFavouriteSpots={this.props.userFavouriteSpots}
        />
        <LocationTable spots={this.state.spots} />
      </div>
    );
  }
}

export default Dashboard;
