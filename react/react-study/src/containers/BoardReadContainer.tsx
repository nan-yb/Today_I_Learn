import React , {useCallback , useEffect} from "react";
import BoardRead from "../components/BoardRead";
import { useDispatch , useSelector } from "react-redux";
import { 
  fetchSuccess , 
  fetchFailure 
} from "../modules/board"
import { fetchBoardApi  , removeBoardApi } from "../lib/api";

import { RouteComponentProps , withRouter } from "react-router-dom"
import { RootState } from "../modules";
import {startLoading , endLoading} from "../modules/loading";

interface MatchParams { 
  boardNo : string;
}

const BoardReadContainer = ({ match  , history} : RouteComponentProps<MatchParams> ) =>{
  const { boardNo } = match.params;

  const dispatch = useDispatch();

  const { board , isLoading} = useSelector (( {board , loading} : RootState) => ({
    board : board.board , 
    isLoading : loading.FETCH , 
  }));

  const readBoard = useCallback(async(boardNo) => {
    try {
      const response = await fetchBoardApi(boardNo);
      
      dispatch (startLoading("FETCH"));
      dispatch(fetchSuccess(response.data));
      dispatch (endLoading("FETCH"));
    } catch (e) {
      dispatch(fetchFailure(e));
      dispatch (endLoading("FETCH"));
      throw e;      
    }
  } , [dispatch]);

  useEffect(( )=> {
    readBoard (boardNo);
  } , [boardNo , readBoard]);

  const onRemove = async() => {
    try {
      await removeBoardApi(boardNo);
      alert('삭제되었습니다.');
      history.push("/");

    } catch (error) {
      
    }
  }
  
    return (
      <BoardRead 
        boardNo = {boardNo} 
        board = {board }
        isLoading = {isLoading}
        onRemove = {onRemove}
      />
    );
  
}
export default withRouter(BoardReadContainer);
