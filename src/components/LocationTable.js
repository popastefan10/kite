import React from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";

class LocationTable extends React.Component {
  render() {
    let childStyle = {
      "margin": "1em",
      "margin-left": "0px",
      "margin-right": "0px"
    }

    return (
      <div>
        <SearchBar style={childStyle}/>
        <Table style={childStyle}/>
      </div>
    );
  }
}

export default LocationTable;