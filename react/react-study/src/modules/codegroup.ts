import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";
import { CodeGroup } from "../App";

export const FETCH_ONE = "codeGroup/FETCH_ONE";
const FETCH_ONE_SUCCESS = 'codeGroup/FETCH_ONE_SUCCESS';
const FETCH_ONE_FAILURE = 'codeGroup/FETCH_ONE_FAILURE';

export const FETCH_LIST = "codeGroup/FETCH_LIST";
const FETCH_LIST_SUCCESS = 'codeGroup/FETCH_LIST_SUCCESS';
const FETCH_LIST_FAILURE = "codeGroup/FETCH_LIST_FAILURE";

export const fetchOne = createAction(FETCH_ONE , (groupCode : string) => groupCode);
export const fetchList = createAction(FETCH_LIST);

const fetchOneSaga = createRequestSaga(FETCH_ONE , api.fetchCodeGroup);
const fetchListSaga = createRequestSaga(FETCH_ONE , api.fetchCodeGroupList);

export function* codeGroupSaga(){
  yield takeLatest(FETCH_ONE , fetchOneSaga);
  yield takeLatest(FETCH_LIST , fetchListSaga);
}

export interface CodeGroupState { 
  codeGroup : CodeGroup | null;
  codeGroups : CodeGroup[];
  error : any;
}

const initialState : CodeGroupState = {
  codeGroup : null , 
  codeGroups :[] ,
  error : null , 
}

const codeGroup = createReducer(initialState 
  ,
  {
    [FETCH_ONE] : (state) => ({
      ...state , 
      codeGroup : null , 
    }) ,
    [FETCH_ONE_SUCCESS] : (state) => ({
      ...state , 
      codeGroup : null , 
    }) ,
    [FETCH_ONE_FAILURE] : (state) => ({
      ...state , 
      codeGroup : null , 
    }) ,
    [FETCH_LIST] : (state) => ({
      ...state , 
      codeGroups : [] , 
    }) ,
    [FETCH_LIST_SUCCESS] : (state , action) => ({
      ...state , 
      codeGroups : action.payload
    }) ,
    [FETCH_LIST_FAILURE] : (state , action) => ({
      ...state , 
      error : action.payload
    })
  }
)

export default codeGroup;

