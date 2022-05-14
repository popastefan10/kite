// https://www.pluralsight.com/guides/fetching-data-updating-state-react-class

// Spot request: GET /spot
function fetchUsers(onFullfilled) {
  // Get spots list from the API
  const API_ENDPOINT = "https://627d27b8e5ac2c452afe3162.mockapi.io/spot";
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

export default fetchUsers;
