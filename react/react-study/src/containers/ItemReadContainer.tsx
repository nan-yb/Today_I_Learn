import React , {useEffect} from "react";
import {useDispatch , useSelector} from "react-redux";
import ItemRead from "../components/ItemRead";
import { fetchItem , FETCH_ITEM } from "../modules/item";
import { RootState } from "../modules";
import { RouteComponentProps , withRouter } from "react-router-dom";
import {  removeItemApi} from "../lib/api"

interface MatchParams { 
  itemId : string ; 
}

const ItemReadContainer = ({match , history} : RouteComponentProps<MatchParams>) => {

  const { itemId } = match.params;
  const dispatch = useDispatch();
  const { item , isLoading} = useSelector(({ item , loading} : RootState) => ({
    item : item.item , 
    isLoading : loading[FETCH_ITEM]
  }));

  const onRemove = async () => {
    try {
      await removeItemApi(itemId);
      alert("삭제되었습니다.");
      history.push("/")

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    dispatch(fetchItem(itemId));
  } ,[dispatch , itemId])

  return <ItemRead itemId={itemId}  item = {item}  isLoading = {isLoading} onRemove={onRemove} />;
};

export default withRouter(ItemReadContainer);
