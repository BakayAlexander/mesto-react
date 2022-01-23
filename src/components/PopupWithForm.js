import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form name={`form-${props.name}`} className="popup__form" novalidate>
          {props.children}
          {/* <fieldset className="popup__inputs">
            <input
              className="popup__input popup__input_type_name"
              id="type_name"
              type="text"
              name="fullname"
              value=""
              required
              minlength="2"
              maxlength="40"
              autocomplete="off"
            />
            <span className="popup__input-error popup__input-error_type_name"></span>
            <input
              className="popup__input popup__input_type_description"
              id="type_description"
              type="text"
              name="description"
              value=""
              required
              minlength="2"
              maxlength="200"
              autocomplete="off"
            />
            <span className="popup__input-error popup__input-error_type_description"></span>
          </fieldset> */}
          <button className="popup__button-save" type="submit">
            {props.button}
          </button>
        </form>
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
