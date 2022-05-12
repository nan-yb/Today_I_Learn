import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchJobCodeList } from "../../lib/api";
import styles from "../../Shop.module.css";
import { CodeValue } from "../../App";

interface Props {
  readonly onSignUp: (userId: string, userName: string, password: string, job: string) => void;
}

function SignUpForm({ onSignUp }: Props) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [job, setJob] = useState("00");
  const [jobCodes, setJobCodes] = useState<CodeValue[]>([]);

  const handleChangeUserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);

  const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleChangeUserName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  const handleChangeJob = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setJob(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onSignUp(userId, userName, password, job);
    },
    [userId, userName, password, job, onSignUp]
  );

  const getJobCodeList = async () => {
    try {
      const response = await fetchJobCodeList();
      setJobCodes(response.data);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getJobCodeList();
  }, []);

  return (
    <div className={styles.centered}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input
                  type="text"
                  value={userId}
                  onChange={handleChangeUserId}
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </td>
            </tr>
            <tr>
              <td>사용자명</td>
              <td>
                <input
                  type="text" 
                  value={userName}
                  onChange={handleChangeUserName}
                />
              </td>
            </tr>
            <tr>
              <td>직업</td>
              <td>
                <select onChange={handleChangeJob} value={job}>
                  {jobCodes.map((jobCode) => (
                    <option value={jobCode.value} key={jobCode.value}>{jobCode.label}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <button type="submit">회원가입</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <p><Link to="/signin">로그인</Link></p>
    </div>
  );
}

export default SignUpForm;
