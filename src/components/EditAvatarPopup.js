import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ onUpdateAvatar, isOpen, onClose }) => {
  const avatarInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatarName: avatarInput.current.value,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="add-avatar"
      title="Обновить аватар"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarInput}
        id="avatar-input"
        name="avatarName"
        type="url"
        className="modal__input modal__input_type_url"
        required
        placeholder="Ссылка на картинку"
      />
      <span id="avatar-input-error" className="modal__input-error" />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
