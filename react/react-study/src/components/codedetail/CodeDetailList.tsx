import React from 'react';
import { Link } from 'react-router-dom';
import { CodeDetail } from '../../App';
import styles from "../../Shop.module.css";

interface Props {
  readonly codeDetails : CodeDetail[] | null ; 
  readonly isLoading : boolean ;
}

function CodeDetailList ({ codeDetails , isLoading} : Props){ 
  return ( 
    <div className = {styles.centered}>
      <h2>코드 목록</h2>
      {isLoading && "로딩중 "}
      {!isLoading && codeDetails && (
        <>
          <Link to="/codedetail/create">새로만들기</Link>
          <table className={styles.shop_table}>
            <thead>
              <tr>
                <th align="center" className={styles.w_160}>그룹코드</th>
                <th align="center" className={styles.w_160}>코드값</th>
                <th align="center" className={styles.w_160}>코드명</th>
                <th align="center" className={styles.w_160}>정렬순서</th>
                <th align="center" className={styles.w_160}>등록일시</th>
              </tr>
            </thead>
            <tbody>
              {!codeDetails.length && (
                <tr>
                  <td colSpan ={5}>
                    List is empty
                  </td>
                </tr>
              )}
              {!!codeDetails.length && codeDetails.map((codeDetail) => (
                <tr key={`${codeDetail.groupCode}${codeDetail.codeValue}`}>
                  <td align="center">{codeDetail.groupCode}</td>                  
                  <td align="center">{codeDetail.codeValue}</td>                  
                  <td align="left">
                    <Link to={`/codedetail/read/${codeDetail.groupCode}/${codeDetail.codeValue}`}>
                      {codeDetail.codeName}
                    </Link>
                  </td>
                  <td align="center">{codeDetail.sortSeq}</td>
                  <td align="center">{codeDetail.regDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
};

export default CodeDetailList;