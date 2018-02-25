//Importo react y react-dom
import React from 'react';
//React sirve para crear los componentes
import { render } from 'react-dom';
//Reactdom para renderizar o colocar los componentes en el dom
import Home from '../pages/containers/home.js';
// import Contenido from './src/playlist/components/content.js';
//importo playlist que contiene media
// import data from '../api.json';
//importo la bd provisoria
//importo el schema normalizado
// import data from '../schemas/index';

//importamos el provider que nos ayuda a conectar redux con react
import { Provider } from 'react-redux';
//Importamos createstore para crear el store con redux
import { createStore } from 'redux';
//Importamos un reducer para que se encargue de gestionar los datos
// importamos el reducer que combina todos los otros
import reducer from '../reducers/index';

//debugeando la normalizada
// console.log(data);

// const initialState = {
//   // Cada key que encontremos en nuestro estado inicial debe ser un reducer y combinarlos
//   // Reducer 1(Data)
//   data: {
//     // ...data,
//     entities: data.entities,
//     categories: data.result.categories,
//     search: [],
//   },
//   // Reducer 2(Modal)
//   modal: {
//     visibility: false,
//     mediaId: null,
//   },
// }

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
// Provider es un componente de orden superior
render(
  <Provider store={store}>
    <Home/>
  </Provider>
, homeContainer);
