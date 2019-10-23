import { combineReducers } from 'redux';
import recordsPlayer from './records_player';
import holdProgressBar from './hold_progress_bar';
import positionTooltip from './position_tooltip';
import recordVolume from './record_volume';
import radioShowState from './redio_show_state';
import clodcastDetails from './clodcast_details';
import radioShowsQueue from './radio_shows_queue';
import mode from './setting_mode';

const rootReducer = combineReducers({
  recordsPlayer,
  radioShowState,
  holdProgressBar,
  positionTooltip,
  recordVolume,
  clodcastDetails,
  radioShowsQueue,
  mode
})

export default rootReducer;