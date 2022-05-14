import React from "react";
import "./Title.css"

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