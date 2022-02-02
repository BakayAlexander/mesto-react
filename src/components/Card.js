import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ name, link, likes, owner, onCardClick }) {
  function handleClick() {
    //пробрасываем значения в ImagePopup
    onCardClick({ name, link });
  }

  //Подписываем на контекст
  const currentUser = React.useContext(CurrentUserContext);

  //Достаем id пользователя создавшего карточку, используем это для идентификации своих и чужих карточек/лайков
  const isOwn = owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__delete-button ${!isOwn && 'element__delete-button_hidden'}`;

  //Определяем есть ли у карточки лайк поставленный текущим пользователем (т.е. нами)
  const isLiked = likes.some((i) => i._id === currentUser._id);
  const likeButtonClassName = `element__like-button ${isLiked && 'element__like-button_active'}`;
  return (
    <article className="element">
      <img className="element__pic" src={link} alt={name} onClick={handleClick} />
      <div className="element__container">
        <h2 className="element__name">{name}</h2>
        <div className="element__like-container">
          <button className={likeButtonClassName} type="button" aria-label="Отметить понравившимся"></button>
          <span className="element__like-count">{likes.length}</span>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить карточку"></button>
    </article>
  );
}

export default Card;
