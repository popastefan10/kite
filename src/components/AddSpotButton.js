import React from "react";
import "./AddSpotButton.css";

// "Add Spot" button displayed on Dashboard
class AddSpotButton extends React.Component {
  render() {
    let className = this.props.className;

    return (
      <div className={className}>
        <button>
          <span>Add Spot</span>
        </button>
      </div>
    );
  }
}

export default AddSpotButton;