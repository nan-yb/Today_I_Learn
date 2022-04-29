import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import board from "./modules/board"
import { composeWithDevTools } from 'redux-devtools-extension';
import {  MemoryRouter as Router } from "react-router-dom";
import { createStore } from "redux"
import { Provider} from "react-redux";

const store = createStore(board , composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router   >
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

