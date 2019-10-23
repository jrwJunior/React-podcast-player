import * as actionTypes from '../actions/actionTypes';

const initialState = {
  playingShowId: null
}

const radioShowStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_REDIO_SHOW_STATE:
      if (action.payload) {
        return {
          ...state,
          playingShowId: action.payload
        };
      }

      return {
        ...state
      }
    default:
      return state;
  }
};

export default radioShowStateReducer;