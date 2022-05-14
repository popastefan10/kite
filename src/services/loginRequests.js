// Requests for the "login" API endpoint /////////

import config from "./config";

// POST /login
function postLogin(onFullfilled) {
  // Simulate login
  const API_ENDPOINT = config.API_ENDPOINT + "/login";
  fetch(API_ENDPOINT, { method: "POST" })
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

export default postLogin;
