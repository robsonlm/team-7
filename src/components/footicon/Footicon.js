import React from "react";
import { Link } from "react-router-dom";
import "./Footicon.scss";

export default function Footicon({ icon, label, link, white }) {
  return (
    <div className="footerIcon">
      <Link to={link}>
        <img src={icon} alt="footer"></img>
        <p className={`footerIcon__label ${white}`}>{label}</p>
      </Link>
    </div>
  );
}
