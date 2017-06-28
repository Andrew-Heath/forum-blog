import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import Header from './components/Header';
import Footer from './components/Footer';

// Router stuff
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import {Route} from 'react-router-dom';

import './index.css';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = configureStore(middleware, routerReducer);

// Create the list of different front end routes

ReactDOM.render(
  <div>
    This should load if everything works
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Header/>
          <Route exact path="/" component={App}/>
          <Footer/>
        </div>
      </ConnectedRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
      // <BrowserRouter>
      //   <Route path="/" component={App}/>
      // </BrowserRouter>
