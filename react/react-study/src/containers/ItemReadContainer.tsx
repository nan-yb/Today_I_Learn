import React , {useEffect} from "react";
import {useDispatch , useSelector} from "react-redux";
import ItemRead from "../components/ItemRead";
import { fetchItem , FETCH_ITEM } from "../modules/item";
import { RootState } from "../modules";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams { 
  itemId : string ; 
}

const ItemReadContainer = ({match} : RouteComponentProps<MatchParams>) => {

  const { itemId } = match.params;
  const dispatch = useDispatch();
  const { item , isLoading} = useSelector(({ item , loading} : RootState) => ({
    item : item.item , 
    isLoading : loading[FETCH_ITEM]
  }));

  useEffect(() =>{
    dispatch(fetchItem(itemId));
  } ,[dispatch , itemId])

  return <ItemRead itemId={itemId}  item = {item}  isLoading = {isLoading} />;
};

export default ItemReadContainer;
