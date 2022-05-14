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

  // Adds in spotsData Object an object with key spotId and value
  // an Object with key propertyName and value propertyValue
  // spotsData = {..., spotId: {..., propertyName: propertyValue}}
  addPropertyForSpotWithId(spotsData, spotId, propertyName, propertyValue) {
    if (!(spotId in spotsData))
      Object.assign(spotsData, {
        [spotId]: { [propertyName]: propertyValue },
      });
    else spotsData[spotId][propertyName] = propertyValue;

    return spotsData;
  }

  // When a Marker is clicked it opens its corresponding SpotInfoWindow
  handleMarkerClick(spotId) {
    return () => {
      this.setState((state, props) => {
        let newSpotsData = this.addPropertyForSpotWithId(
          state.spotsData,
          spotId,
          "visibleInfoWindow",
          true
        );
        return { spotsData: newSpotsData };
      });
    };
  }

  // SpotInfoWindow is closed when the x button is clicked
  handleInfoWindowClose(spotId) {
    return () => {
      this.setState((state, props) => {
        let newSpotsData = this.addPropertyForSpotWithId(
          state.spotsData,
          spotId,
          "visibleInfoWindow",
          false
        );
        return { spotsData: newSpotsData };
      });
    };
  }

  isSpotFavourite(favouriteSpots, spotId) {
    if (!favouriteSpots) return false;
    for (let favouriteSpot of favouriteSpots)
      if (favouriteSpot.spot == spotId) return true;
    return false;
  }

  createMarkers() {
    let redMarkerURL = "http://maps.google.com/mapfiles/ms/micons/red-dot.png";
    let yellowMarkerURL =
      "http://maps.google.com/mapfiles/ms/micons/yellow-dot.png";

    let markers = this.props.spots.map((spot) => {
      let markerIcon = this.isSpotFavourite(this.props.userFavouriteSpots, spot.id)
        ? yellowMarkerURL
        : redMarkerURL;

      return (
        <Marker
          onClick={this.handleMarkerClick(spot.id)}
          icon={markerIcon}
          position={{ lat: parseFloat(spot.lat), lng: parseFloat(spot.long) }}
          key={spot.id}
        />
      );
    });

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
