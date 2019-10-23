import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  changeMode: false
}

const settingModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOGGLE_POPPER:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case actionTypes.SET_SETTING_MODE:
      return {
        ...state,
        changeMode: !state.changeMode
      }
    default:
      return state;
  }
};

export default settingModeReducer;