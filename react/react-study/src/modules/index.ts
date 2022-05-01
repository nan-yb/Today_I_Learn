import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import item , {itemSaga} from "./item";
import loading from "./loading";
import { ItemState } from "../modules/item";
import { LoadingState} from "../modules/loading";


export interface RootState { 
  item : ItemState; 
  loading : LoadingState;
}

const rootReducer = combineReducers({
  item , loading
})

export function* rootSaga(){
  yield all([itemSaga()]);
}

export default rootReducer;