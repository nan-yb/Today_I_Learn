import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";
import { CodeDetail } from "../App";

export const FETCH_ONE = "codeDetail/FETCH_ONE";
const FETCH_ONE_SUCCESS = "codeDetail/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "codeDetail/FETCH_ONE_FAILURE";

export const FETCH_LIST = "codeDetail/FETCH_LIST";
const FETCH_LIST_SUCCESS = "codeDetail/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "codeDetail/FETCH_LIST_FAILURE";

export const fetchOne = createAction(FETCH_ONE, (groupCode: string, codeValue: string) => ({groupCode, codeValue}));
export const fetchList = createAction(FETCH_LIST);

const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchCodeDetail);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchCodeDetailList);

export function* codeDetailSaga() {
  yield takeLatest(FETCH_ONE, fetchOneSaga);
  yield takeLatest(FETCH_LIST, fetchListSaga);
}

export interface CodeDetailState {
  codeDetail: CodeDetail | null;
  codeDetails: CodeDetail[];
  error: any;
}

const initialState: CodeDetailState = {
  codeDetail: null,
  codeDetails: [],
  error: null,
};

const codeDetail = createReducer(
  initialState,
  {
    [FETCH_ONE]: (state) => ({
      ...state,
      codeDetail: null,
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
      ...state,
      codeDetail: action.payload,
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST]: (state) => ({
      ...state,
      codeDetails: [],
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      codeDetails: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export default codeDetail;
