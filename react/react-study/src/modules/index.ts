import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import { AuthState } from "../modules/auth";



export interface RootState {
  auth: AuthState;
}

const rootReducer = combineReducers({
  auth
});

export function* rootSaga() {
  yield all([
    authSaga()
  ]);
}

export default rootReducer;
