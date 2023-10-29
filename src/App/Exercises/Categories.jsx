import React from 'react';
import { NavLink } from 'react-router-dom';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h2>Kategorie:</h2>
        <div className="exercises-name">
          <NavLink to="html-css">HTML & CSS - lista ćwiczeń</NavLink>
          <NavLink to="js">JS - lista ćwiczeń</NavLink>
          <NavLink to="react">React - lista ćwiczeń</NavLink>
        </div>
      </div>
    </>
  );
};
