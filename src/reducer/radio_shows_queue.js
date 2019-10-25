import * as actionTypes from '../actions/actionTypes';

const initialState = {
  dataQueue: [],
  isOpenQueue: false
}

const radioShowsQueueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYER_QUEUE_SHOW:
      return {
        ...state,
        dataQueue: state.dataQueue.concat(action.payload)
      };
    case actionTypes.SET_VISIBILITY_QUEUE_PANEL:
      return {
        ...state,
        isOpenQueue: !state.isOpenQueue
      }
    case actionTypes.SET_REMOVE_FROM_QUEUE:
      // eslint-disable-next-line
      const newData = state.dataQueue.filter(item => {
        if (item.id !== action.payload) {
          return item;
        }
      });

      return {
        ...state,
        dataQueue: newData
      }
    default:
      return state;
  }
};

export default radioShowsQueueReducer;