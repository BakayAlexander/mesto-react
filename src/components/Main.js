import React from 'react';
import editButton from '../images/edit_button.svg';
import addButton from '../images/add_button.svg';
import Card from './Card';
import api from '../utils/api';

function Main({ onEditProfile, onEditAvatar, onAddPlace }) {
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
          <Card key={id} {...props} />
        ))}
      </section>
      {/* !!!!!!!!!! */}
      <div className="popup popup_type_pic">
        <div className="popup__container-pic">
          <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
          <img className="popup__pic" src=" " alt=" " />
          <h2 className="popup__title-pic"></h2>
        </div>
      </div>
      {/* !!!!!!!!!!!!! */}
      {/* <template className="element-template">
        <article className="element">
          <img className="element__pic" src=" " alt="Фотография добавленная пользователем" />
          <div className="element__container">
            <h2 className="element__name"></h2>
            <div className="element__like-container">
              <button
                className="element__like-button"
                type="button"
                aria-label="Отметить понравившимся"
              ></button>
              <span className="element__like-count"></span>
            </div>
          </div>
          <button className="element__delete-button" type="button" aria-label="Удалить карточку"></button>
        </article>
      </template> */}
      {/* !!!!!!!!!!!! */}
    </main>
  );
}

export default Main;
