import * as actionTypes from '../actions/actionTypes';

const initialState = {
  dataQueue: []
}

const radioShowsQueueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYER_QUEUE_SHOW:
      return {
        ...state,
        dataQueue: state.dataQueue.concat(action.payload)
      };
    default:
      return state;
  }
};

export default radioShowsQueueReducer;