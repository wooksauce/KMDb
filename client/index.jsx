import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import BasePage from './pages/BasePage';
import rootReducer from './reducers'
import '../styles/styles.css';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(rootReducer, middleware)

render(
  <Provider store = {store} >
    <BasePage />
  </Provider>, document.getElementById('app')
)