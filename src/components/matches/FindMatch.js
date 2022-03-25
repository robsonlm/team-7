import React from "react";
import backSVG from "../../assets/icons/back-icon.svg";
import MatchesCard from "../MatchesCard/MatchesCard";
import "./FindMatch.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const FindMatch = ({ renderProps, matchResults }) => {
  console.log(matchResults);
  return (
    <>
      <section className="match-results">
        <Link className="match-results__back" to="/">
          <img
            className="match-results__back-icon"
            src={backSVG}
            alt="Return"
          />
        </Link>
        <article className="match-results__wrapper">
          <h1 className="match-results__offset1">Offset 10 hrs of Netflix</h1>
          <h2 className="match-results__offset2">by sharing this trip</h2>
          {matchResults.length == 0 && (
            <p className="match-results__title">No matches found</p>
          )}
          {matchResults.length == 1 && (
            <p className="match-results__title">1 match found</p>
          )}
          {matchResults.length > 1 && (
            <p className="match-results__title">
              {matchResults.length} matches found
            </p>
          )}

          <div className="match-results__cards">
            {matchResults.map((match) => (
              <Link to={`/profile/${match.id}`}>
                <MatchesCard key={match.id} match={match} {...renderProps} />
              </Link>
            ))}
          </div>
          <div className="match-results__map"></div>
        </article>
      </section>
    </>
  );
};

export default FindMatch;
