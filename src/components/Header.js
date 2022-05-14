import React from "react";
import Title from "./Title";
import AddSpotButton from "./AddSpotButton";
import LogoutButton from "./LogoutButton";
import Avatar from "./Avatar";

import "./Header.css";

class Header extends React.Component {
  getUserAvatarURL() {
    if (!this.props.userData || !this.props.userData.avatar)
      return "./images/guest_profile_picture.png";
    return this.props.userData.avatar;
  }

  render() {
    let titleStyle = {
      fontSize: "200%",
    };
    let userAvatarURL = this.getUserAvatarURL();

    return (
      <header>
        <div className={"header-left"}>
          <Title className={"header-section"} style={titleStyle} />
        </div>
        <div className={"header-right"}>
          <AddSpotButton className={"header-section"} />
          <LogoutButton
            className={"header-section"}
            onLogout={this.props.onLogout}
          />
          <Avatar className={"header-section"} userAvatarURL={userAvatarURL} />
        </div>
      </header>
    );
  }
}

export default Header;
