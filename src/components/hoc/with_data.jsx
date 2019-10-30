import React, { Component as ReactComponent } from 'react';
import { AudioContext } from '../player/audio/context';

const HocApp = Component => {
  return class extends ReactComponent {
    constructor(props) {
      super(props);
  
      this.audioElement = document.createElement('audio');
      this.nextPlay = false;
    }

    componentDidMount() {
      this.audioElement.addEventListener('play', this.handlerPlay);
      this.audioElement.addEventListener('pause', this.handlerPause);
      this.audioElement.addEventListener('canplay', this.handlerCanPlay);
      this.audioElement.addEventListener('loadedmetadata', this.loadData);

      // this.loadSrc();
    }
  
    componentWillUnmount() {
      this.audioElement.removeEventListener('play', this.handlerPlay);
      this.audioElement.removeEventListener('canplay', this.handlerCanPlay);
      this.audioElement.removeEventListener('pause', this.handlerPause);
      this.audioElement.removeEventListener('loadedmetadata', this.loadData);
  
      this.audioElement = null;
    }

    componentDidUpdate(prevProps) {
      const { playingShowId } = this.props;
      const { currentTime, duration } = this.audioElement;

      if (playingShowId !== prevProps.playingShowId && prevProps.playingShowId) {
        this.nextPlay = true;

        this.nextShow(this.nextPlay);
      }

      if (currentTime === duration && !this.nextPlay) {
        // eslint-disable-next-line
        const indexShow = this.props.playlist.findIndex(item => {
          if (item.id === playingShowId) {
            return item;
          }
        });

        if (indexShow < this.props.playlist.length-1) {
          this.props.setRadioShowState(this.props.playlist[indexShow+1].id);
        }
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

    loadData = () => {
      this.props.setLoading();
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
      const progress = ((translate / barWidth) * duration).toFixed(6);

      if (holding) {
        setAudioProgress(parseFloat(progress));
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
      this.props.setLoading();
    }
  
    nextShow = (nextPlay = false) => {
      this.getData(this.props.playingShowId)
      .finally(() => {
        this.props.setLoading();
      })
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
      // eslint-disable-next-line
      const dataItem = this.props.playlist.filter(item => {
        if (item.id === playingShowId) {
          return item;
        }
      })
  
      return Promise.resolve(...dataItem);
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
          <Component
            { ...this.props }
            onSetProgress={ this.setProgress }
            onClearInterval={ this.clearInterval }
            onUpdateProgress={ this.updateProgress }
            onSwitchControlPlaying={ this.handlerSwitchControlPlaying }
            onUpdateAudioTime={ this.updateAudioCurrentTime }
            onUpdateData={ this.getData }
          />
        </AudioContext.Provider>
      )
    }
  }
}

export default HocApp;