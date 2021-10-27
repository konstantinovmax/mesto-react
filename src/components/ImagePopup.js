const ImagePopup = ({ card, onClose }) => {
  return (
    <>
      <div
        className={`modal modal_type_picture ${card.link && "modal_is-open"}`}
      >
        <div className="modal__container_type-picture">
          <button
            type="reset"
            className="modal__close-button modal__close-button_type-picture"
            onClick={onClose}
          />
          <figure>
            <img className="modal__image" src={card.link} alt={card.name} />
            <figcaption className="modal__caption">{card.name}</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default ImagePopup;
