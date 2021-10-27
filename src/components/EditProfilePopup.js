import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = ({ onUpdateUser, isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      description,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="edit-profile"
      title="Редактировать профиль"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        name="name"
        type="text"
        className="modal__input modal__input_type_name"
        required
        value={name}
        onChange={handleChangeName}
        placeholder="Введите имя"
        minLength={2}
        maxLength={40}
      />
      <span id="name-input-error" className="modal__input-error"></span>
      <input
        id="description-input"
        name="description"
        type="text"
        className="modal__input modal__input_type_description"
        required
        value={description}
        onChange={handleChangeDescription}
        placeholder="Введите описание"
        minLength={2}
        maxLength={200}
      />
      <span id="description-input-error" className="modal__input-error"></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
