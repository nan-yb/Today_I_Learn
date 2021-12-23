// import { useDispatch } from "react-redux";
import axios from "../../api";
import { useState, useEffect } from "react";
import { setLoginModalClose } from "../../store/modal";

import { useDispatch } from "react-redux";

const Register = () => {
  const [totalCompany, setTotalCompany] = useState([]);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    nickname: "",
    company: "",
  });

  const dispatch = useDispatch();

  const fetchHotels = async () => {
    try {
      // 요청 처음에 초기화
      setTotalCompany([]);

      const data = await axios({
        url: "/company/list",
        method: "get",
      });

      setTotalCompany(data);
      console.log("fetch HotelNames");
    } catch (e) {}
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const createRegister = async () => {
    if (!inputs.email || !inputs.password) {
      alert("다시 입력해주세요.!");
      return;
    }
    const data = await axios({
      url: "/user/create",
      method: "post",
      data: {
        email: inputs.email,
        password: inputs.password,
        company: inputs.company,
        nickname: inputs.nickname,
      },
    });
    // 로그인 에러 캐칭
    if (data.error) {
      return;
    }

    alert("회원가입 성공");

    dispatch(setLoginModalClose());
  };

  return (
    <div>
      <div>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={onChange}
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label for="nickname" className="sr-only">
                  nickname
                </label>
                <input
                  onChange={onChange}
                  name="nickname"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="nickname"
                />
              </div>

              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={onChange}
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div className="relative">
                <select
                  className="block appearance-none w-full  bg-gray-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="company"
                  onChange={onChange}
                >
                  <option value={null}>콘텐츠를 선택하세요.</option>
                  {totalCompany.map((company) => (
                    <option key={company._id} value={company._id}>
                      {company.name}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={createRegister}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
