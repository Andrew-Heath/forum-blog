import {SUBMIT_POST} from '../constants/ActionTypes';

const initialState = null;

export default function submitPost(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_POST:
      // call function to clear submit box? That should probably be done in actions
      return state;

    default:
      return state;
  }
}
