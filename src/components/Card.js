import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button_active" : "element__like-button"
  }`;

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? "element__delete_active" : "element__delete"
  }`;

  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <>
      <figure className="element" key={card._id}>
        <button
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        />
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <div className="element__caption-container">
          <h2 className="element__caption">{card.name}</h2>
          <div className="element__like-area">
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
            />
            <output className="element__like-numbers">
              {card.likes.length}
            </output>
          </div>
        </div>
      </figure>
    </>
  );
};

export default Card;
