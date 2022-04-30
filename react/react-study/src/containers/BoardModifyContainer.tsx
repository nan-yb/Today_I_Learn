import React, { useCallback , useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import BoardModifyForm from "../components/BoardModifyForm";
import { changeContent, changeTitle, fetchFailure, fetchSuccess} from "../modules/board";
import { withRouter , RouteComponentProps } from "react-router-dom";
import { modifyBoardApi , fetchBoardApi } from "../lib/api";
import { RootState } from "../modules"
import { endLoading, startLoading } from "../modules/loading";

interface MatchParams {
  boardNo : string ;
}

const BoardModifyContainer = ( { match , history } : RouteComponentProps<MatchParams>) => {
  const { boardNo } = match.params;
  const dispatch = useDispatch();

  const { board , isLoading } = useSelector(({board , loading} : RootState) => ({
    board : board.board , 
    isLoading : loading.FETCH
  }));

  const onChangeTitle = useCallback(
    (title) => {
      return dispatch(changeTitle(title));
    } , [dispatch]
  )

  const onChangeContent = useCallback(
    (title) => {
      return dispatch(changeContent(title));
    } , [dispatch]
  )

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
  } , [dispatch])

  useEffect(() => {
    readBoard (boardNo);
  } , [boardNo , readBoard]);

  const onModify = async ( boardNo : string , title : string , content : string) => {
    try {
      await modifyBoardApi(boardNo , title , content);
      alert('수정되었습니다.');
      history.push("/read/" + boardNo);
    } catch (e) {
      console.log(e);
    }
  }


  return <BoardModifyForm 
    board={board}
    isLoading={isLoading} 
    onChangeTitle = {onChangeTitle}
    onChangeContent = {onChangeContent}
    onModify = {onModify}
  />;
};

export default withRouter(BoardModifyContainer);
