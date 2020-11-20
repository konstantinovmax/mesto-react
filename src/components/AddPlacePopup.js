import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const nameInput = React.useRef();
    const descriptionInput = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: nameInput.current.value,
            description: descriptionInput.current.value
        });
    } 

    return (
        <PopupWithForm isOpen={props.isOpen} name="add-element" title="Новое место" onClose={props.onClose} onSubmit={handleSubmit}>
            <input ref={nameInput} id="name-input" name="name" type="text" className="modal__input modal__input_type_place" required="required" placeholder="Название" minLength="1" maxLength="30" />
            <span id="name-input-error" className="modal__input-error" />
            <input ref={descriptionInput} id="description-input" name="description" type="url" className="modal__input modal__input_type_url" required="required" placeholder="Ссылка на картинку" />
            <span id="description-input-error" className="modal__input-error" />
        </PopupWithForm>
    );
}

export default AddPlacePopup;