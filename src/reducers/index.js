//Agrupando todos los reducers

import data from './data';
import modal from './modal';
// Con combineReducers podemos combinar los diferentes reducers
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
    //Aqui colocamos nuestros reducers para combinarlos
    //data: data, es lo mismo que solo data gracias a emc6 y enhanced
    data,
    modal
})

export default rootReducer;