import {UPDATE_NAME} from '../constants/ActionTypes';

const initialState = {
  username: null
};

export default function updateUsername(state = initialState, action) {
  // console.log('in reducer ' + action.payload.username);
  switch (action.type) {
    case UPDATE_NAME:
      return {
        state,
        username: action.payload.username
      };

    default:
      return state;
  }
}
