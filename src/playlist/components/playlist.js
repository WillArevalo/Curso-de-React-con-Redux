import React from 'react';
import MediaContainer from '../containers/media';
import './playlist.css';

//Cuando el componente no guarda datos o algo similar se puede transformar 
//a un componente funcional, que solo vive en la funcion
function Playlist(props) {
	// const {titulo, descripcion, lista} = props // --- playlist
	return (
		<div className = "Playlist">
			{
				props.playlist.map((mediaId) =>{
					return (
						<MediaContainer 
							id={mediaId}
							key={mediaId} 
							openModal={props.handleOpenModal}
						/>
					)
				})
			}
		</div>
	)
}

export default Playlist;