import React from 'react';
import profileAvatar from '../images/profile-avatar.png';

function handleEditAvatarClick() {
    document.querySelector('.modal_type_edit-avatar').classList.add('modal_is-open');
}

function handleEditProfileClick() {
    document.querySelector('.modal_type_edit-profile').classList.add('modal_is-open');
}

function handleAddPlaceClick() {
    document.querySelector('.modal_type_add-element').classList.add('modal_is-open');
}


function Main() {
    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={ profileAvatar } alt="Фотография Жака-Ива Кусто" onClick={ handleEditAvatarClick } />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-edit">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button type="button" className="profile__edit-button" onClick={ handleEditProfileClick }></button>
                        </div>
                        <p className="profile__description">Исследователь океана</p>
                    </div>           
                    <button type="button" className="profile__add-button" onClick={ handleAddPlaceClick }></button>
                </section>
                <section className="elements">              
                </section>
            </main>
        </>
    );
}

export default Main;