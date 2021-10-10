import { mainApiUrl } from './constants';

const checkResponse = (response) =>
  response.ok ? response.json() : Promise.reject(getError(response.status));

// `ошибка: ${response.status === 409 ? 'email уже существует.' : response.status}`

const getError = (status) => {
  if (status === 400) {
    return 'ошибка авторизации.';
  }
  if (status === 404) {
    return 'ошибка сервера, повторите попытку позднее.';
  }
  if (status === 409) {
    return 'email уже существует.';
  }
  return `код ошибки: ${status}`;
};

export const register = (name, email, password) => {
  return fetch(`${mainApiUrl}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${mainApiUrl}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const getUser = (token) => {
  return fetch(`${mainApiUrl}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
