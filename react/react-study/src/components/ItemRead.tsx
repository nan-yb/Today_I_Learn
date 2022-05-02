import React from "react";
import { Link } from "react-router-dom";
import { Item } from "../App";
import styles from "../Item.module.css";

interface Props { 
  readonly itemId : string ; 
  readonly item?: Item;
  readonly isLoading: boolean;
  readonly onRemove : ()=> void;
}

function ItemRead({itemId , item , isLoading , onRemove} : Props) {

  const pictureUrl = () => {
    return (
      "/items/display?itemId=" + itemId + "&timestamp=" + new Date().getTime()
    )
  }

  console.log(pictureUrl());
  
  return (
    <div className={styles.centered}>
      <h2>상품 상세보기</h2>
      {isLoading && "로딩중"}
      {!isLoading && item && (
        <>
          <table>
            <tbody>
              <tr>
                <td>상품번호</td>
                <td>
                  <input type="text" value={item.itemId} readOnly/>
                </td>
              </tr>
              <tr>
                <td>상품명</td>
                <td>
                  <input type="text" value={item.itemName} readOnly/>
                </td>
              </tr>
              <tr>
                <td>상품가격</td>
                <td>
                  <input type="text" value={item.price} readOnly/>
                  &nbsp;원
                </td>
              </tr>
              <tr>
                <td>미리보기</td>
                <td>
                  <img src={pictureUrl()} alt="" width="200" />
                </td>
              </tr>
              <tr>
                <td>상품설명</td>
                <td>
                  <textarea value={item.description} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.align_centered}>
            <Link to={`/edit/${itemId}`}>편집</Link>
            <button onClick={onRemove}>삭제</button>
            <Link to="/">목록</Link>
          </div>
          </>
        )
      }
    </div>
  );
}

export default ItemRead;
