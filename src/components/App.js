import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="page__container-global">
      <Header />
      <Main />
      <Footer />
      {/* <PopupWithForm>
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
        </PopupWithForm> */}
    </div>
  );
}

export default App;
