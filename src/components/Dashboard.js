import React from "react";
import Header from "./Header";
import Map from "./Map";
import LocationTable from "./LocationTable";
import SpotInfoWindow from "./SpotInfoWindow";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spots: [] };
  }

  // https://www.pluralsight.com/guides/fetching-data-updating-state-react-class
  componentDidMount() {
    // Get spots list from the API
    const API_ENDPOINT = "https://627d27b8e5ac2c452afe3162.mockapi.io/spot";
    fetch(API_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        return response.json();
      })
      .then((data) => {
        this.setState({ spots: data });
      })
      .catch((err) => console.log("Error at fetching data: ", err));
  }

  render() {
    const spot = {
      createdAt: "2022-05-11T23:26:28.822Z",
      name: "Harvey - Cassin",
      country: "Paraguay",
      lat: "-39.9393",
      long: "154.5062",
      probability: 59,
      month: "April",
      id: "1",
    };

    return (
      <div>
        <Header />
        <SpotInfoWindow spot={spot} />
        <Map spots={this.state.spots} />
        <LocationTable spots={this.state.spots} />
      </div>
    );
  }
}

export default Dashboard;
