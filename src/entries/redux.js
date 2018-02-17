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