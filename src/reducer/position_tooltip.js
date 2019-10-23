import * as actionTypes from '../actions/actionTypes';

const initialState = {
  translate: 0,
  barWidth: 0
}

const postionTooltipBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYER_POSTION_TOOLTIP_BAR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default postionTooltipBarReducer;