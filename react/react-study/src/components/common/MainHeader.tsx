import React from "react";
import { Link } from "react-router-dom";
import { MyInfo } from "../../App";
import "@styles/gnb.scss"
import { useDispatch } from "react-redux";
import { setLoginModaldirectLogin, setLoginModalOpen } from "../../modules/modal";

interface Props {
  readonly myInfo: MyInfo | null;
  readonly isAuthorized: boolean;
  readonly onLogin : () => void;
  readonly onLogout: () => void;
}

const fontStyle = {
  fontSize : '42px' ,
  fontFamily : 'logoFont'
}


function MainHeader({ myInfo , isAuthorized , onLogin ,  onLogout }: Props) {
    return (
      <div>
        <div className='navContainer'>
          <nav>
            <div className="flex h-full items-center ">
              <Link to="/">
                <span className="logoFont" style={fontStyle}>Yblog</span>  
              </Link>
            </div>

            <div className="flex h-full items-center">
              {isAuthorized ? (
                <Link to="/admin">
                  <button className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-2 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                    관리자
                  </button>
                </Link>
              ) : null}

              <Link to="/write">
                <button className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-2  py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  글쓰기
                </button>
              </Link>

              <button
                onClick={onLogin}
                className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-2 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {!myInfo ? "로그인" : "로그아웃"}
              </button>
              
            </div>
          </nav>
        </div>
        <hr />
      </div>
    );
  }


export default MainHeader;
