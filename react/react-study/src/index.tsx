import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import {  MemoryRouter as Router } from "react-router-dom";
import { createStore } from "redux"
import { Provider} from "react-redux";
import rootReducer from "./modules";

const store = createStore(rootReducer , composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router   >
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

