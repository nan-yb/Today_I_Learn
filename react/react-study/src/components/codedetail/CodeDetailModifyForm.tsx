import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeDetail, CodeValue } from '../../App';
import {  fetchGroupCodeList } from '../../lib/api';
import styles from "../../Shop.module.css";

interface Props {
  readonly codeDetail : CodeDetail | null;
  readonly isLoading : boolean ; 
  readonly onModify : (groupCode : string , codeValue : string , codeName : string) => void;

}

function CodeDetailModifyForm ({codeDetail , isLoading , onModify}: Props){

  const [ groupCodes , setGroupCodes] = useState<CodeValue[]>([]);
  const [ codeValue , setCodeValue] = useState('');
  const [ codeName , setCodeName] = useState('');

  const handleChangeCodeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeName(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(codeDetail){
      onModify(codeDetail.groupCode , codeValue , codeName);
    }
  }

  const getGroupCodeList = async () => {
    try {
      const response = await fetchGroupCodeList();
      setGroupCodes(response.data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(()=>{
    getGroupCodeList();
  } ,[])

  useEffect(()=>{
    if(codeDetail){
      setCodeValue(codeDetail.codeValue)
      setCodeName(codeDetail.codeName)
    };
  } ,[codeDetail])

  return (
    <div className = {styles.centered}>
      <h2>코드 수정</h2>
      {isLoading && "로딩중 ..."}
      {!isLoading && codeDetail && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>그룹코드</td>
                <td>
                  <select value={codeDetail.groupCode} disabled>
                    {groupCodes.map((groupCode)=> (
                      <option value={groupCode.value} key={groupCode.value} >
                        {groupCode.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>코드값</td>
                <td><input type="text" value={codeValue} disabled /></td>
              </tr>
              <tr>
                <td>코드이름</td>
                <td><input type="text" value={codeName} onChange={handleChangeCodeName} /></td>
              </tr>
            </tbody>
          </table>
          <div className={styles.align_center}>
            <button type="submit">수정</button>
            <Link to={`/codedetail/read/${codeDetail.groupCode}/${codeDetail.codeValue}`}>
              취소
            </Link>
          </div>

        </form>
      )}
    </div> 
  )
};

export default CodeDetailModifyForm;