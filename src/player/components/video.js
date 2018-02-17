import React, { Component } from 'react';
import './video.css';

class Video extends Component{
	togglePlay = () => {
		this.props.pause ? this.video.play() : this.video.pause()
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.pause !== this.props.pause){
			this.togglePlay();
		}
	}
	setRef = element => {
		this.video = element;
	}
	render(){
		//Cojemos solo la metadata de las props que nos llegan
		const {
			handleLoadedMetadata,
			handleTimeUpdate,
			handleSeeking,
			handleSeeked,
		} = this.props;
		return(
			<div className="Video">
				<video
					ref={this.setRef}
					autoPlay={this.props.autoplay}
					src={this.props.src}
					//Saber el tiempo del video en segundos
					onLoadedMetadata={handleLoadedMetadata}
					//El tiempo en el que se encuentra
					onTimeUpdate={handleTimeUpdate}
					//Me estoy moviendo
					onSeeking={handleSeeking}
					//Ya me movi, ya termine
					onSeeked={handleSeeked}
				/>
			</div>
		)
	}
}

export default Video;