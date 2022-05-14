// Requests for the "user" API endpoint //////////

import config from "./config";

// GET /user/:id
function fetchUserWithId(userId) {
  // Get data related to the user with id given as parameter
  const API_ENDPOINT = config.API_ENDPOINT + `/user/${userId}`;
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

export default fetchUserWithId;