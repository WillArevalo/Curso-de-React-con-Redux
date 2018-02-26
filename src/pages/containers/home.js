import React, { Component } from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/components/modal.js';
import HandleError from '../../error/containers/handle-error.js';
import VideoPlayer from '../../player/containers/video-player.js';
// Importamos conect para que react funcione con redux en el container
import { connect } from 'react-redux';
import { List as list } from 'immutable';

class Home extends Component {
	state = {
		modalVisible: false,
	}
	//Funcion de handleClick
	handleOpenModal = (media) => {
		this.setState({
			modalVisible: true,
			media

		})
	}
	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		})
	}
	// //Manejo de errores con componentDidCatch
	// //componentDidCatch(error, informacion acerca de el error)
	// componentDidCatch(err, info) {
	// 	this.setState({
	// 		handleError: true,
	// 	})
	// }
	render(){
		// //Comprobando que el componente sirve
		// if(this.state.handleError) {
		// 	return <p>Ohhh hay un error</p>
		// }
		return (
			<HandleError>
				<HomeLayout> 
					<Related />
					<Categories 
						categories={this.props.categories} 
						handleOpenModal={this.handleOpenModal}
						search={this.props.search}
					/>
					{
						this.state.modalVisible &&
						<ModalContainer>
							<Modal handleClick={this.handleCloseModal}>
								<VideoPlayer
									autoplay
									src={this.state.media.src}
									title={this.state.media.title}
								/>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)//Haciendo condicionales(ternarios) si es true con la && seguria al siguiente comando
	}
}
// Obteniendo categorias
function mapStateProps(state, props){
	//get es un metodo de immutableJS
	const categories = state.get('data').get('categories').map((categoryId) => {
		return state.get('data').get('entities').get('categories').get(categoryId)
	})
	let searchResults = list();
	const search = state.get('data').get('search');
	if(search) {
		const mediaList = state.get('data').get('entities').get('media');
		searchResults = mediaList.filter((item) => {
			if (item.get('author').toLowerCase().replace(' ', '-').includes(search.toLowerCase().replace(' ', '-')) || item.get('title').toLowerCase().replace(' ', '-').includes(search.toLowerCase().replace(' ', '-'))){
				return true
			}
		}).toList();
	}
	return {
		categories: categories,
		search: searchResults
	}
}
//Atraves de connect y mandando mapStateProps que es todo lo que se guardara del store
export default connect(mapStateProps)(Home);
