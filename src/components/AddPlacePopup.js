import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ onAddPlace, isOpen, onClose }) => {
  const [placeName, setPlaceName] = useState("");
  const [placeUrl, setPlaceUrl] = useState("");

  const handlePlaceNameChange = (e) => {
    setPlaceName(e.target.value);
  };

  const handlePlaceUrlChange = (e) => {
    setPlaceUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: placeName,
      description: placeUrl,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="add-element"
      title="Новое место"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        name="name"
        type="text"
        className="modal__input modal__input_type_place"
        required
        value={placeName}
        onChange={handlePlaceNameChange}
        placeholder="Название"
        minLength={10}
        maxLength={30}
      />
      <span id="name-input-error" className="modal__input-error" />
      <input
        id="description-input"
        name="description"
        type="url"
        className="modal__input modal__input_type_url"
        required
        value={placeUrl}
        onChange={handlePlaceUrlChange}
        placeholder="Ссылка на картинку"
      />
      <span id="description-input-error" className="modal__input-error" />
    </PopupWithForm>
  );
};

export default AddPlacePopup;
