import React from "react";
import spots from "../mockapi_data/spot_get.json";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  getTableHeading() {
    return (
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Wind Prob.</th>
        <th>Where to go</th>
      </tr>
    );
  }

  getTableRows() {
    let tableRows = spots.map((spot) => (
      <tr key={spot.id}>
        <td>{spot.name}</td>
        <td>{spot.country}</td>
        <td>{spot.lat}</td>
        <td>{spot.long}</td>
        <td>{spot.probability}</td>
        <td>{spot.month}</td>
      </tr>
    ));

    return tableRows;
  }

  render() {
    let tableHeading = this.getTableHeading();
    let tableRows = this.getTableRows();

    return (
      <table>
        <thead>{tableHeading}</thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
  }
}

export default Table;
