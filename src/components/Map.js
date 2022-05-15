import React from "react";
import { GoogleMap, OverlayView, Marker } from "@react-google-maps/api";
import SpotInfoWindow from "./SpotInfoWindow";

// Styling for the map
const containerStyle = {
  width: "100%",
  height: "500px",
};

// Center of the map, pointing to Bucharest :)
const center = {
  lat: 44.423,
  lng: 26.112,
};

// Contains a Google Maps map with markers and info windows for every spot
class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // for every spot contains if it's favorite and if the info window should be visible
      spotsData: {},
    };
  }

  // Adds in spotsData object an object with key spotId and value
  // an Object with key propertyName and value propertyValue
  // spotsData = {..., spotId: {..., propertyName: propertyValue}}
  addPropertyForSpotWithId(spotsData, spotId, propertyName, propertyValue) {
    // if there is no data about this spot create a new object for it
    if (!(spotId in spotsData))
      Object.assign(spotsData, {
        [spotId]: { [propertyName]: propertyValue },
      });
    // else modify the existing data object
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

  // SpotInfoWindow is closed when the "X" button is clicked
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

  // If you click on "Add to favorites" on any spot's info window it will become a favorite spot
  handleAddToFavorites(spotId) {
    return () => {
      // Get user's favourite spots from localStorage
      let userFavouriteSpots = JSON.parse(
        localStorage.getItem("userFavouriteSpots")
      );

      // Add the new spot
      userFavouriteSpots.push({
        createdAt: new Date().toString(),
        id: (userFavouriteSpots.length + 1).toString(),
        spot: spotId,
      });

      // Update localStorage
      localStorage.setItem(
        "userFavouriteSpots",
        JSON.stringify(userFavouriteSpots)
      );

      // Update the spot's data object in state
      this.setState((state, props) => {
        let newSpotsData = this.addPropertyForSpotWithId(
          state.spotsData,
          spotId,
          "isFavourite",
          true
        );
        return { spotsData: newSpotsData };
      });
    };
  }

  // If you click on "Remove from favorites" on a spot 
  // it will be deleted from the user's favorite spots
  handleRemoveFromFavorites(spotId) {
    return () => {
      // Get user's favourite spots from localStorage
      let userFavouriteSpots = JSON.parse(
        localStorage.getItem("userFavouriteSpots")
      );

      // Remove the spot
      for (let i = 0; i < userFavouriteSpots.length; i++)
        if (userFavouriteSpots[i].spot == spotId) {
          userFavouriteSpots.splice(i, 1);
          break;
        }

      // Update localStorage
      localStorage.setItem(
        "userFavouriteSpots",
        JSON.stringify(userFavouriteSpots)
      );

      // Update the spot's data object in state
      this.setState((state, props) => {
        let newSpotsData = this.addPropertyForSpotWithId(
          state.spotsData,
          spotId,
          "isFavourite",
          false
        );
        return { spotsData: newSpotsData };
      });
    };
  }

  // Returns boolean: wether the spot with id spotId is among the user's favorite spots or not
  // Possible error: if the API changes the user's favorite spots it should look in props instead of state
  isSpotFavourite(favouriteSpots, spotId) {
    // Check first if isFavourite is in state
    if (
      spotId in this.state.spotsData &&
      "isFavourite" in this.state.spotsData[spotId]
    )
      return this.state.spotsData[spotId].isFavourite;

    // Then I check in props
    if (!favouriteSpots) return false;
    for (let favouriteSpot of favouriteSpots)
      if (favouriteSpot.spot == spotId) return true;
    return false;
  }

  // Returns a list of Marker components for every spot
  createMarkers() {
    // URL for different types of icons
    let redMarkerURL = "http://maps.google.com/mapfiles/ms/micons/red-dot.png";
    let yellowMarkerURL =
      "http://maps.google.com/mapfiles/ms/micons/yellow-dot.png";

    // Markers list
    let markers = this.props.spots.map((spot) => {
      let markerIcon = this.isSpotFavourite(
        this.props.userFavouriteSpots,
        spot.id
      )
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

  // Returns a list of info windows for every spot
  createInfoWindows() {
    let infoWindows = this.props.spots.map((spot) => {
      // Wether the info window should be displayed or not
      let displayValue = "none";
      if (
        spot.id in this.state.spotsData &&
        this.state.spotsData[spot.id].visibleInfoWindow
      )
        displayValue = "block";

      // Wether the spot is favourite or not
      let isFavourite = this.isSpotFavourite(
        this.props.userFavouriteSpots,
        spot.id
      );

      // What should happen when you click on the button at the bottom of the info window
      let onFavoritesButtonClick = isFavourite
        ? this.handleRemoveFromFavorites(spot.id)
        : this.handleAddToFavorites(spot.id);

      return (
        <OverlayView
          position={{ lat: parseFloat(spot.lat), lng: parseFloat(spot.long) }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          key={spot.id}
        >
          <SpotInfoWindow
            spot={spot}
            isFavourite={isFavourite}
            displayValue={displayValue}
            onInfoWindowClose={this.handleInfoWindowClose(spot.id)}
            onFavoritesButtonClick={onFavoritesButtonClick}
          />
        </OverlayView>
      );
    });

    return infoWindows;
  }

  render() {
    let markers = this.createMarkers();
    let infoWindows = this.createInfoWindows();

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
