import { moviesApiUrl } from "./constants";

class Api {
  constructor({ address, headers }) {
    this._address = address;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getMoviesCards() {
    return fetch(`${this._address}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

}

export const moviesApi = new Api({
  address: moviesApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
