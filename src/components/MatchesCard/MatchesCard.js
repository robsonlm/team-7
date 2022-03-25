import React from "react";
import starSVG from "../../assets/icons/star.svg";
import "./MatchesCard.scss";

const MatchesCard = ({ match, renderProps }) => {
  console.log(match.image);
  return (
    <section className="matches-card">
      <div className="matches-card__wrapper">
        <div className="matches-card__left">
          <div className="matches-card__image"></div>
        </div>
        <div className="matches-card__right">
          <div className="matches-card__top">
            <span className="matches-card__name">
              {match.name},{match.age}
            </span>
            <span className="matches-card__rating">{match.rating}</span>
            <img className="matches-card__rating-icon" src={starSVG} />
          </div>
          <div className="matches-card__bottom">
            <p className="matches-card__about">{match.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchesCard;
