import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';


class SearchContainer extends Component {
	state = {
		value: ''
	}
	//la funcion handleSubmit evita que la pagina se recargue
	handleSubmit = event => {
		event.preventDefault();
		console.log(this.input.value, 'submit');
		//Despachamos el elemento y le enviamos la accion y el payload al reducer
		this.props.dispatch({
			type:'SEARCH_VIDEO',
			payload: {
				query: this.input.value,
			}
		})
	}
	//La funcion setInputRef recoje el valor del input
	setInputRef = element => {
		this.input = element;
	}
	//handleInputChange permite cambiar el estado del valor del input
	handleInputChange = event => {
		this.setState({
			value: event.target.value.replace(' ', '-')
		})
	}
	render(){
		return(
			<Search 
				handleSubmit={this.handleSubmit}
				setRef={this.setInputRef}
				handleChange={this.handleInputChange}
				value={this.state.value}
			/>
		)
	}
}

export default connect()(SearchContainer);