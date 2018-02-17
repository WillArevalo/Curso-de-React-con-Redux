import React from 'react';
import './progress-bar.css';

const ProgressBar = (props) => {
	return(
		<div className="ProgressBar">
			<input 
				className="range blue"
				type="range"
				min={0}
				max={props.duration}
				value={props.value}
				//Para que se mueva la barra de progreso
				onChange={props.handleProgressChange}
			/>
		</div>
	)//<!--Input range es un progress bar que viene en  html-->
}
// function ProgressBar(props){
// 	return(
// 		<div>progress</div>
// 	)
// }

export default ProgressBar;