import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import { AuthState } from "../modules/auth";
import { CodeGroupState } from "../modules/codegroup";
import { LoadingState } from "../modules/loading";
import loading from "./loading";
import codegroup, { codeGroupSaga } from "./codegroup";

export interface RootState {
  auth: AuthState;
  codegroup: CodeGroupState;
  loading: LoadingState;
}

const rootReducer = combineReducers({
  auth,
  loading,
  codegroup,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    codeGroupSaga(),
  ]);
}

export default rootReducer;
