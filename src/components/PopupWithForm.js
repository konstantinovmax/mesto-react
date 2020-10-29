import React from 'react';

function PopupWithForm() {
    
    return (
        <>
            <div className="modal modal_type_edit-avatar">
                <form name="form1" action="#" className="modal__container modal__container_type_edit-avatar" novalidate>
                    <h2 className="modal__title">Обновить аватар</h2>
                    <input id="avatar-input" name="avatarName" type="url" className="modal__input modal__input_type_url" required="required" placeholder="Ссылка на картинку" />
                    <span id="avatar-input-error" className="modal__input-error"></span>
                    <button type="submit" className="modal__save-button">Сохранить</button>
                    <button type="reset" className="modal__close-button"></button>
                </form>
            </div>
            <div className="modal modal_type_edit-profile">
                <form name="form1" action="#" className="modal__container modal__container_type_edit-profile" novalidate>
                    <h2 className="modal__title">Редактировать профиль</h2>
                    <input id="name-input" name="name" type="text" className="modal__input modal__input_type_name" required="required" placeholder="Введите имя" minlength="2" maxlength="40" />
                    <span id="name-input-error" className="modal__input-error"></span>
                    <input id="description-input" name="description" type="text" className="modal__input modal__input_type_description" required="required" placeholder="Введите описание" minlength="2" maxlength="200" />
                    <span id="description-input-error" className="modal__input-error"></span>
                    <button type="submit" className="modal__save-button">Сохранить</button>
                    <button type="reset" className="modal__close-button"></button>
                </form>
            </div>
            <div className="modal modal_type_add-element">
                <form name="form1" action="#" className="modal__container modal__container_type_add-element" novalidate>
                    <h2 className="modal__title">Новое место</h2>
                    <input id="name-input" name="name" type="text" className="modal__input modal__input_type_place" required="required" placeholder="Название" minlength="1" maxlength="30" />
                    <span id="name-input-error" className="modal__input-error"></span>
                    <input id="description-input" name="description" type="url" className="modal__input modal__input_type_url" required="required" placeholder="Ссылка на картинку" />
                    <span id="description-input-error" className="modal__input-error"></span>
                    <button type="submit" className="modal__save-button">Сохранить</button>
                    <button type="reset" className="modal__close-button"></button>
                </form>
            </div>
            <div className="modal modal_type_delete-element">
                <form name="form1" action="#" className="modal__container modal__container_type_delete-element" novalidate>
                    <h2 className="modal__title">Вы уверены?</h2>
                    <button type="submit" className="modal__save-button">Да</button>
                    <button type="reset" className="modal__close-button"></button>
                </form>
            </div>
        </>
    );
}

export default PopupWithForm;