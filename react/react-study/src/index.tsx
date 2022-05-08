import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MemoryRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { setAccessToken , checkMyInfo } from "./modules/auth";
import client from "./lib/client";
import Cookies from "js-cookie";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

function loadUser(){
  try {
    const savedToken = Cookies.get("accessToken");

    if(!savedToken) return ;
    store.dispatch(setAccessToken(savedToken));
    client.defaults.headers.common.Authorization = `Bearer ${savedToken}`;
    store.dispatch(checkMyInfo());
  } catch (error) {
    
  }
}

loadUser();


ReactDOM.render(
  <Provider store={store}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </Provider>,
  document.getElementById("root")
);

