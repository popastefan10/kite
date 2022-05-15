import React from "react";
import "./Title.css"

// Title of the site displaying "Kite"
class Title extends React.Component {
  render() {
    let className = (this.props.className || "") + " title";

    return (
      <div className={className} style={this.props.style}>
        <p>Kite</p>
      </div>
    );
  }
}

export default Title;