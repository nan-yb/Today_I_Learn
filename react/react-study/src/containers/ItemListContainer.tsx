import React, { useEffect } from "react";
import ItemList from "../components/ItemList";
import { useDispatch  , useSelector} from "react-redux"
import { fetchItemList, FETCH_ITEM_LIST } from "../modules/item";
import { RootState } from "../modules";

const ItemListContainer = () => {

  const dispatch = useDispatch();

  const {items , isLoading} = useSelector(({item , loading} : RootState) =>({
    items : item.items ,
    isLoading : loading[FETCH_ITEM_LIST]
  }));

  useEffect(() => {
    dispatch(fetchItemList());
  } , [dispatch])

  return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListContainer;
