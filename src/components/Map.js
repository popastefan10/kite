import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const API_KEY = "AIzaSyCFhIVkwY_rRptuPIZy7wjC_ZGw6MCTLTo";

class Map extends React.Component {
  render() {
    return (
      <div id="map">
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={4}
          >
            <Marker
              position={center}
              icon={
                "./logo192.png"                
              }
              key={Math.random()}
              visible={true}
              zIndex={100}
            ></Marker>
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default Map;
