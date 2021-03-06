import React from "react";
import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SortableButton.css";

// Button used in table header which lets you sort a table column
class SortableButton extends React.Component {
  render() {
    // Compute the button's icon depending on how its' column is sorted
    let sortIcon = faSort;
    if (this.props.sortState == "ascending")
      sortIcon = faSortDown;
    else if (this.props.sortState == "descending")
      sortIcon = faSortUp;

    return (
      <button className="sortable-button" onClick={this.props.onClick}>
        <h3>{this.props.name}</h3>
        <FontAwesomeIcon icon={sortIcon} className={"header-button-sort-icon"} />
      </button>
    );
  }
}

export default SortableButton;
