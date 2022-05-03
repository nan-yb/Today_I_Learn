import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";

function MenuBar() {
  return (
    <div className={styles.centered}>
      <table>
        <tbody>
          <tr>
            <td width="120"><Link to="/">홈</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MenuBar;
