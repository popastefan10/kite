import { faPlus, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SpotInfoWindow.css";

class SpotInfoWindow extends React.Component {
  render() {
    let spot = this.props.spot;

    return (
      <div className={"spot-info-window"} style={{ backgroundColor: "white" }}>
        <div className="siw-head">
          <div className={"siw-head-left"}>
            <h4 className="">{spot.name}</h4>
            <FontAwesomeIcon
              icon={faStar}
              size={"xs"}
              className={"siw-favorite-icon"}
            />
          </div>
          <div className={"siw-head-right"}>
            <button className={"transparent-button siw-close-button"}>
              <FontAwesomeIcon icon={faXmark} size={"sm"} />
            </button>
          </div>
        </div>

        <div className={"siw-country-container"}>
          <p>{spot.country}</p>
        </div>

        <div className="siw-info-list">
          <ul>
            <li>
              <h6>Wind probability</h6>
              <p>{spot.probability}</p>
            </li>
            <li>
              <h6>Latitude</h6>
              <p>{spot.lat}</p>
            </li>
            <li>
              <h6>Longitude</h6>
              <p>{spot.long}</p>
            </li>
            <li>
              <h6>When to go</h6>
              <p>{spot.month}</p>
            </li>
          </ul>
        </div>

        <div className={"siw-favorites-button"}>
          <button type="button">
            <FontAwesomeIcon icon={faPlus} size={"xs"} />
            <span>Add to favorites</span>
          </button>
        </div>
      </div>
    );
  }
}

export default SpotInfoWindow;
