import {SUBMIT_POST} from '../constants/ActionTypes';

const initialState = {
  postList: [
    {
      username: 'user1',
      body: 'This is user1\'s first post.'
    },
    {
      username: 'user2',
      body: 'This is user2\'s first post.'
    },
    {
      username: 'user1',
      body: 'This is user1\'s second post.'
    }
  ]
};

export default function submitPost(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_POST:
      // call function to clear submit box? That should probably be done in actions
      return state;

    default:
      return state;
  }
}
