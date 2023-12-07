import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "tw-elements";

const Dashboard = (props) => {
  const [row, setRow] = useState(false);
  let navigate = useNavigate();
  const onSubmit = () => {
    Cookies.remove("token");
    navigate("/");
  };

  // window.addEventListener('click', (e)=>{
  //   console.log(e.target === menuRef.current);
  // })

  return (
    <form>
      <div className="container w-full h-screen overflow-auto relative bg-gradient-to-br from-slate-700 to-stone-400 ">
        <div className="flex justify-between px-24 pt-8">
          <h1 className=" font-bold text-white cursor-pointer text-lg uppercase">
            Biometric System
          </h1>

          <div className=" flex gap-20 justify-center items-center">
            <Link to={"/dashboardKonten"}>
              <h1 className=" font-semibold text-white cursor-pointer text-sm">
                Beranda
              </h1>
            </Link>

            <div>
              <button
                onClick={() => setRow(!row)}
                className=" relative text-white bg-slate-400 hover:bg-slate-500 focus:ring-0 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                Profile{" "}
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}

              <div className=" flex justify-center">
                <div
                  className={`${
                    row ? "block" : "hidden"
                  } absolute text-left z-30 ml-6 lg:ml-0 font-kumb flex-col rounded-xl shadow-xl bg-white py-2 mt-2`}
                >
                  <div className="px-4 py-2 text-sm text-gray-900 dark:text-white">
                    <div>Ahmad</div>
                    <div className="font-medium truncate">
                      name@flowbite.com
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div className=" block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Setting
                    </div>
                    <div className=" block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Setting
                    </div>
                  </div>
                  <div className="py-1">
                    <a
                      onClick={onSubmit}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <button onClick={onSubmit} type="submit" className="inline-block px-7 py-2 bg-slate-400 text-white font-medium text-sm leading-snug rounded-2xl shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out">
                Log Out
              </button> */}
          </div>
        </div>
        {props.children}
      </div>
    </form>
  );
};

export default Dashboard;
