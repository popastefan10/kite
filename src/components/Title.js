import React from "react";
import "./Title.css"

class Title extends React.Component {
  render() {
    let className = this.props.className + " title";

    return (
      <div className={className}>
        <p>Kite</p>
      </div>
    );
  }
}

export default Title;