import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__wrapper">
          <ul className="nav__list">
            <li className="nav__item--active">
              <p className="nav__link--active">Recurring</p>
            </li>
            <li className="nav__item">
              <p className="nav__link">One Ride</p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
