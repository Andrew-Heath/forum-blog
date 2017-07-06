import * as types from '../constants/ActionTypes';

export function actionName(i) {
  return {type: types.TYPE, i};
}

function parsePost(post) {
  // do things to parse unwanted code from post
  return post;
}

function parseName(uname) {
  // do things to parse everything but the name
  return uname;
}

function sendPost(post) {
  // send the post to the server
  // in this first case, just call displayPost
  displayPost(post);
  return;
}

export function sentPost(post = null) {
  // If post is not a string, do nothing
  if (typeof post !== 'string') {
    return;
  }
  // Otherwise, Parse the post, and send it to the server
  // Since this will eventually send to the server immediately, we can handle parsing server side
  // Might be better to keep it client side, but it would allow them to manipulate what gets sent if they mean malice
  post = parsePost(post);
  sendPost(post);

  return {
    type: SUBMIT_POST
  };
}

export function displayPost(posts = null) {
  // if called with nothing, do nothing
  if (posts === null || (Array.isArray(posts) === true && Array.isArray(posts[0]) === true)) {
    return;
  }
  // take the post and add it to the post list
  return {
    type: UPDATE_POSTS,
    payload: posts
  };
}

export function updateUsername(uname = null) {
  // if uname is not a string, do nothing
  if (typeof uname !== 'string') {
    return;
  }

  // change the username for other components to reference
  uname = parseName(uname);
  return {
    type: UPDATE_NAME,
    username: uname
  };
}
