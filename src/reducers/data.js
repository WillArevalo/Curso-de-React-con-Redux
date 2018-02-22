//Reducer y acciones
function data (state, action) {
	switch (action.type) {
		case 'SEARCH_VIDEO': {
			const resultado = []
	        state.data.categories.map(category => {
	            category.playlist.map(item => {
	                if(item.title.toLowerCase().includes(action.payload.query.toLowerCase()) || item.author.toLowerCase().includes(action.payload.query.toLowerCase())){
	                    resultado.push(item)
	                }
	            })
	        })
	        return {
	        	...state,
	        	search:resultado
	        }
		}
		default:
			return state
	}
}
export default data;