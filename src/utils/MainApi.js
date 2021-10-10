import { mainApiUrl } from './constants';

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

  getUser() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  updateUser(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._handleResponse);
  }

  getMovies() {
    return fetch(`${this._address}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  createMovie(data) {
    return fetch(`${this._address}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
      }),
    }).then(this._handleResponse);
  }

  removeMovie(id) {
    return fetch(`${this._address}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

export const mainApi = new Api({
  address: mainApiUrl,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
});
