import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { LoadingState} from "../modules/loading";
import auth , { authSaga , AuthState } from "./auth";

export interface RootState { 
  loading : LoadingState;
  auth : AuthState;
}

const rootReducer = combineReducers({
  auth,
})

export function* rootSaga(){
  yield all ([
    authSaga()
  ])
}

export default rootReducer;