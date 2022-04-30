import React , {useEffect , useCallback } from "react";
import BoardList from "../components/BoardList";
import { useDispatch , useSelector } from "react-redux";
import { RootState } from "../modules";
import { fetchBoardListApi } from "../lib/api";
import {
  fetchListSuccess , 
  fetchListFailure ,
} from "../modules/board";
import { endLoading, startLoading } from "../modules/loading";

const BoardListContainer = () => {
  const dispatch = useDispatch();

  const { boards , isLoading} = useSelector(( {board , loading } : RootState) => ({
    boards : board.boards , 
    isLoading : loading.FETCH_LIST , 
  }))

  const listBoard = useCallback(async() => {
    dispatch (startLoading("FETCH_LIST"));
    try {
      const response = await fetchBoardListApi();
      dispatch(fetchListSuccess(response.data));
      dispatch (endLoading("FETCH_LIST"));
    } catch (error) {
      dispatch(fetchListFailure(error))
      dispatch (endLoading("FETCH_LIST"));
      throw error;
    }
  } , [dispatch]);

  useEffect(() =>{
    listBoard();
  }, [listBoard])

  return <BoardList boards = {boards} isLoading={isLoading} />;
};

export default BoardListContainer;
