import React from "react";
import Title from "./Title";
import AddSpotButton from "./AddSpotButton";
import LogoutButton from "./LogoutButton";
import Avatar from "./Avatar";

import "./Header.css";

class Header extends React.Component {
  render() {
    let titleStyle = {
      fontSize: "200%",
    };

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
          <Avatar className={"header-section"} />
        </div>
      </header>
    );
  }
}

export default Header;
