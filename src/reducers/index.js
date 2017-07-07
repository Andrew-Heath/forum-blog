import {combineReducers, applyMiddleware} from 'redux';
import updateUsername from './updateName';
import submitPost from './submitPost';

const rootReducer = (middleware, routerReducer) => {
  return combineReducers({
    updateUsername,
    submitPost,
    router: routerReducer
  }, applyMiddleware(middleware));
};

export default rootReducer;
