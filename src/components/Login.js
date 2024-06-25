import React, { useState } from "react";
import logo from "../assets/biometric.png";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";

const Login = () => {
  let Navigate = useNavigate();
  const handle_Clik = () => {
    Navigate("/dashboardKonten");
  };

  return (
    <form onSubmit="">
      <div className="container bg-hero bg-cover bg-center w-full h-screen flex justify-center items-center">
        <div className="card flex items-center justify-center w-800 h-400 backdrop-blur-sm backdrop-opacity-10 bg-white/10 backdrop-invert rounded-md">
          <div className="w-full flex items-center justify-between">
            <div className="flex ml-24 flex-col justify-center items-center text-lg font-bold text-white">
              <img src={logo} alt="logo" className=" w-48" />
              <p className="mt-2">BIOMETRIC SYSTEM</p>
            </div>

            <div className="mr-20 text-white">
              <h1 className=" text-lg font-semibold">Login</h1>

              <div className="mb-2 mt-4">
                <h1>Username</h1>
                <input
                  onChange=""
                  value=""
                  type="text"
                  className="form-control block w-full px-4 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                  name="email"
                />
              </div>

              <div className="mb-6">
                <h1>Password</h1>
                <input
                  onChange=""
                  value=""
                  type=""
                  className="form-control block w-full px-4 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                  name="password"
                />
              </div>

              <button
                type="submit"
                onClick={handle_Clik}
                className="inline-block px-7 py-2 bg-slate-400 text-white font-medium text-sm leading-snug rounded-2xl shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
