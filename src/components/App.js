import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { editAvatarData, editProfileData, addElementData }  from '../utils/utils.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState([]);
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard([]);
  }

   return (
    <>
      <div className="root">
        <div className="root__content">
            <Header />
            <Main
            onEditAvatar = { handleEditAvatarClick }
            onEditProfile = { handleEditProfileClick }
            onAddPlace = { handleAddPlaceClick }
            onCardClick = { handleCardClick }
            />
            <Footer />
            <PopupWithForm
            isOpen = { isEditAvatarPopupOpen }
            name="add-avatar"
            title="Обновить аватар"
            children = { editAvatarData }
            onClose = { closeAllPopups }
            />
            <PopupWithForm
            isOpen = { isEditProfilePopupOpen }
            name="edit-profile"
            title="Редактировать профиль"
            children = { editProfileData }
            onClose = { closeAllPopups }
            />
            <PopupWithForm
            isOpen = { isAddPlacePopupOpen }
            name="add-element"
            title="Новое место"
            children = { addElementData }
            onClose = { closeAllPopups }
            />
            <ImagePopup
            card = { selectedCard }
            onClose = { closeAllPopups }
            />          
        </div> 
      </div>
    </>
  );
}

export default App;
