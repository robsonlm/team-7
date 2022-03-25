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
        <article className="match-results__wrapper">
          {matchResults.length == 0 && (
            <h1 className="match-results__title">No matches found</h1>
          )}
          {matchResults.length == 1 && (
            <h1 className="match-results__title">1 match found</h1>
          )}
          {matchResults.length > 1 && (
            <h1 className="match-results__title">
              {matchResults.length} matches found
            </h1>
          )}
          <Link className="match-results__back" to="/">
            <img
              className="match-results__back-icon"
              src={backSVG}
              alt="Return"
            />
          </Link>
          <div className="match-results__cards">
            {matchResults.map((match) => (
              <MatchesCard key={match.id} match={match} {...renderProps} />
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default FindMatch;
