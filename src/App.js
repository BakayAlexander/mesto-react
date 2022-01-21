import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page__container-global">
        <header className="header page__container-header">
          <img className="header__logo" src="<%=require('./images/logo.svg')%>" alt="Логотип проекта" />
        </header>
        <main className="content">
          <section className="profile page__container-profile">
            <div className="profile__container">
              <div className="profile__pic-container">
                <button className="profile__pic-button" type="button" aria-label="Редактировать">
                  <img src=" " alt="Фото профиля" className="profile__pic" />
                </button>
              </div>
              <div className="profile__info">
                <div className="profile__name-container">
                  <h1 className="profile__name"></h1>
                  <button className="profile__edit-button" type="button" aria-label="Редактировать">
                    <img
                      src="<%=require('./images/edit_button.svg')%>"
                      alt="Кнопка Редактировать"
                      className="profile__edit-pic"
                    />
                  </button>
                </div>
                <p className="profile__description"></p>
              </div>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить">
              <img src="<%=require('./images/add_button.svg')%>" alt="Кнопка Добавления" className="profile__add-pic" />
            </button>
          </section>
          <section className="elements page__container-elements"></section>
        </main>
        <footer className="footer page__container-footer">
          <p className="footer__content">&copy; 2021 Mesto Russia</p>
        </footer>
        <div className="popup popup_type_edit">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="form-edit" className="popup__form" novalidate>
              <fieldset className="popup__inputs">
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
              </fieldset>
              <button className="popup__button-save" type="submit">
                Сохранить
              </button>
            </form>
            <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <div className="popup popup_type_card">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <form name="form-card" className="popup__form" novalidate>
              <fieldset className="popup__inputs">
                <input
                  className="popup__input popup__input_type_image-name"
                  id="type_image-name"
                  type="text"
                  name="name"
                  value=""
                  placeholder="Название"
                  required
                  minlength="2"
                  maxlength="30"
                  autocomplete="off"
                />
                <span className="popup__input-error popup__input-error_type_image-name"></span>
                <input
                  className="popup__input popup__input_type_image-url"
                  id="type_image-url"
                  type="url"
                  name="link"
                  value=""
                  placeholder="Ссылка на картинку"
                  required
                  autocomplete="off"
                />
                <span className="popup__input-error popup__input-error_type_image-url"></span>
              </fieldset>
              <button className="popup__button-save" type="submit">
                Создать
              </button>
            </form>
            <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <div className="popup popup_type_pic">
          <div className="popup__container-pic">
            <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
            <img className="popup__pic" src=" " alt=" " />
            <h2 className="popup__title-pic"></h2>
          </div>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="form-avatar" className="popup__form" novalidate>
            <fieldset className="popup__inputs">
              <input
                className="popup__input popup__input_type_avatar"
                id="type_avatar"
                type="url"
                placeholder="Ссылка на аватар"
                name="link"
                value=""
                required
                minlength="2"
                maxlength="200"
                autocomplete="off"
              />
              <span className="popup__input-error popup__input-error_type_avatar"></span>
            </fieldset>
            <button className="popup__button-save" type="submit">
              Сохранить
            </button>
          </form>
          <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup_type_card-delete">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="form-delete" className="popup__form" novalidate>
            <button className="popup__button-save" type="submit">
              Да
            </button>
            <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
          </form>
        </div>
      </div>
      <template className="element-template">
        <article className="element">
          <img className="element__pic" src=" " alt="Фотография добавленная пользователем" />
          <div className="element__container">
            <h2 className="element__name"></h2>
            <div className="element__like-container">
              <button className="element__like-button" type="button" aria-label="Отметить понравившимся"></button>
              <span className="element__like-count"></span>
            </div>
          </div>
          <button className="element__delete-button" type="button" aria-label="Удалить карточку"></button>
        </article>
      </template>
    </div>
  );
}

export default App;
