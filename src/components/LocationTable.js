import React from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";

class LocationTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameSearched: "",
    };

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  handleSearchBarChange(event) {
    this.setState({
      nameSearched: event.target.value,
    });
  }

  render() {
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
