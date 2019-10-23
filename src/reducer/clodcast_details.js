import * as actionTypes from '../actions/actionTypes';

const initialState = {
  show: null,
  author: null,
  cover: null
}

const clodcastDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHOW_NAME_BY_AUTHOR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default clodcastDetailsReducer;