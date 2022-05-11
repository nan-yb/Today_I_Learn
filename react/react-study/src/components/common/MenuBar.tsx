import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";

interface Props {
  readonly isAuthorized: boolean;
  readonly isAdmin: boolean;
}

function MenuBar({ isAuthorized, isAdmin }: Props) {
  return (
    <div className={styles.centered}>
      <table>
        <tbody>
          <tr>
            {isAuthorized && isAdmin && (
              <>
                <td width="120"><Link to="/">홈</Link></td>
                <td width="120"><Link to="/codegroup">코드그룹관리</Link></td>
                <td width="120"><Link to="/codedetail">코드관리</Link></td>
              </>
            )}
            {isAuthorized && !isAdmin && (
              <>
                <td width="120"><Link to="/">홈</Link></td>
              </>
            )}
            {!isAuthorized && (
              <>
                <td width="120"><Link to="/">홈</Link></td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MenuBar;
