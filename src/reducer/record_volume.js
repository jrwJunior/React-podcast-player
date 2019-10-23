import * as actionTypes from '../actions/actionTypes';

const initialState = {
  muteVolume: 100,
  volume: 1
}

const recordVolumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYER_VOLUME:
      return {
        ...state,
        volume: action.payload
      };
    case actionTypes.SET_PLAYER_MUTE_VOLUME:
      return {
        ...state,
        muteVolume: action.payload
      };
    default:
      return state;
  }
};

export default recordVolumeReducer;