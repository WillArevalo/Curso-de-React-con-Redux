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

//Referencio el elemento en donde estara vivo react
const homeContainer = document.getElementById('home-container');

//ReactDom.render(que voy a renderizar(elemento, o componente), o solo render() depende de como lo hallamos declarado donde lo haré(en que parte del dom));
//Le enviamos propiedades al componente
render(<Home data={data} />, homeContainer);
//En este punto ejecuto en cli el comando npm run build:prod