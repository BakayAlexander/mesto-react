import React from 'react';

function Card({ name, link, onCardClick }) {
  function handleClick() {
    //пробрасываем значения в ImagePopup
    onCardClick({ name, link });
  }
  return (
    <article className="element">
      <img className="element__pic" src={link} alt={name} onClick={handleClick} />
      <div className="element__container">
        <h2 className="element__name">{name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button" aria-label="Отметить понравившимся"></button>
          <span className="element__like-count"></span>
        </div>
      </div>
      <button className="element__delete-button" type="button" aria-label="Удалить карточку"></button>
    </article>
  );
}

export default Card;
