import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/playpause.js';
import Timer from '../components/timer.js';
import Controls from '../components/video-player-controls.js';
import FormattedTime from '../../libs/utilities.js';
import ProgressBar from '../components/progress-bar.js';
import Spinner from '../components/spinner.js';
import Volume from '../components/volume.js';
import Fullscreen from '../components/fullscreen.js';

class VideoPlayer extends Component{
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		durationFloat: 0,
		timeFloat: 0,
		loading: false,
		lvolume: 1,
		lastValue: null,
		colorVol: "rgb(59,173,227)",
	}
	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause,
		})
	}
	componentDidMount(){
		this.setState({
			pause: (!this.props.autoplay)
		})
	}
	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: FormattedTime(this.video.duration),
			durationFloat: this.video.duration,
		});

	}
	handleTimeUpdate = event => {
		this.setState({
			currentTime: FormattedTime(this.video.currentTime),
			timeFloat: this.video.currentTime,
		})
	}
	handleProgressChange = event => {
		// event.target.value
		this.video.currentTime = event.target.value
	}
	//Me estoy moviendo, estoy cargando
	handleSeeking = event => {
		this.setState({
			loading:true,
		})
	}
	//Me estaba moviendo, deje de cargar
	handleSeeked = event => {
		this.setState({
			loading:!this.state.loading,
		})
	}
	handleResetVolume = () => {
	    const lastValue = this.video.volume
	    this.setState({ lastValue })
	    if(this.video.volume !== 0) {
	      this.video.volume = 0
	      this.setState({ 
	      	volume: this.video.volume,
	      	colorVol: "rgb(255,53,127)",
	       })
	    }else {
	      this.video.volume = this.state.lastValue
	      this.setState({ 
	      	volume: this.video.volume,
	      	colorVol: "rgb(59,173,227)",
	      	})
	    }
	}
	handleVolumeChange = event => {
	    this.video.volume = event.target.value
	    this.setState({ 
	    	volume: this.video.volume 
	    })
	}
	handleFullscreenClick = event => {
		// if(si no estoy en fullscreen){
		// 	mando a fullscreen
		// }else{
		// 	salgo de fullscreen
		// }
		if(document.webkitIsFullScreen){
	      document.webkitExitFullscreen()
	    } else if(document.mozFullScreen) {
	      document.mozCancelFullScreen()
	    } else{
	      if ( this.player.webkitRequestFullscreen ) {
	        this.player.webkitRequestFullscreen()
	      } else if ( this.player.mozRequestFullScreen ) {
	        this.player.mozRequestFullScreen()
	      }
	    }
	}
	setRef = element => {
		this.player = element;
	}
	render(){
		return(
			<VideoPlayerLayout
				setRef={this.setRef}
			>
				<Title title={this.props.title}/>
				<Controls>
					<PlayPause 
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<ProgressBar
						duration={this.state.durationFloat}
						value={this.state.timeFloat}
						handleProgressChange={this.handleProgressChange}
					/>
					<Timer 
						duration={this.state.duration}
						currentTime={this.state.currentTime}
					/>
					<Volume
						handleResetVolume={this.handleResetVolume}
			            handleVolumeChange={this.handleVolumeChange}
						volume={this.state.volume}
						color={this.state.colorVol}
					/>
					<Fullscreen 
						handleFullscreenClick = {this.handleFullscreenClick}
					/>
				</Controls>
				{ this.state.loading && <Spinner/> }
				<Video 
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					src={this.props.src}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;