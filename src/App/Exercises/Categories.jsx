import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactIcon } from '../Components/Icons/ReactIcon';
import { JS } from '../Components/Icons/JS';
import { Html } from '../Components/Icons/Html';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h2>Kategorie:</h2>
        <div className="exercises-name">
          <NavLink to="html-css">
            <Html />
            HTML & CSS{' '}
          </NavLink>
          <NavLink to="js">
            <JS />
            JS
          </NavLink>
          <NavLink to="react">
            <ReactIcon />
            React
          </NavLink>
        </div>
      </div>
    </>
  );
};
