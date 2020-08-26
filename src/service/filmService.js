import axios from 'axios';

const baseUrl = process.env.REACT_APP_API || '';
const basePath = 'movies';

const buildRequestUrl = ({ url, path, query, searchBy, limit, page }) => {
  return `${url}/${path}?search=${query}&searchBy=${searchBy}&limit=${limit}&offset=${page}`;
};

export const getFilms = ({
  query,
  searchBy = 'title',
  limit = 13,
  page = 0,
}) => {
  const url = buildRequestUrl({
    url: baseUrl,
    path: basePath,
    query,
    searchBy,
    limit,
    page,
  });
  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => ({
      films: data.data,
      page: data.offset,
      total: data.totalAmount,
    }));
};

export const deleteFilm = (id) => {
  const url = buildRequestUrl({ url: baseUrl, path: `${basePath}/${id}` });
  return axios.delete(url);
};
