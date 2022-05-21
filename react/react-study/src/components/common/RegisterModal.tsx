import "@styles/modal.scss"
import { useState, useEffect } from "react";

// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import reader from "@assets/icon/reader.png";
import { useDispatch } from "react-redux";
import { setLoginModalClose } from "../../modules/modal";

const RegisterModal = () => {
  // const [totalCompany, setTotalCompany] = useState([]);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    nickname: "",
    company: "",
  });

  const dispatch = useDispatch();

  const onClickCloseButton = () => {
    dispatch(setLoginModalClose());
  };


  const fetchHotels = async () => {
    try {
      // 요청 처음에 초기화
      // setTotalCompany([]);

      // const data = await axios({
      //   url: "/company/list",
      //   method: "get",
      // });

      // setTotalCompany(data);
      console.log("fetch HotelNames");
    } catch (e) {}
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const onChange = (e : any) => {
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
    // const data = await axios({
    //   url: "/user/create",
    //   method: "post",
    //   data: {
    //     email: inputs.email,
    //     password: inputs.password,
    //     company: inputs.company,
    //     nickname: inputs.nickname,
    //   },
    // });
    // // 로그인 에러 캐칭
    // if (data.error) {
    //   return;
    // }

    // alert("회원가입 성공");

    // dispatch(setLoginModalClose());
  };

  return (
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
                  <img src={reader} alt="reader" />
                </div>
              </main>

              <main className="flex-auto bg-white space-y-7 p-2">
                <header className="py-5 px-5 my-4 flex flex-col items-end justify-items-end">
                  <button onClick={onClickCloseButton} className="closeBtn">
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
                  <h4 className="text-3xl font-black text-black">Sign Up</h4>
                </div>

                <section className="flex flex-col items-center justify-center">
                  <div>
                    <div className="relative mt-1">
                      <input
                        onChange={onChange}
                        name="email"
                        type="email"
                        required
                        className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-sky-900 font-light"
                        placeholder="Email address"
                      />

                      <svg
                        className="w-4 h-4 absolute top-0 m-3 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="relative mt-1 mb-2">
                      <input
                        onChange={onChange}
                        name="nickname"
                        type="text"
                        required
                        className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-sky-900 font-light"
                        placeholder="nickname"
                      />

                      <svg
                        className="w-4 h-4 absolute top-0 m-3 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="relative mt-1 mb-2">
                      <input
                        name="password"
                        type="password"
                        onChange={onChange}
                        required
                        className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-sky-900 font-light"
                        placeholder="Password"
                      />

                      <svg
                        className="w-4 h-4 absolute top-0 m-3 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="">
                        <label
                          className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                        >
                          회사
                        </label>
                      </div>

                      <div className="relative mt-1 mb-2">
                        {/* <select
                          className="block appearance-none w-full  bg-gray-200 border border-gray-900 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          name="company"
                          onChange={onChange}
                        >
                          <option value={null}>콘텐츠를 선택하세요.</option>
                          {totalCompany.map((company) => (
                            <option key={company._id} value={company._id}>
                              {company.name}
                            </option>
                          ))}
                        </select> */}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={createRegister}
                    className="focus:outline-none bg-sky-900 focus:bg-sky-900 focus:ring focus:ring-sky-100 w-80 h-9 text-white rounded"
                  >
                    Sign Up
                  </button>
                </section>
              </main>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
