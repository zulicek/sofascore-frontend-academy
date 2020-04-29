const API_BASE_URL = "https://private-leagues-api.herokuapp.com";

const request = options => {
  const opt = {...options}
  opt.headers = { "Content-Type": "application/json" };

  return fetch(options.url, opt)
    .then(response => {
      if (response.status === 204) return true;
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
};

export function postJson( url, postRequest) {
  return request({
    url: API_BASE_URL + url,
    method: "POST",
    body: JSON.stringify(postRequest)
  })
}