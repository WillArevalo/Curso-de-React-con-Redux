import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play.js';
import Pause from '../../icons/components/pause.js';

const PlayPause = (props) => (
	<div className="PlayPause">
		{
			props.pause ?
				<button
					onClick={props.handleClick}
				>
					<Play size={25} color="rgb(255,53,127)"/>
				</button>
			:
				<button
					onClick={props.handleClick}
				>
					<Pause size={25} color="rgb(59,173,227)"/>
				</button>
		}
	</div>
)

export default PlayPause;