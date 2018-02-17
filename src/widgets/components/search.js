import React from 'react';
import './search.css';
// function Search(props){
// 	return(

// 	)
// }
//ref sirve para referenciar un elemento html en react
const Search = (props) => (
	<form 
		onSubmit={props.handleSubmit}
		className="Search"
	>
		<input 
			ref={props.setRef}
			type="text" 
			className="Search-input"
			placeholder="Buscar a un artista, tema o amigo"
			name="search"
			onChange={props.handleChange}
			value={props.value}
		/>
	</form>
)

export default Search;