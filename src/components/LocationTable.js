import React from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";

class LocationTable extends React.Component {
  render() {
    let childStyle = {
      margin: "1em",
      marginLeft: "0px",
      marginRight: "0px"
    }

    return (
      <div>
        <SearchBar style={childStyle}/>
        <Table style={childStyle} spots={this.props.spots}/>
      </div>
    );
  }
}

export default LocationTable;