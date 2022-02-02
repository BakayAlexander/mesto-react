import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      button="Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <fieldset className="popup__inputs">
        <input
          className="popup__input popup__input_type_name"
          id="type_name"
          type="text"
          placeholder="Имя"
          name="fullname"
          defaultValue=""
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
        />
        <span className="popup__input-error popup__input-error_type_name"></span>
        <input
          className="popup__input popup__input_type_description"
          id="type_description"
          type="text"
          placeholder="Занятие"
          name="description"
          defaultValue=""
          required
          minLength="2"
          maxLength="200"
          autoComplete="off"
        />
        <span className="popup__input-error popup__input-error_type_description"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
