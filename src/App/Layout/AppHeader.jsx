import React from 'react';

import './styles/header.css';
import { RoundImage } from '../Components/RoundImage/RoundImage';
import photo from '../Images/MG_CV.png';
import { Logo } from '../Components/Logo/Logo';
import settingsSvg from '../Images/setting.svg';
import arrowDownSvg from '../Images/toggle-arrow.svg';

export function AppHeader() {
  function handleClickButton(message) {
    console.log(message);
  }

  return (
    <header>
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-info">
        <button
          onClick={() => handleClickButton('I am settings button!')}
          className="header-settings-btn"
        >
          <img src={settingsSvg} alt="settings button" />
        </button>

        <div className="header-image-placeholder">
          <RoundImage src={photo} size="50px" />
        </div>

        <div className="header-personal-info">
          <p>Magda</p>
          <p>kursant</p>
        </div>

        <button
          onClick={() => handleClickButton('I am dropdown button!')}
          className="header-dropdown-btn"
        >
          <img src={arrowDownSvg} alt="dropdown button" />
        </button>
      </div>
    </header>
  );
}
