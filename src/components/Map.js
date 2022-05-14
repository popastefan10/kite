import React from "react";
import {
  GoogleMap,
  OverlayView,
  Marker,
} from "@react-google-maps/api";
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
  createMarkers() {
    let markers = this.props.spots.map((spot) => (
      <Marker
        position={{ lat: parseFloat(spot.lat), lng: parseFloat(spot.long) }}
        key={spot.id}
      />
    ));

    return markers;
  }

  // Custom InfoWindows made with OverlayView wrapper
  createInfoWindows() {
    let infoWindows = this.props.spots.map((spot) => (
      <OverlayView
        position={{ lat: parseFloat(spot.lat), lng: parseFloat(spot.long) }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        key={spot.id}
      >
        <SpotInfoWindow spot={spot} />
      </OverlayView>
    ));

    return infoWindows;
  }

  render() {
    let markers = this.createMarkers();
    let infoWindows = this.createInfoWindows();
    // console.log("In render function: ", infoWindows);

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
