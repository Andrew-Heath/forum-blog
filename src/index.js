import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import App from './containers/App';
import configureStore from './store/configureStore';
// import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';

import './index.css';

const store = configureStore();

// Create the list of different front end routes

ReactDOM.render(
  <div>
    This should load if everything works
    <Provider store={store}>
      <Header/>
    </Provider>
  </div>,
  document.getElementById('root')
);
      // <BrowserRouter>
      //   <Route path="/" component={App}/>
      // </BrowserRouter>
