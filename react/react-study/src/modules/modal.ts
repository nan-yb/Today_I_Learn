import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import * as api from "../lib/api";
import client from "../lib/client";
import { AxiosResponse } from "axios";
import { LoginInput, ModalInfo, MyInfo } from "../App";
import Cookies from "js-cookie";

const SET_LOGIN_MODAL_OPEN = "modal/SET_LOGIN_MODAL_OPEN";
const SET_LOGIN_MODAL_DIRECT_LOGIN = "modal/SET_LOGIN_MODAL_DIRECT_LOGIN";
const SET_LOGIN_MODAL_DIRECT_REGISTER = "modal/SET_LOGIN_MODAL_DIRECT_REGISTER";
const SET_LOGIN_MODAL_CLOSE = "modal/SET_LOGIN_MODAL_CLOSE";

export const setLoginModalOpen = createAction(SET_LOGIN_MODAL_OPEN);
export const setLoginModaldirectLogin = createAction(SET_LOGIN_MODAL_DIRECT_LOGIN);
export const setLoginModalDirectRegister = createAction(SET_LOGIN_MODAL_DIRECT_REGISTER);
export const setLoginModalClose = createAction(SET_LOGIN_MODAL_CLOSE);

// function* checkMyInfoSaga() {
//   try {
//     const response: AxiosResponse = yield call(api.getMyInfo);
    
//     yield put(setMyInfo(response.data));
//   } catch (e) {
//     console.log(e);
//   }
// }

// export function* authSaga() {
//   yield takeLatest(LOGIN, loginSaga);
//   yield takeLatest(CHECK_MY_INFO, checkMyInfoSaga);
// }


const initialState: ModalInfo = {
  show: false,
  login : false , 
  register : false ,
  writing: false

};

const modal = createReducer(
  initialState,
  {
    [SET_LOGIN_MODAL_OPEN]: (state) => ({
      ...state,
      show: true 
    }),
    [SET_LOGIN_MODAL_DIRECT_LOGIN]: (state) => ({
      ...state,
      show: true , 
      directLogin : true
    }),
    [SET_LOGIN_MODAL_DIRECT_REGISTER]: (state) => ({
      ...state,
      show: true , 
      directRegister : true
    }),
    [SET_LOGIN_MODAL_CLOSE]: (state) => ({
      ...state,
      show: false  
    }),
  },
);

export default modal;
