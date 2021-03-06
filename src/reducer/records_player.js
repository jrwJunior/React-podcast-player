import * as actionTypes from '../actions/actionTypes';

const initialState = {
  nowPlaying: false,
  progress: 0,
  duration: 0,
  load: false
}

const recordsPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYER_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload
      };
    case actionTypes.SET_PLAYER_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };
    case actionTypes.SET_PLAYER_DURATION:
      return {
        ...state,
        duration: action.payload
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        load: !state.load
      }
    default:
      return state;
  }
};

export default recordsPlayerReducer;