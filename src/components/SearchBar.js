import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type={"text"} placeholder={"Search..."} name={"search"}></input>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

export default SearchBar;
