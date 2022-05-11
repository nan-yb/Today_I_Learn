import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeValue } from '../../App';
import { fetchGroupCodeList } from '../../lib/api';
import styles from "../../Shop.module.css";

interface Props {
  readonly onRegister : (groupCode : string , codeValue : string , codeName : string) => void;
}

function CodeDetailRegisterForm ({onRegister}: Props){
  const [groupCode , setGroupCode] = useState("A01");
  const [groupCodes , setGroupCodes] = useState<CodeValue[]>([]);
  const [codeValue , setCodeValue] = useState("");
  const [codeName , setCodeName] = useState("");

  const handleChangeGroupCode = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroupCode(e.target.value);
  } , [])

  const handleChangeCodeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValue(e.target.value);
  } , [])

  const handleChangeCodeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeName(e.target.value);
  } , [])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    onRegister(groupCode , codeValue , codeName )
  } , [groupCode , codeValue , codeName , onRegister])

  const getGroupCodeList = async () => {
    try {
      const response = await fetchGroupCodeList();
      console.log(response.data);
      setGroupCodes(response.data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(()=>{
    getGroupCodeList()
  } , [])

  return (
    <div className={styles.centered}>
      <h2>코드 등록</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>그룹코드</td>
              <td>
                {/* <select onChange = {handleChangeGroupCode} value={groupCode}>
                  {
                    groupCodes.map((groupCode) => (
                      <option value={groupCode.value} key={groupCode.value}>
                        {groupCode.label}
                      </option>
                    ))
                  }
                </select> */}
              </td>
            </tr>
            <tr>
              <td>코드값</td>
              <td>
                <input type="text" value={codeValue} onChange={handleChangeCodeValue}/>
              </td>
            </tr>
            <tr>
              <td>코드명</td>
              <td>
                <input type="text" value={codeName} onChange={handleChangeCodeName}/>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.align_center}>
          <button type="submit">등록</button>
          <Link to="/codedetail">취소</Link>
        </div>
      </form>

    </div>
  )
};

export default CodeDetailRegisterForm;