import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MemoryRouter as Router }  from "react-router-dom";
import { createStore , applyMiddleware} from 'redux';
import { Provider} from "react-redux";
import rootReducer , {rootSaga} from "./modules";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore (
  rootReducer , 
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

