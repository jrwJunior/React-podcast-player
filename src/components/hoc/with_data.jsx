import React, { Component as ReactComponent } from 'react';
import { AudioContext } from '../player/audio/context';
import AudioService from '../../service/audio_service';

const HocApp = Component => {
  return class extends ReactComponent {
    constructor(props) {
      super(props);
  
      this.audioElement = document.createElement('audio');
      this.audioService = new AudioService();
      this.nextPlay = false;
    }

    componentDidMount() {
      this.audioElement.addEventListener('play', this.handlerPlay);
      this.audioElement.addEventListener('pause', this.handlerPause);
      this.audioElement.addEventListener('canplay', this.handlerCanPlay);

      this.loadSrc();
    }
  
    componentWillUnmount() {
      this.audioElement.removeEventListener('play', this.handlerPlay);
      this.audioElement.removeEventListener('canplay', this.handlerCanPlay);
      this.audioElement.removeEventListener('pause', this.handlerPause);
  
      this.audioElement = null;
    }

    componentDidUpdate(prevProps) {
      const { playingShowId } = this.props;
      if (playingShowId !== prevProps.playingShowId && prevProps.playingShowId) {
        this.nextPlay = true;

        this.nextShow(this.nextPlay);
      }
    }
  
    handlerSwitchControlPlaying = () => {
      if (!this.audioElement.src.length) {
        return;
      }

      if (this.props.nowPlaying) {
        this.audioElement.pause();
      } else {
        this.audioElement.play();
      }
    }
  
    updateProgress = () => {
      const { setAudioProgress } = this.props;
      this.intervalId = setInterval(() => {
        setAudioProgress(this.audioElement.currentTime);
      }, 900);
    }
  
    handlerPlay = () => {
      const { setAudioPlaying } = this.props;
  
      setAudioPlaying(true);
      this.updateProgress();
    }
  
    handlerPause = () => {
      const { setAudioPlaying } = this.props;
  
      setAudioPlaying(false);
      this.clearInterval();
    }
  
    handlerCanPlay = () => {
      const { setAudioDuration } = this.props;
      
      setAudioDuration(this.audioElement.duration);
    }
  
    setProgress = ({holding, translate, barWidth}) => {
      const { setAudioProgress, duration } = this.props;
      const progress = (translate / barWidth) * duration;

      if (holding) {
        setAudioProgress(progress);
      }
    }
  
    updateAudioCurrentTime = time => {
      const { setAudioProgress } = this.props;
      const progress = this.audioElement.currentTime = time;
  
      setAudioProgress(progress);
    }

    loadSrc = () => {
      this.audioElement.src = this.props.playlist[0].podcast;
      this.audioElement.load();
    }
  
    nextShow = (nextPlay = false) => {
      this.getData(this.props.playingShowId)
      .then(({ podcast }) => {
        this.audioElement.src = podcast;
        this.audioElement.load();

        if (nextPlay) {
          this.clearInterval();
          this.audioElement.play();
          this.nextPlay = false;
        }
      });
    }

    getData = playingShowId => {
      return this.audioService.getAttributePodcast(playingShowId);
    }
  
    clearInterval = () => {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }

    render() {
      return (
        <AudioContext.Provider 
          value={{
            audio: this.audioElement
          }}
        >
          {/* <Spotlight
            onSwitchControlPlaying={ this.handlerSwitchControlPlaying }
          /> */}
          <Component
            { ...this.props }
            onSetProgress={ this.setProgress }
            onClearInterval={ this.clearInterval }
            onUpdateProgress={ this.updateProgress }
            onSwitchControlPlaying={ this.handlerSwitchControlPlaying }
            onUpdateAudioTime={ this.updateAudioCurrentTime }
            onService={ this.getData }
          />
        </AudioContext.Provider>
      )
    }
  }
}

export default HocApp;