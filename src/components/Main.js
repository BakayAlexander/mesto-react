import React from 'react';
import editButton from '../images/edit_button.svg';
import addButton from '../images/add_button.svg';
import Card from './Card';
import api from '../utils/api';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api
      .getProfileData()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        alert(`Возникла ошибка: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    api
      .getCardsData()
      .then((data) => {
        setCards(
          data.map((item) => ({
            id: item._id,
            name: item.name,
            link: item.link,
            // onCardClick: onCardClick,
          }))
        );
      })
      .catch((err) => {
        alert(`Возникла ошибка: ${err}`);
      });
  }, []);

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
              <img src={userAvatar} alt="Фото профиля" className="profile__pic" />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                onClick={onEditProfile}
                type="button"
                aria-label="Редактировать"
              >
                <img src={editButton} alt="Кнопка Редактировать" className="profile__edit-pic" />
              </button>
            </div>
            <p className="profile__description">{userDescription}</p>
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
        {cards.map(({ id, ...props }) => (
          <Card onCardClick={onCardClick} key={id} {...props} />
        ))}
      </section>
    </main>
  );
}

export default Main;
