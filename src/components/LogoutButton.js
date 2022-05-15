import React from "react";

// Logout button displayed on the header of the Dashboard page
class LogoutButton extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <button
          onClick={(e) => this.props.onLogout()}
          style={{ position: "relative" }}
        >
          <span>Logout</span>
        </button>
      </div>
    );
  }
}

export default LogoutButton;
