import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Character.scss";
import SVGStar from "../assets/static/icons/star.svg";
import CharacterDetail from "./CharacterDetail";
import Modal from "./Model";
import useModal from "../custom-hooks/useModal";

const Character = (props) => {
  const { modal, handleCloseModal, handleOpenModal } = useModal();
  const [favorite, setFavorite] = useState(false);
  const { data, favoriteCharacters } = props;
  const { id, img_url, name, status, species, gender } = data;

  useEffect(() => {}, []);

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true);
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
    setFavorite(false);
  };

  const isFavorite = () => {
    const result = favoriteCharacters.filter(
      (favoriteCharacters) => favoriteCharacters.data.id === id
    );
    if (result.length) {
      setFavorite(true);
    }
  };

  useEffect(() => {
    isFavorite();
  }, []);

  return (
    <div className="character">
      <img className="character__img" src={img_url} alt="Character" />
      <div className="character__details">
        <h2 className="character__details_name">{name}</h2>
        {favorite ? (
          <SVGStar
            onClick={() => handleDeleteFavorite(id)}
            className="character__details-star favorite"
          />
        ) : (
          <SVGStar
            onClick={handleSetFavorite}
            className="character__details-star noFavorite"
          />
        )}
        <p className="character__details__item">
          <span className="character__details__item-type">Status:</span>{" "}
          {status}
        </p>
        <p className="character__details__item">
          <span className="character__details__item-type">Species:</span>{" "}
          {species}
        </p>
        <p className="character__details__item">
          <span className="character__details__item-type">Gender:</span>{" "}
          {gender}
        </p>
        <p onClick={handleOpenModal} className="character__details__item-more">
          More Details....
        </p>
      </div>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetail data={data} />
      </Modal>
    </div>
  );
};

//propsTypes
Character.propTypes = {
  data: propTypes.object,
  name: propTypes.string,
  statu: propTypes.string,
  species: propTypes.string,
  gender: propTypes.string,
  abilities: propTypes.array,
  alias: propTypes.array,
};

//redux functions
const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
