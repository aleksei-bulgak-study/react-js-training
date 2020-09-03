import { useEffect, useState } from 'react';

const useFilmsWithFilter = (results, filters) => {
  const [filteredResults, setFilteredResults] = useState(results);

  useEffect(() => {
    const { searchString, order, genre } = filters;
    const pattern = new RegExp(searchString);
    setFilteredResults(
      results
        .filter((film) => genre === null || film.genres.indexOf(genre) !== -1)
        .filter((film) => pattern.test(film.title.toLowerCase()))
        .sort((f, s) => {
          if (f[order] > s[order]) {
            return 1;
          }
          return -1;
        }),
    );
  }, [filters, results]);

  return filteredResults;
};

export default useFilmsWithFilter;
