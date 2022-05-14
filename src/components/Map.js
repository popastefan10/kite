import React from "react";
import { GoogleMap, OverlayView, Marker } from "@react-google-maps/api";
import SpotInfoWindow from "./SpotInfoWindow";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 44.423,
  lng: 26.112,
};

const API_KEY = "AIzaSyCFhIVkwY_rRptuPIZy7wjC_ZGw6MCTLTo";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spotsData: {},
    };
  }

  handleMarkerClick(spotId) {
    return () => {
      this.setState((state, props) => {
        if (!(spotId in state.spotsData))
          Object.assign(state.spotsData, {
            [spotId]: { visibleInfoWindow: true },
          });
        else state.spotsData[spotId].visibleInfoWindow = true;

        return { spotsData: state.spotsData };
      });
    };
  }

  handleInfoWindowClose(spotId) {
    return () => {
      this.setState((state, props) => {
        if (!(spotId in state.spotsData))
          Object.assign(state.spotsData, {
            [spotId]: { visibleInfoWindow: false },
          });
        else state.spotsData[spotId].visibleInfoWindow = false;

        return { spotsData: state.spotsData };
      });
    };
  }

  createMarkers() {
    let markers = this.props.spots.map((spot) => (
      <Marker
        onClick={this.handleMarkerClick(spot.id)}
        position={{ lat: parseFloat(spot.lat), lng: parseFloat(spot.long) }}
        key={spot.id}
      />
    ));

    return markers;
  }

  // Custom InfoWindows made with OverlayView wrapper
  createInfoWindows() {
    let infoWindows = this.props.spots.map((spot) => {
      let displayValue = "none";
      if (
        spot.id in this.state.spotsData &&
        this.state.spotsData[spot.id].visibleInfoWindow
      )
        displayValue = "block";

      return (
        <OverlayView
          position={{ lat: parseFloat(spot.lat), lng: parseFloat(spot.long) }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          key={spot.id}
        >
          <SpotInfoWindow
            spot={spot}
            displayValue={displayValue}
            onInfoWindowClose={this.handleInfoWindowClose(spot.id)}
          />
        </OverlayView>
      );
    });

    return infoWindows;
  }

  render() {
    let markers = this.createMarkers();
    let infoWindows = this.createInfoWindows();
    // console.log("In render function: ", this.state);

    return (
      <div id="map">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={3}>
          {markers}
          {infoWindows}
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
