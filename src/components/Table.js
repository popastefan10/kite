import React from "react";
import SortableButton from "./SortableButton";
import "./Table.css";

// The actual table used in LocationTable component
class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnSorted: null, // Which column is sorted
      sortAscending: true, // How this column is sorted
    };
  }

  // When you click on a column header it will sort the entire table with respect to this column
  handleHeaderButtonClick(columnName) {
    return () => {
      this.setState((state, props) => {
        if (state.columnSorted == columnName)
          return { sortAscending: !state.sortAscending };
        return { columnSorted: columnName, sortAscending: true };
      });
    };
  }

  // Filters only the spots which contain in their name the text from the search bar
  // It's not case-sensitive
  filterSpotsByName(spots, includeStr) {
    return spots.filter((spot) => spot.name.toLowerCase().includes(includeStr.toLowerCase()));
  }

  // Sorts the spot object with respect to a column from the table
  sortSpotsByColumn(spots, columnName, sortAscending) {
    // Object that contains compare functions for every column
    // Key: column name
    // Value: function used to compare a column's contents
    let compareFunctions = {
      Name: (spotA, spotB) =>
        spotA.name.localeCompare(spotB.name) * (sortAscending ? 1 : -1),
      Country: (spotA, spotB) =>
        spotA.country.localeCompare(spotB.country) * (sortAscending ? 1 : -1),
      Latitude: (spotA, spotB) =>
        (spotA.lat - spotB.lat) * (sortAscending ? 1 : -1),
      Longitude: (spotA, spotB) =>
        (spotA.long - spotB.long) * (sortAscending ? 1 : -1),
      "Wind Prob.": (spotA, spotB) =>
        (spotA.probability - spotB.probability) * (sortAscending ? 1 : -1),
      // https://stackoverflow.com/questions/13566552/easiest-way-to-convert-month-name-to-month-number-in-js-jan-01
      "When to go": (spotA, spotB) =>
        (new Date(Date.parse(`${spotA.month} 1, 2022`)).getMonth() -
          new Date(Date.parse(`${spotB.month} 1, 2022`)).getMonth()) *
        (sortAscending ? 1 : -1),
    };

    return spots.sort((spotA, spotB) =>
      compareFunctions[columnName](spotA, spotB)
    );
  }

  // Returns the table's header
  getTableHeading() {
    let tableColumnNames = [
      "Name",
      "Country",
      "Latitude",
      "Longitude",
      "Wind Prob.",
      "When to go",
    ];

    return (
      <tr>
        {tableColumnNames.map((columnName) => {
          let columnSortState = "default";
          if (this.state.columnSorted == columnName)
            columnSortState = this.state.sortAscending
              ? "ascending"
              : "descending";

          return (
            <th key={columnName}>
              <SortableButton
                name={columnName}
                onClick={this.handleHeaderButtonClick(columnName)}
                sortState={columnSortState}
              />
            </th>
          );
        })}
      </tr>
    );
  }

  // Returns a list of table rows for every spot
  getTableRows() {
    let spots = this.props.spots;

    // Filter spots by name
    spots = this.filterSpotsByName(spots, this.props.nameSearched);

    // Check if table is sorted by any column
    if (this.state.columnSorted)
      spots = this.sortSpotsByColumn(
        spots,
        this.state.columnSorted,
        this.state.sortAscending
      );

    let tableRows = spots.map((spot) => (
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
