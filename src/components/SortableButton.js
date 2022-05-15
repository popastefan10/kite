import React from "react";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SortableButton.css";

class SortableButton extends React.Component {
  render() {
    return (
      <button className="sortable-button" onClick={this.props.onClick}>
        <h3>{this.props.name}</h3>
        <FontAwesomeIcon icon={faSort} className={"header-button-sort-icon"} />
      </button>
    );
  }
}

export default SortableButton;
