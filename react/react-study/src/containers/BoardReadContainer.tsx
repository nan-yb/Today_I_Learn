import React , {useCallback , useEffect} from "react";
import BoardRead from "../components/BoardRead";
import { useDispatch , useSelector } from "react-redux";
import { 
  fetchStart , 
  fetchSuccess , 
  fetchFailure 
} from "../modules/board"
import { fetchBoardApi  , removeBoardApi } from "../lib/api";

import { RouteComponentProps , withRouter } from "react-router-dom"
import { BoardState } from "../modules/board";

interface MatchParams { 
  boardNo : string;
}

const BoardReadContainer = ({ match  , history} : RouteComponentProps<MatchParams> ) =>{
  const { boardNo } = match.params;

  const dispatch = useDispatch();

  const { board , isLoading} = useSelector (( state : BoardState) => ({
    board : state.board , 
    isLoading : state.loading.FETCH , 
  }));

  const readBoard = useCallback(async(boardNo) => {
    dispatch(fetchStart());
    try {
      const response = await fetchBoardApi(boardNo);
      

      dispatch(fetchSuccess(response.data));

    } catch (error) {
      dispatch(fetchFailure(error));
      throw error;      
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
