import React from 'react';
import './styles.css';

export default () => (
  <section className="filter__list">
    <div className="filter__item filter__by-genre">
      <ul className="genre-filter">
        <li className="genre-filter__item">
          <a href="#">All</a>
        </li>
        <li className="genre-filter__item">
          <a href="#">Documentary</a>
        </li>
        <li className="genre-filter__item">
          <a href="#">Comedy</a>
        </li>
        <li className="genre-filter__item">
          <a href="#">Horror</a>
        </li>
        <li className="genre-filter__item">
          <a href="#">Crime</a>
        </li>
      </ul>
    </div>
    <div className="filter__item filter__by-date">
      <label htmlFor="date-filter" className="filter__by-date__title">
        Sort by
        <select id="date-filter" className="filter__by-date__select">
          <option className="filter__by-date__item" selected>
            RELEASE DATE
          </option>
        </select>
      </label>
    </div>
  </section>
);
