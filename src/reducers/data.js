//Reducer y acciones
function data (state, action) {
	switch (action.type) {
		case 'SEARCH_VIDEO': {
			let results = []
			action.payload.query && (
		        state.data.categories.map(category => {
		            category.playlist.map(item => {
		                if(item.title.toLowerCase().includes(action.payload.query.toLowerCase()) || item.author.toLowerCase().includes(action.payload.query.toLowerCase())){
		                    results.push(item)
		                }
		            })
		        })
	        )
	        return {
	        	...state,
	        	search:results
	        }
		}
		default:
			return state
	}
}
export default data;