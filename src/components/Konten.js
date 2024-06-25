import React from "react";
import group1 from "../assets/Group 7.png";
import group2 from "../assets/Group 18.png";
import icon from "../assets/biometric.png";
import { Carousel } from "flowbite-react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

const Konten = () => {
  return (
    <Dashboard>
      <div className=" w-full h-4/5">
        <div className="flex justify-center items-center py-8 gap-20 ">
          <div className=" w-1/3 tracking-normal mb-8 ">
            <div className="p-6 text-white text-sm bg-slate-400/10 backdrop-blur-lg rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img src={icon} alt="" className=" w-20 mb-8 " />
              <h1 className=" font-bold text-2xl tracking-widest uppercase text-white pb-6">
                Registrasi
              </h1>
              <p>Petunjuk Penggunaan :</p>

              <div>
                <div className="flex gap-2 leading-6">
                  1.
                  <p>Wajib mengisi form dengan data yang benar dan tepat.</p>
                </div>

                <div className="flex gap-2 leading-6">
                  2.
                  <p>
                    Wajib mengisi data Face Recognition, Iris
                    Recognition,Fingerprint, dan Signature.
                  </p>
                </div>
              </div>

              <Link to={"/formRegistration"}>
                <div className="text-end mt-10">
                  <button
                    type="button"
                    className="inline-block px-5 py-2 bg-slate-400 text-white font-medium text-sm leading-snug rounded-3xl shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    {" "}
                    Get Start{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className=" w-1/3 tracking-normal mb-8">
            <div className="p-6 text-white text-sm bg-slate-400/10 backdrop-blur-lg rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img src={icon} alt="" className=" w-20 mb-8 " />
              <h1 className=" font-bold text-2xl tracking-widest uppercase text-white pb-6">
                Biometric
              </h1>
              <p>Petunjuk Penggunaan :</p>

              <div>
                <div className="flex gap-2 leading-6">
                  1.
                  <p>Wajib mengisi form dengan data yang benar dan tepat.</p>
                </div>

                <div className="flex gap-2 leading-6">
                  2.
                  <p>
                    Wajib mengisi data Face Recognition, Iris
                    Recognition,Fingerprint, dan Signature.
                  </p>
                </div>
              </div>

              <Link to={"/dataMatch"}>
                <div className="text-end mt-10">
                  <button
                    type="button"
                    className="inline-block px-5 py-2 bg-slate-400 text-white font-medium text-sm leading-snug rounded-3xl shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    {" "}
                    Get Start{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Konten;
