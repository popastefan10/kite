import React from "react";
import SortableButton from "./SortableButton";
import "./Table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  getTableHeading() {
    return (
      <tr>
        <th>
          <SortableButton name={"Name"} />
        </th>
        <th>
          <SortableButton name={"Country"} />
        </th>
        <th>
          <SortableButton name={"Latitude"} />
        </th>
        <th>
          <SortableButton name={"Longitude"} />
        </th>
        <th>
          <SortableButton name={"Wind Prob."} />
        </th>
        <th>
          <SortableButton name={"When to go"} />
        </th>
      </tr>
    );
  }

  getTableRows() {
    let tableRows = this.props.spots.map((spot) => (
      <tr key={spot.id}>
        <td>{spot.name}</td>
        <td>{spot.country}</td>
        <td>{parseFloat(spot.lat).toFixed(2)}</td>
        <td>{parseFloat(spot.long).toFixed(2)}</td>
        <td>{`${spot.probability}%`}</td>
        <td>{spot.month}</td>
      </tr>
    ));

    return tableRows;
  }

  render() {
    let tableHeading = this.getTableHeading();
    let tableRows = this.getTableRows();

    return (
      <div className={"table-container"} style={this.props.style}>
        <table className="sortable">
          <thead>{tableHeading}</thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
