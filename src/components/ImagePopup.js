import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    //Если мы получили значение имени и ссылки карточки, то можно открыть popup
    <div className={`popup popup_type_pic ${!!card.name && !!card.link ? 'popup_is-opened' : ''}`}>
      <div className="popup__container-pic">
        <button className="popup__button-close" onClick={onClose} type="button" aria-label="Закрыть"></button>
        <img className="popup__pic" src={card.link} alt={card.name} />
        <h2 className="popup__title-pic">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
