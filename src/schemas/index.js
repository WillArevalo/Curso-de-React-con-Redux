import api from '../api.json';
// Importando normalizr
import { normalize, schema } from 'normalizr';

// media (cada archivo de media sera una entidad mia)
// new schema.Entity('nombre que tendra(key)', definicion del esquema, opciones)
// si como queremos que se identifique un elemento del esquema no es con la caracteristica id
// se coloca idAttribute: 'nombre de la caracteristica id'
// Si queremos heredar un dato adicional del padre, por ejemplo el id de la categoria a la que
// pertenece el media para agregarlo al elemento media con:
// processStrategy: funcion(valor que tiene intermamente el elemento, padre, key del elemento)
const media = new schema.Entity('media', {}, {
	idAttribute: 'id',
	processStrategy: (value, parent, key) => ({
		...value,
		category:parent.id,
	})
})
// categoria
const category = new schema.Entity('categories', {
	//forma un array apartir de los medias
	playlist: new schema.Array(media)
})
// categorias
const categories = { categories: new schema.Array(category)}


//Al final obtenemos todo nuestro esquema normalizado
const normalizedData = normalize(api, categories);

export default normalizedData;