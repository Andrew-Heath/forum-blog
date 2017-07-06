import {UPDATE_NAME} from '../constants/ActionTypes';

const initialState = {
  username: null
};

export default function updateUsername(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        username: action.username
      };

    default:
      return state;
  }
}
