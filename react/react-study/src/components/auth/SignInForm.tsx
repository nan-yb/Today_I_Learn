import React, { useState, useCallback } from "react";
import styles from "../../Shop.module.css";
import { Link } from "react-router-dom";

interface Props {
  readonly onSignIn: (userId: string, password: string) => void;
}

function SignInForm({ onSignIn }: Props) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);

  const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      onSignIn(userId, password);
    },
    [userId, password, onSignIn]
  );

  return (
    <div className={styles.centered}>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input type="text" value={userId} onChange={handleChangeUserId} />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input type="password" value={password} onChange={handleChangePassword} />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <button type="submit">로그인</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <p><Link to="/signup">회원가입</Link></p>
    </div>
  );
}

export default SignInForm;
