import React from "react";
import Title from "./Title";
import AddSpotButton from "./AddSpotButton";
import Avatar from "./Avatar";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Title />
        <AddSpotButton />
        <Avatar />
      </header>
    );
  }
}

export default Header;