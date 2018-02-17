import React, { Component } from 'react';
import RegularError from '../components/regular-error.js'

class HandleError extends Component {
	state = {
		handleError:false,
	}
	componentDidCatch(error, info){
		this.setState({
			handleError: true,
		})
		//Envía este error a un servicio como Sentry
	}
	render() {
		if (this.state.handleError){
			return (
				//Se puede enviar un mensaje custom enviando la data desde aca
				<RegularError />
			)
		}
		//Si no se encuentra un error se pasa a su children
		return this.props.children
	}
}

export default HandleError;