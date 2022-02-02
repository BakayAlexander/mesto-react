import React from 'react';
import editButton from '../images/edit_button.svg';
import addButton from '../images/add_button.svg';
import Card from './Card';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  //Подписка на контекст текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getCardsData()
      .then((data) => {
        setCards(data);
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

  //Добавляем ф-ю удаления собственных карточек
  function handleCardDelete(isOwn, id) {
    if (isOwn) {
      api
        .deleteCard(id)
        .then(() => {
          const arr = cards.filter((card) => card._id !== id);
          setCards(arr);
        })
        .catch((err) => {
          alert(`Возникла ошибка: ${err}`);
        });
    }
  }

  return (
    <main className="content">
      <section className="profile page__container-profile">
        <div className="profile__container">
          <div className="profile__pic-container">
            <button
              className="profile__pic-button"
              onClick={onEditAvatar}
              type="button"
              aria-label="Редактировать"
            >
              <img src={currentUser?.avatar ?? ' '} alt="Фото профиля" className="profile__pic" />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{currentUser?.name ?? '... getting data'}</h1>
              <button
                className="profile__edit-button"
                onClick={onEditProfile}
                type="button"
                aria-label="Редактировать"
              >
                <img src={editButton} alt="Кнопка Редактировать" className="profile__edit-pic" />
              </button>
            </div>
            <p className="profile__description">{currentUser?.about ?? '... getting data'}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить карточку"
        >
          <img src={addButton} alt="Кнопка Добавления" className="profile__add-pic" />
        </button>
      </section>
      <section className="elements page__container-elements">
        {/* Сюда добавляем карточки. Нужно пройтись по массиву с карточками, сразу делаем деструктуризацию. Отдельно пробрасываем id, а все остальные пропсы собираем spread-оператором   */}
        {cards.map(({ _id, ...props }) => (
          <Card
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            key={_id}
            id={_id}
            {...props}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
