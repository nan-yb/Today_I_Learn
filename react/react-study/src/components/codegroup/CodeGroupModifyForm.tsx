import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../../Shop.module.css";
import {CodeGroup} from "../../App";

interface Props {
  readonly codeGroup : CodeGroup | null;
  readonly isLoading : boolean;
  readonly onModify : (groupCode : string , groupName : string) => void;
}

function CodeGroupModifyForm ({ codeGroup , isLoading , onModify}: Props){ 

  const [ groupName , setGroupName ] = useState('');

  const handleChangeGroupName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(codeGroup) {
      onModify(codeGroup.groupCode , groupName);
    }
  };

  useEffect(() =>{
    if(codeGroup) {
      setGroupName(codeGroup.groupName);
    }
  } , [codeGroup]);


  return (
    <div className = {styles.centered}>
      <h2>코드그룹 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && codeGroup && (
        <>
          <form onSubmit = {handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>코드그룹코드</td>
                  <td>
                    <input value={codeGroup.groupCode} type="text" disabled/>
                  </td>
                </tr>

                <tr>
                  <td>코드그룹명</td>
                  <td>
                    <input value={codeGroup.groupName} type="text" onChange={handleChangeGroupName} disabled/>
                  </td>
                </tr>

              </tbody>
            </table>

            <div className = {styles.align_center}>
              <button type="submit">수정</button>
              <Link to={`/codegroup/read/${codeGroup.groupCode}`}>취소</Link>
            </div>
          </form>
        </>
      )}
    </div>
  ) 
};

export default CodeGroupModifyForm;