const API_BASE_URL = "https://private-leagues-api.herokuapp.com";

const request = options => {
  options["headers"] = { "Content-Type": "application/json" };

  return fetch(options.url, options)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
};

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/api/login",
    method: "POST",
    body: JSON.stringify(loginRequest)
  });
}
