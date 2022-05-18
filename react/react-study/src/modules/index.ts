import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import { AuthState } from "../modules/auth";
import { CodeGroupState } from "../modules/codegroup";
import { LoadingState } from "../modules/loading";
import loading from "./loading";
import codegroup, { codeGroupSaga } from "./codegroup";
import codedetail , { CodeDetailState , codeDetailSaga } from "./codedetail";
import modal from "./modal";

export interface RootState {
  auth: AuthState;
  codegroup: CodeGroupState;
  codedetail : CodeDetailState;
  loading: LoadingState;
}

const rootReducer = combineReducers({
  auth,
  loading,
  codegroup,
  codedetail ,
  modal
});

export function* rootSaga() {
  yield all([
    authSaga(),
    codeGroupSaga(),
    codeDetailSaga()
  ]);
}

export default rootReducer;
