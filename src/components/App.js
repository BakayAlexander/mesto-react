import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import BouncingLoader from '../utils/BouncingLoader';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [isRendering, setIsRendering] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [deleteCardId, setDeleteCardId] = React.useState();
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

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
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
    setIsImagePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
  }

  //Ф-я принимает на вход объект с данными и на основе них отправляет PATCH запрос к api. Объявляем ее тут, а потом передаем в EditProfilePopup прокидывая через пропс. Затем из EditProfilePopup прокидываем ее в PopupWithForm, чтобы все запускалось при сабмите формы.
  function handleUpdateUser({ name, about }) {
    setIsSubmitting(true);
    api
      .editProfile(name, about)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
        setIsSubmitting(false);
      })
      .catch((err) => {
        alert(`Возникла ошибка: ${err}`);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    setIsSubmitting(true);
    api
      .editAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
        setIsSubmitting(false);
      })
      .catch((err) => {
        alert(`Возникла ошибка: ${err}`);
      });
  }

  //Большой блок работы с карточками. Тут используем технику поднятия стейта, чтобы прокинуть все в нижестоящие компоненты

  React.useEffect(() => {
    api
      .getCardsData()
      .then((data) => {
        setCards(data);
      })
      .then(() => {
        setIsRendering(false);
      })
      .catch((err) => {
        alert(`Возникла ошибка: ${err}`);
      });
  }, []);

  //Добавляем ф-ю постановки like на карточки
  function handleCardLike(id, isLiked) {
    api
      .changeLikeCardStatus(id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((card) => (card._id === id ? newCard : card)));
      })
      .catch((err) => {
        alert(`Возникла ошибка: ${err}`);
      });
  }

  //Ф-я добавления новой карточки
  function handleAddPlaceSubmit({ name, link }) {
    setIsSubmitting(true);
    api
      .addNewCard(name, link)
      //обновляем стейт с помощью расширеной копии существуещего массива стейта, используем для этого spread-оператор
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
        setIsSubmitting(false);
      })
      .catch((err) => {
        alert(`Возникла ошибка: ${err}`);
      });
  }

  //Добавляем ф-ю удаления собственных карточек, ее прокидываем в DeleteCardPopup. В качестве id будем использовать стейт-переменную deleteCardId, которую прокидываем в тот же компонент.
  function handleCardDelete(id) {
    setIsSubmitting(true);
    api
      .deleteCard(id)
      .then(() => {
        const arr = cards.filter((card) => card._id !== id);
        setCards(arr);
        closeAllPopups();
        setIsSubmitting(false);
      })
      .catch((err) => {
        alert(`Возникла ошибка: ${err}`);
      });
  }

  //Работаем c popup удаления карточек. Вначале устанавливаем стейт для открытия DeleteCardPopup. Потом меняем значение стейт-переменной deleteCardId. Все это передаем в компонент Main, где прокинем дальше в компонент Card.
  function handleDeleteCardClick(cardId) {
    setIsDeleteCardPopupOpen(!isDeleteCardPopupOpen);
    setDeleteCardId(cardId);
  }

  return (
    <div className="page__container-global">
      {/* Подписываем компоненты на контекст текущего пользователя */}
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        {isRendering ? (
          <BouncingLoader />
        ) : (
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteCardClick}
          />
        )}
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isSubmitting={isSubmitting}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isSubmitting={isSubmitting}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isSubmitting={isSubmitting}
        />
        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
          //Используем стейт, чтобы передать id удаляемой карточки
          cardId={deleteCardId}
          isSubmitting={isSubmitting}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
