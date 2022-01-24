import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page__container-global">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
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
            defaultValue=""
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
            defaultValue=""
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
            defaultValue=""
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
            defaultValue=""
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
            defaultValue=""
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
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
