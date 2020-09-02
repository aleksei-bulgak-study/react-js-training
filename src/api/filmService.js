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
}) => {
  return `${url}/${path}?search=${query}&searchBy=${searchBy}&limit=${limit}&offset=${offset}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
};

export const getFilms = ({
  query,
  searchBy = 'title',
  limit = 20,
  offset = 0,
  sortBy,
  sortOrder = 'asc',
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
