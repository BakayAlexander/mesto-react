import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Card from './Card';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  // const [selectedCard, ]

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="page__container-global">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        button="Сохранить"
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
      >
        <fieldset className="popup__inputs">
          <input
            className="popup__input popup__input_type_name"
            id="type_name"
            type="text"
            name="fullname"
            value=""
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
          />
          <span className="popup__input-error popup__input-error_type_name"></span>
          <input
            className="popup__input popup__input_type_description"
            id="type_description"
            type="text"
            name="description"
            value=""
            required
            minLength="2"
            maxLength="200"
            autoComplete="off"
          />
          <span className="popup__input-error popup__input-error_type_description"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Новое место"
        button="Создать"
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
      >
        <fieldset className="popup__inputs">
          <input
            className="popup__input popup__input_type_image-name"
            id="type_image-name"
            type="text"
            name="name"
            value=""
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
            autoComplete="off"
          />
          <span className="popup__input-error popup__input-error_type_image-name"></span>
          <input
            className="popup__input popup__input_type_image-url"
            id="type_image-url"
            type="url"
            name="link"
            value=""
            placeholder="Ссылка на картинку"
            required
            autoComplete="off"
          />
          <span className="popup__input-error popup__input-error_type_image-url"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
      >
        <fieldset className="popup__inputs">
          <input
            className="popup__input popup__input_type_avatar"
            id="type_avatar"
            type="url"
            placeholder="Ссылка на аватар"
            name="link"
            value=""
            required
            minLength="2"
            maxLength="200"
            autoComplete="off"
          />
          <span className="popup__input-error popup__input-error_type_avatar"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="card-delete"
        title="Вы уверены?"
        button="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>
    </div>
  );
}

export default App;
