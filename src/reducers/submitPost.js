import {SUBMIT_POST} from '../constants/ActionTypes';

const initialState = {
  postList: [
    {
      username: 'user1',
      body: 'This is user1\'s first post.',
      postID: 0
    },
    {
      username: 'user2',
      body: 'This is user2\'s first post.',
      postID: 1
    },
    {
      username: 'user1',
      body: 'This is user1\'s second post.',
      postID: 2
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
