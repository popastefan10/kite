import React from "react";
import Header from "./Header";
import Map from "./Map";
import LocationTable from "./LocationTable";
import fetchSpots from "../services/spotRequests";

// Dashboard page
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      spots: [] // Array containing all the spots fetched from the API
    };
  }

  componentDidMount() {
    // Fetch the spots when the component is rendered for the first time
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
