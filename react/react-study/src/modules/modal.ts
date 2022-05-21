import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
// import { takeLatest, call, put } from "redux-saga/effects";
// import * as api from "../lib/api";
// import client from "../lib/client";
// import { AxiosResponse } from "axios";
import {  ModalInfo } from "../App";
// import { LoginInput, ModalInfo, MyInfo } from "../App";
// import Cookies from "js-cookie";

const SET_LOGIN_MODAL_DIRECT_LOGIN = "modal/SET_LOGIN_MODAL_DIRECT_LOGIN";
const SET_LOGIN_MODAL_DIRECT_REGISTER = "modal/SET_LOGIN_MODAL_DIRECT_REGISTER";
const SET_LOGIN_MODAL_CLOSE = "modal/SET_LOGIN_MODAL_CLOSE";

export const setLoginModalDirectLogin = createAction(SET_LOGIN_MODAL_DIRECT_LOGIN);
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

export interface ModalState {
  modalInfo : ModalInfo | null;
}

const initialState: ModalState = {
  modalInfo : null
};

const modal = createReducer(
  initialState,
  {
    [SET_LOGIN_MODAL_DIRECT_LOGIN]: (state) => ({
      ...state,
      modalInfo : {
        show: true,
        login : true,
        register : false,
      }
    }),
    [SET_LOGIN_MODAL_DIRECT_REGISTER]: (state) => ({
      ...state,
      modalInfo : {
        show: true,
        login : false,
        register : true,
      }
    }),
    [SET_LOGIN_MODAL_CLOSE]: (state) => ({
      ...state,
      modalInfo : {
        show: false,
        login : false,
        register : false,
      }
    }),
  },
);

export default modal;
