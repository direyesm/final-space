import React from "react";
import "../assets/styles/components/CharacterDetail.scss";

const CharacterDetail = (props) => {
  const { data } = props;
  const { img_url, name, status, species, gender, hair, origin } = data;

  return (
    <div className="characterDetail">
      <img className="character-detail-img" src={img_url} alt="Character" />
      <div className="characterDetail__container">
        <h2 className="characterDetail-name">{name}</h2>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Status:</span> {status}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Species:</span> {species}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Gender:</span> {gender}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Hair:</span> {hair}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Origin:</span> {origin}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
