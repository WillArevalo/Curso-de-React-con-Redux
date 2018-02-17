import React from  'react';
import VolumenIcon from '../../icons/components/volumen.js';
import './volume.css';

const Volume = props => {
	return(
		<div
			className="Volume"
		>
			<div onClick={ props.handleResetVolume }>
				<VolumenIcon
					color={props.color}
					size={25}
				/>
			</div>
			<div className="Volume-range">
				<input 
					step={.05}
					type="range"
					min={0}
					max={1}
					onChange={props.handleVolumeChange}
					value={props.volume}
				/>
			</div>
		</div>
	)
}

export default Volume;