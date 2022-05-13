import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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

  render() {
    let markers = this.createMarkers();
    console.log("In render function: ", markers);

    return (
      <div id="map">
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={3}
          >
            {this.createMarkers()}
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default Map;
