import React from "react";
import Title from "./Title";
import AddSpotButton from "./AddSpotButton";
import Avatar from "./Avatar";

import "./Header.css";

class Header extends React.Component {
  render() {
    let titleStyle = {
      fontSize: "200%"
    }

    return (
      <header>
        <div className={"header-left"}>
          <Title className={"header-button"} style={titleStyle}/>
        </div>
        <div className={"header-right"}>
          <AddSpotButton className={"header-button"}/>
          <Avatar className={"header-button"}/>
        </div>
      </header>
    );
  }
}

export default Header;