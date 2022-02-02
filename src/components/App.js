import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getProfileData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        alert(`Возникла ошибка: ${err}`);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page__container-global">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        {/* <PopupWithForm
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
              placeholder="Имя"
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
              placeholder="Занятие"
              name="description"
              defaultValue=""
              required
              minLength="2"
              maxLength="200"
              autoComplete="off"
            />
            <span className="popup__input-error popup__input-error_type_description"></span>
          </fieldset>
        </PopupWithForm> */}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
