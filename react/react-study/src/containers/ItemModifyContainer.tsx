import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps , withRouter } from "react-router-dom";
import ItemModifyForm from "../components/ItemModifyForm";
import { RootState } from "../modules";
import { fetchItem, FETCH_ITEM } from "../modules/item";
import axios from "axios";

interface MatchParams  {
  itemId : string;
}

const ItemModifyContainer = ({match , history} : RouteComponentProps<MatchParams> ) => {

  const { itemId } = match.params;

  const dispatch = useDispatch();
  const { item , isLoading} = useSelector(({ item , loading} : RootState) => ({
    item : item.item , 
    isLoading : loading[FETCH_ITEM]
  }));

  useEffect(() =>{
    dispatch(fetchItem(itemId));
  } ,[dispatch , itemId])

  const onModify = async(itemName : string, price : number, description : string , file: File) => {
    const itemObject = {
      itemName : itemName , 
      price : price , 
      description : description ,
      itemId : itemId
    }

    const formData = new FormData();

    formData.append("file" , file);
    formData.append("item" , JSON.stringify(itemObject));

    axios.put("/items" , formData , {
      headers : {
        "Content-Type" : "multipart/form-data",
      },
    }).then((res) => {
      alert('수정되었습니다.');
      history.push("/read/" + res.data.itemId);
    })
    .catch((err)=>{
      alert(err);
    })
  }

  return <ItemModifyForm  itemId={itemId} item={item} isLoading={isLoading} onModify={onModify} />;
};

export default withRouter(ItemModifyContainer);
