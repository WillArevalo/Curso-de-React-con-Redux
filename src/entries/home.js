//Importo react y react-dom
import React from 'react';
//React sirve para crear los componentes
import { render } from 'react-dom';
//Reactdom para renderizar o colocar los componentes en el dom
import Home from '../pages/containers/home.js';
// import Contenido from './src/playlist/components/content.js';
//importo playlist que contiene media
import data from '../api.json';
//importo la bd provisoria
import { Provider } from 'react-redux';

import { createStore } from 'redux';

const initialState = {
  data: {
    ...data
  }
}

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
// Provider es un componente de orden superior
render(
  <Provider store={store}>
    <p>hola mundo</p>
  </Provider>
, homeContainer);
