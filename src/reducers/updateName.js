import {UPDATE_NAME} from '../constants/ActionTypes';

const initialState = {
  username: 'default'
};

export default function updateUsername(state = initialState, action) {
  console.log('state in reducer ' + state.username);
  console.log('in reducer ' + Object.keys(action));
  switch (action.type) {
    case UPDATE_NAME:
      return {
        state,
        username: action.payload
      };

    default:
      return state;
  }
}
