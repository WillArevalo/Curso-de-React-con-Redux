import { createStore } from 'redux';

// console.log("Ola k ase");
// Esta funcion recoje lo de el form y lo manda a la consola
function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData($form);
	const title = data.get('title');
	console.log(title);
}

// el $ es a manera de convencion para referirme a un elemento en el dom
const $form = document.getElementById('form');
// $form.addEventListener('evento', funcion);
$form.addEventListener('submit', handleSubmit);

const initialState = [
	{
		"title": "Despacito",
	},
	{
		"title": "One more time",
	},
	{
		"title": "Echame la culpa",
	},
]
// Inicializo el store de redux
const store = createStore(
	(state) => state,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// imprimimos el estado de nuestro store para obtener las canciones
// Se puede obtener el estado del store con getState
const $container = document.getElementById('playlist');
const playlist = store.getState();
playlist.map((item) => {
	const template = document.createElement('p');
	template.textContent = item.title;
	$container.appendChild(template);
})

console.log(store.getState())