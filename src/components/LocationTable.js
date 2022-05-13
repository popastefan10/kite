import React from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";

class LocationTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Table />
      </div>
    );
  }
}

export default LocationTable;