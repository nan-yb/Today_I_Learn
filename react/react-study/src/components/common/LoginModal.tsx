// import LoginModal from "./Login";
// import RegisterModal from "./Register";

import "@styles/modal.scss"
import { useDispatch } from "react-redux";
// import {
//   setLoginModalDirectRegister,
//   setLoginModalClose,
// } from "../../modules/modal";
// import { setUser } from "../../modules/common";
// import axios from "../../api";
import React, { useState } from "react";


const LoginModal = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onRegister = () => {
    // dispatch(setLoginModalDirectRegister());
  };

  const onClickLoginButton = () => {
    // dispatch(setLoginModalClose());
  };

  const onChange = (e : any) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const loginWithEmail = async () => {
    // const data = await axios({
    //   url: "/user/login",
    //   method: "post",
    //   data: {
    //     email: inputs.email,
    //     password: inputs.password,
    //   },
    // });

    // console.log(data);

    // // 로그인 에러 캐칭
    // if (data.error) {
    //   alert(data.msg);
    //   return;
    // }

    // dispatch(setUser(data, data.token));
    // dispatch(setLoginModalClose());
  };

  return (
    <div>
      {
      true &&  (
          <div className="modalOutside">
            <div className="loginModal">
                <div className="foot">
                <div>
                  <section className="flex max-h-full">
                    <main className="w-96 bg-sky-900 p-7 space-y-5 hidden md:block">
                      <header>
                        <nav className="p-3">
                          <h4 className="text-xl text-white font-normal uppercase">
                            Laibrus
                          </h4>
                        </nav>
                      </header>

                      <div className="p-3 my7 space-y-6">
                        <h1 className="text-2xl  text-white font-semibold">
                          The best resource for finding a book
                        </h1>
                        <p className="text-white text-sm">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
                          iusto nostrum sit placeat reprehenderit temporibus, fuga nihil
                          mollitia id culpa?
                        </p>
                      </div>

                      <div>
                        <img src={require("@assets/icon/reader.png")} alt="reader" />
                      </div>
                    </main>

                    <main className="flex-auto bg-white space-y-7 p-2">
                      <header className="py-5 px-5 my-4 flex flex-col items-end justify-items-end">
                        <button onClick={onClickLoginButton} className="closeBtn">
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </header>

                      <div className="flex items-center justify-center p-5">
                        <h4 className="text-3xl font-black text-black">Log in</h4>
                      </div>

                      <section className="flex flex-col items-center justify-center">
                        <div className="email">
                          <div className="relative mt-1">
                            <input
                              name="email"
                              type="email"
                              onChange={onChange}
                              required
                              className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-sky-900 font-light"
                              placeholder="Email address"
                            />

                            <svg
                              className="w-4 h-4 absolute top-0 m-3 text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>

                        <div className="password">
                          <div className="relative mt-1 mb-2">
                            <input
                              name="password"
                              type="password"
                              onChange={onChange}
                              required
                              className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-red-900 font-light"
                              placeholder="Password"
                            />

                            <svg
                              className="w-4 h-4 absolute top-0 m-3 text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>

                        <button
                          onClick={loginWithEmail}
                          className="focus:outline-none bg-sky-700 focus:bg-sky-900 focus:ring focus:ring-sky-100 w-80 h-9 text-white rounded"
                        >
                          Log in
                        </button>
                      </section>

                      <section className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-gray-900">
                          <span> or login with</span>
                        </h2>
                        <div>
                          <ul className="flex items-center justify-around space-x-5">
                            <button>
                              <li className="border border-sky-900 w-10 h-10 rounded flex items-center justify-center text-sky-900 hover:bg-sky-900 hover:text-white">
                                <i className="fab fa-google"></i>
                              </li>
                            </button>

                            <button>
                              <li className="border border-sky-900 w-10 h-10 rounded flex items-center justify-center text-sky-900 hover:bg-sky-900 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                              </li>
                            </button>

                            <button>
                              <li className="border border-sky-900 w-10 h-10 rounded flex items-center justify-center text-sky-900 hover:bg-sky-900 hover:text-white">
                                <i className="fab fa-linkedin"></i>
                              </li>
                            </button>

                            <button>
                              <li className="border border-sky-900 w-10 h-10 rounded flex items-center justify-center text-sky-900 hover:bg-sky-900 hover:text-white">
                                <i className="fab fa-apple"></i>
                              </li>
                            </button>
                          </ul>
                        </div>

                        <div className="sign_up_link space-x-1">
                          <span className="text-sm font-light">Don't have an account?</span>{" "}
                          <button
                            onClick={onRegister}
                            className="text-sky-900 hover:text-sky-900 text-sm font-light hover:underline"
                          >
                            Sign up
                          </button>
                        </div>
                      </section>
                    </main>
                  </section>
                </div>
                </div>

                <div className="foot">
                </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default LoginModal;
