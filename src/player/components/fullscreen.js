import React from 'react';
import './fullscreen.css';
import FullscreenIcon from '../../icons/components/fullscreen.js';

const Fullscreen = props => (
	<div 
		className="Fullscreen"
		onClick={props.handleFullscreenClick}
	>
		<FullscreenIcon
			color="rgb(255,53,127)"
			size={25}
		/>
	</div>
)

export default Fullscreen;