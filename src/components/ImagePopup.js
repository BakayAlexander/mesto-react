import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_pic">
      <div className="popup__container-pic">
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        <img className="popup__pic" src=" " alt=" " />
        <h2 className="popup__title-pic"></h2>
      </div>
    </div>
  );
}

export default ImagePopup;
