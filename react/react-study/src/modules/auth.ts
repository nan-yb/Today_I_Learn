import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest , call , put } from "redux-saga/effects";
import * as api from "../lib/api";
import client from "../lib/client";
import { AxiosResponse} from "axios";
import { LoginInput } from "../App";

const SET_ACCESS_TOKEN = 'auth/SET_ACCESS_TOKEN';
const LOGIN = 'auth/LOGIN';

export const setAccessToken = createAction(SET_ACCESS_TOKEN , (accessToken : string)=> accessToken);
export const login = createAction(LOGIN , ({ userId , password} : LoginInput) => ({
  userId , password
}));

function* loginSaga(action : ReturnType<typeof login>) {
  try {
    const { userId , password} = action.payload;
    const response : AxiosResponse = yield call(api.signIn , userId , password );
    const { authorization }= response.headers;
    const accessToken = authorization.substring(7);

    yield put (setAccessToken(accessToken));
    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } catch (error) {
    console.log(error)
  }
}

export function* authSaga(){
  yield takeLatest(LOGIN , loginSaga);
}

export interface AuthState {
  accessToken : string;
}

const initialState : AuthState = {
  accessToken : ""
}

const auth = createReducer(
  initialState, 
  {
    [SET_ACCESS_TOKEN] : (state , action) => ({
      ...state , 
      accessToken : action.payload , 
    })
    ,
  } 
)


export default auth;