import React, { useState } from "react";
import logo from "../assets/biometric.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
// import Visible from "./visible";

const Login = () => {
  let Navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(input);
    let { email, password } = input;

    axios
      .post(`https://backendexample.sanbersy.com/api/user-login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        let { token } = res.data;
        Cookies.set("token", token, { expires: 1 });
        Navigate("/dashboardKonten");
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form onSubmit={handleLogin}>
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
                  onChange={handleChange}
                  value={input.email}
                  type="text"
                  className="form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                  name="email"
                  placeholder="Username"
                />
              </div>

              <div className="mb-6">
                <h1>Password</h1>
                <input
                  onChange={handleChange}
                  value={input.password}
                  type={showPassword ? "text" : "password"}
                  className="form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                  name="password"
                  placeholder="Password"
                />
                {/* <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className=" text-white focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button> */}
                <label className="inline-flex items-center cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                    className="form-checkbox text-red-400 h-3 w-3"
                  />
                  <span className="text-white ml-2">Show Password</span>
                </label>
              </div>

              <button
                type="submit"
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
