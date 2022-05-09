import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../../Shop.module.css";

interface Props {
  readonly onRegister : (groupCode :string , groupName : string) => void;
}

function CodeGroupRegisterForm ({ onRegister }: Props){

  const [ groupCode , setGroupCode ] = useState("");
  const [ groupName , setGroupName] = useState("");

  const handleChangeGroupCode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupCode(e.target.value);
  }, [])

  const handleChangeGroupName = useCallback((e: React.ChangeEvent<HTMLInputElement>)=> {
    setGroupName(e.target.value);
  } , [])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onRegister(groupCode , groupName);
  } , [groupCode , groupName , onRegister]);

  return ( 
    <div className = {styles.centered}>
      <h2>코드그룹 등록</h2>
      
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>그룹코드</td>
              <td>
                <input type="text" value={groupCode} onChange={handleChangeGroupCode}></input>
              </td>
            </tr>
            <tr>
              <td>코드그룹명</td>
              <td>
                <input type="text" value={groupName} onChange={handleChangeGroupName}></input>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.align_center}>
          <button type="submit">등록</button>
          <Link to="/codegroup">취소</Link>
        </div>
      </form>

    </div>
  )
};

export default CodeGroupRegisterForm;