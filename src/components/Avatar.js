import React from "react";
import "./Avatar.css";

// User image displayed on Dashboard
class Avatar extends React.Component {
  render() {
    return (
      <div className={this.props.className + " avatar-container"}>
        <figure>
          <img src={this.props.userAvatarURL} alt="Avatar" className={"avatar-img"} />
        </figure>
      </div>
    );
  }
}

export default Avatar;
