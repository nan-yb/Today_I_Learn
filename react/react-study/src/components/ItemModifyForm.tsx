import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "../App";
import styles from "../Item.module.css";

interface Props {
  readonly itemId : string , 
  readonly item : Item,
  readonly isLoading : boolean ,
  readonly onModify: (itemName : string , price : number , description : string ,file : File)=>void;
}

function ItemModifyForm({itemId , item , isLoading , onModify} : Props) {

  const [itemName , setItemName] = useState('');
  const [price , setPrice] = useState(0);
  const [description , setDescription] = useState('');
  const [file , setFile] = useState<File>();

  useEffect(() =>{
    if(item) {
      setItemName(item.itemName);
      setPrice(item.price);
      setDescription(item.description)
    }
  } , [item])

  const pictureUrl = (itemId : string) => {
    return (
      "/items/display?itemId=" + itemId + "&timestamp=" + new Date().getTime()
    );
  }

  const handleChangeItemName = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    setItemName(e.target.value)
  } , []);

  
  const handleChangeItemPrice = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    setPrice(parseInt(e.target.value))
  } , []);

  
  const handleChangeItemDescription = useCallback((e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setDescription(e.target.value)
  } , []);

  
  const handleChangeItemFile = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files){
      setFile(e.target.files[0])
    }
  } , []);

  const handleSubmit = useCallback((e)=>{
    e.preventDefault();

    if(file){
      onModify(itemName , price , description , file);
    }
  } , [onModify , itemName , price , description , file])


  return (
    <div className={styles.centered}>
      <h2>상품 수정</h2>
      <form onSubmit={handleSubmit}>
          {isLoading && "로딩중"}
          {!isLoading && item && (
            <>
              <table>
                <tbody>
                  <tr>
                    <td>상품번호</td>
                    <td>
                      <input type="text" value={item.itemId} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td>상품명</td>
                    <td>
                      <input type="text" value={item.itemName} onChange={handleChangeItemName} />
                    </td>
                  </tr>
                  <tr>
                    <td>상품가격</td>
                    <td>
                      <input type="text" value={item.price} onChange={handleChangeItemPrice} />
                      &nbsp;원
                    </td>
                  </tr>
                  <tr>
                    <td>상품파일</td>
                    <td>
                      <input type="file"  onChange={handleChangeItemFile} />
                    </td>
                  </tr>
                  <tr>
                    <td>미리보기</td>
                    <td>
                      <img src={pictureUrl(item.itemId)} alt=""  width="200"  />
                    </td>
                  </tr>
                  <tr>
                    <td>상품설명</td>
                    <td>
                      <textarea rows={5} value={item.description} onChange={handleChangeItemDescription}></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

        <div className={styles.align_centered}>
          <button  type="submit">수정</button>
          <Link to={`/read/${item.itemId}`}>취소</Link>
        </div>
      </form>
    </div>
  );
}

export default ItemModifyForm;
