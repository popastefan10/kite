import { faPlus, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SpotInfoWindow.css";

class SpotInfoWindow extends React.Component {
  render() {
    let spot = this.props.spot;
    let displayValue = this.props.displayValue;

    return (
      <div
        className={"spot-info-window"}
        style={{ backgroundColor: "white", display: displayValue }}
      >
        <div className="siw-head">
          <div className={"siw-head-left"}>
            <h3 className="">{spot.name}</h3>
            <FontAwesomeIcon
              icon={faStar}
              size={"xs"}
              className={"siw-favorite-icon"}
            />
          </div>
          <div className={"siw-head-right"}>
            <button
              className={"transparent-button siw-close-button"}
              onClick={this.props.onInfoWindowClose}
            >
              <FontAwesomeIcon icon={faXmark} size={"sm"} />
            </button>
          </div>
        </div>

        <div className={"siw-body"}>
          <div className={"siw-country-container"}>
            <p>{spot.country}</p>
          </div>

          <div className="siw-info-list">
            <ul>
              <li>
                <h5>WIND PROBABILITY</h5>
                <p>{spot.probability}</p>
              </li>
              <li>
                <h5>LATITUDE</h5>
                <p>{spot.lat}</p>
              </li>
              <li>
                <h5>LONGITUDE</h5>
                <p>{spot.long}</p>
              </li>
              <li>
                <h5>WHEN TO GO</h5>
                <p>{spot.month}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={"siw-foot"}>
          <div>
            <button
              type="button"
              className={"siw-favorites-button siw-add-to-favorites-button"}
            >
              <FontAwesomeIcon
                icon={faPlus}
                size={"xs"}
                className={"siw-atf-btn-plus-icon"}
              />
              <p>ADD TO FAVORITES</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SpotInfoWindow;
