import React from "react";
import "./Avatar.css";

class Avatar extends React.Component {
  render() {
    return (
      <div className={this.props.className + " avatar-container"}>
        <figure>
          <img src={"./images/guest_profile_picture.png"} alt="Avatar" className={"avatar-img"} />
        </figure>
      </div>
    );
  }
}

export default Avatar;
