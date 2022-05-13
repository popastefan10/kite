import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className={"search-bar-container"} style={this.props.style}>
        <div className={"search-bar-title"}>
          <h2>Locations</h2>
        </div>
        <div className="search-bar">
          <input
            type={"text"}
            placeholder={"Search..."}
            name={"search"}
          ></input>
          <button type="submit">
            <FontAwesomeIcon
              icon={faSearch}
              className={"search-bar-icon"}
              size={"xs"}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
