import React from 'react';
import BouncingLoader from '../utils/BouncingLoader';

function PopupWithForm({ name, title, button, onClose, children, isOpen, onSubmit, isSubmitting }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form name={`form-${name}`} className="popup__form" onSubmit={onSubmit}>
          {children}
          <button className="popup__button-save" type="submit">
            {!isSubmitting ? button : <BouncingLoader />}
          </button>
        </form>
        <button className="popup__button-close" type="button" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
