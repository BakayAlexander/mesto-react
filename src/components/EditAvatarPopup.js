import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = React.useState();
  //Для получения доступа к input используем хук
  const inputRef = React.useRef({});

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }
  // Передаем функцию onUpdateAvatar которая пошлет запрос к api с текущим состояниям ref, т.е. возьмет значение из input и пробросит в App.js, где находится обращение к api
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      button="Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__inputs">
        <input
          className="popup__input popup__input_type_avatar"
          id="type_avatar"
          type="url"
          placeholder="Ссылка на аватар"
          name="link"
          required
          minLength="2"
          maxLength="200"
          autoComplete="off"
          ref={inputRef}
          onChange={handleChangeAvatar}
          //Прописываем выбор или, чтобы в консоль не падало предупреждение о ошибке
          value={avatar || ''}
        />
        <span className="popup__input-error popup__input-error_type_avatar"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
