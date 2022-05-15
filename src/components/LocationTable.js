import React from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";

// Component containing a table with all the spots, 
// and a search bar that filters the spots by name
class LocationTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameSearched: "", // The string used to filter the spots
    };

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  // Sets state to the value of the search bar text input, 
  // will be passed down to SearchBar component to ensure inverse data flow
  handleSearchBarChange(event) {
    this.setState({
      nameSearched: event.target.value,
    });
  }

  render() {
    // Style applied to every child of the component
    let childStyle = {
      margin: "1em",
      marginLeft: "0px",
      marginRight: "0px",
    };

    return (
      <div>
        <SearchBar style={childStyle} onChange={this.handleSearchBarChange} />
        <Table style={childStyle} spots={this.props.spots} nameSearched={this.state.nameSearched} />
      </div>
    );
  }
}

export default LocationTable;
