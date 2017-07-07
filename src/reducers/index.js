import {combineReducers, applyMiddleware} from 'redux';
import updateUsername from './updateName';

const rootReducer = (middleware, routerReducer) => {
  return combineReducers({
    updateUsername,
    router: routerReducer
  }, applyMiddleware(middleware));
};

export default rootReducer;
