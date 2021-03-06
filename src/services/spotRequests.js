// https://www.pluralsight.com/guides/fetching-data-updating-state-react-class
// Requests for the "spot" API endpoint //////////

import config from "./config";

// GET /spot
function fetchSpots(onFullfilled) {
  // Get spots list from the API
  const API_ENDPOINT = config.API_ENDPOINT + "/spot";
  fetch(API_ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }

      return response.json();
    })
    .then((data) => onFullfilled(data))
    .catch((err) => console.log("Error at fetching data: ", err));
}

export default fetchSpots;
