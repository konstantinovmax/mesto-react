import React from 'react';

const editAvatarData = (
    <>
        <input id="avatar-input" name="avatarName" type="url" className="modal__input modal__input_type_url" required="required" placeholder="Ссылка на картинку" />
        <span id="avatar-input-error" className="modal__input-error"></span>
    </>
);

const editProfileData = (
    <>
        <input id="name-input" name="name" type="text" className="modal__input modal__input_type_name" required="required" placeholder="Введите имя" minLength="2" maxLength="40" />
        <span id="name-input-error" className="modal__input-error"></span>
        <input id="description-input" name="description" type="text" className="modal__input modal__input_type_description" required="required" placeholder="Введите описание" minLength="2" maxLength="200" />
        <span id="description-input-error" className="modal__input-error"></span>
    </>
)

const addElementData = (
    <>
        <input id="name-input" name="name" type="text" className="modal__input modal__input_type_place" required="required" placeholder="Название" minLength="1" maxLength="30" />
        <span id="name-input-error" className="modal__input-error"></span>
        <input id="description-input" name="description" type="url" className="modal__input modal__input_type_url" required="required" placeholder="Ссылка на картинку" />
        <span id="description-input-error" className="modal__input-error"></span>
    </>
)

export { editAvatarData, editProfileData, addElementData }