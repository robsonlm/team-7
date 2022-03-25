import React from "react";
import "./Profile.scss";

const Profile = (props) => {
  const profile = props.matchResults.find(
    (x) => x.id === props.match.params.id
  );
  console.log(profile);
  return (
    <section className="profile">
      <article className="profile__wrapper">
        <div className={`profile__top-${profile.id}`}>
          <h2 className="profile__name">{profile.name}</h2>
          <h2 className="profile__age">{profile.age} years old</h2>
          <div className="profile__button"></div>
        </div>
        <div className="profile__bottom">
          <div className="profile__bottom-top">
            <h2 className="profile__number">
              {profile.months}
              <p className="profile__number-desc">kg CO2 saved</p>
            </h2>
            <h2 className="profile__number">
              {profile.ridesShared}
              <p className="profile__number-desc">rides shared</p>
            </h2>
            <h2 className="profile__number">
              {profile.reviews}
              <p className="profile__number-desc">reviews</p>
            </h2>
          </div>
          <p className="profile__about">{profile.about}</p>
          <div className="profile__preferences-div">
            <p className="profile__preferences">
              rock climbing&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
              motorbikes&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; rock music
            </p>
            <p className="profile__preferences">
              rock travelling&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
              travelling&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; painting
            </p>
            <p className="profile__preferences">
              play station&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
              design&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; architecture
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
