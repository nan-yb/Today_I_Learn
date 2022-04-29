import React , {useEffect , useCallback } from "react";
import BoardList from "../components/BoardList";
import { useDispatch , useSelector } from "react-redux";
import { BoardState } from "../modules/board";
import { fetchBoardListApi } from "../lib/api";
import {
  fetchListStart , 
  fetchListSuccess , 
  fetchListFailure ,
} from "../modules/board";

const BoardListContainer = () => {
  const dispatch = useDispatch();

  const { boards , isLoading} = useSelector((state : BoardState) => ({
    boards : state.boards , 
    isLoading : state.loading.FETCH_LIST , 
  }))

  const listBoard = useCallback(async() => {
    dispatch (fetchListStart());
    try {
      const response = await fetchBoardListApi();
      dispatch(fetchListSuccess(response.data));
    } catch (error) {
      dispatch(fetchListFailure(error))
      throw error;
    }
  } , [dispatch]);

  useEffect(() =>{
    listBoard();
  }, [listBoard])

  return <BoardList boards = {boards} isLoading={isLoading} />;
};

export default BoardListContainer;
