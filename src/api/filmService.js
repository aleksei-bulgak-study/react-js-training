import axios from 'axios';

const baseUrl = process.env.REACT_APP_API || '';
const basePath = 'movies';

const buildRequestUrl = ({
  url,
  path,
  query,
  searchBy,
  limit,
  offset,
  sortBy,
  sortOrder,
  genre,
}) => {
  return `${url}/${path}?search=${query}&searchBy=${searchBy}&limit=${limit}&offset=${offset}&sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${genre}`;
};

export const getFilms = ({
  query,
  searchBy = 'title',
  limit = 20,
  offset = 0,
  sortBy,
  sortOrder = 'asc',
  genre,
}) => {
  const url = buildRequestUrl({
    url: baseUrl,
    path: basePath,
    query,
    searchBy,
    limit,
    offset,
    sortBy,
    sortOrder,
    genre,
  });
  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => ({
      films: data.data,
      offset: data.offset,
      total: data.totalAmount,
    }));
};

export const deleteFilm = (id) => {
  const url = buildRequestUrl({ url: baseUrl, path: `${basePath}/${id}` });
  return axios.delete(url);
};

export const addFilm = (data) => {
  const url = `${baseUrl}/${basePath}`;
  return axios.post(url, data).then((response) => response.data);
};

export const editFilm = (data) => {
  const url = `${baseUrl}/${basePath}`;
  return axios.put(url, data).then((response) => response.data);
};
