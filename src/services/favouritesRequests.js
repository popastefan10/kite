// Requests for the "favourites" API endpoint /////////

import config from "./config";

// GET /favourites
function fetchFavourites(onFullfilled) {
  // Get favourite spots for current user
  const API_ENDPOINT = config.API_ENDPOINT + "/favourites";
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

export default fetchFavourites;