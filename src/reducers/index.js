import {combineReducers, applyMiddleware} from 'redux';
import todos from './todos';

const rootReducer = (middleware, routerReducer) => {
  return combineReducers({
    todos,
    router: routerReducer
  }, applyMiddleware(middleware));
};

export default rootReducer;
