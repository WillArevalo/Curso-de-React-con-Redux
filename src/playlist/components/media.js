import React, { PureComponent } from 'react';
//Importamos un validador de datos en propiedades
import PropTypes from 'prop-types';
//Importando estilos
import './media.css';

//Cambiamos a nuestro componente por un componente puro que no sera 
//re-renderizado su recibe las mismas propiedades
class Media extends PureComponent {
	// Para utilizar el estado de los componentes y poder utilizar datos dinamicos inicializamos
	//los estados
	//seteamos los valores iniciales del estado
	// state = {
	// 	author: 'Will Arevalo',
	// } 
	//constructor con EMC6
	// constructor(props){
	// 	super(props)
	// 	this.handleClick = this.handleClick.bind(this);
	// }
	//Creamos la funcion que se ejecuta cuando sea click en el div
	handleClick = (event) => {
		//console.log(this.props.cover);
		// this.setState({
		// 	author: 'Ricardo Celis'
		// })
		//Con esto recojemos todos los props actuales
		this.props.openModal(this.props);
	}
	render(){
		return(
			//Creamos un escuchador de eventos con onClick
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image" src={this.props.cover} alt="" width={260} height={160}/>
					<h4 className="Media-title">{this.props.title}</h4>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		)
	}
}
//Le asignamos los proptypes a nuestro componente media
Media.proptypes = {
	cover: PropTypes.string,
	//Si quiero que mi parametro sea requerido
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	//Si quiero escojer entre un tipo u otro unicamnete
	type: PropTypes.oneOf(['video','audio']),
}

export default Media;