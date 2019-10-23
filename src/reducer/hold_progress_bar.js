import * as actionTypes from '../actions/actionTypes';

const initialState = {
  holding: false,
  activeBar: false
}

const holdProgressBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYER_PROGRESS_BAR_HOLDING:
      return {
        ...state,
        holding: !state.holding
      };
    case actionTypes.SET_PLAYER_ACTIVE_PROGRESS_BAR:
      return {
        ...state,
        activeBar: !state.activeBar
      };
    default:
      return state;
  }
};

export default holdProgressBarReducer;