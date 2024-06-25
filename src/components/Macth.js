import React from "react";
import Dashboard from "./Dashboard";
import Iris from "../assets/iris.jpg";
import Face from "../assets/face.jpg";
import Finger from "../assets/finger.jpg";

const Macth = () => {
  return (
    <Dashboard>
      <div className=" flex justify-center gap-8 items-center py-8">
        <div className="rounded-lg shadow-md lg:max-w-sm">
          <img className="object-cover w-full h-48" src={Iris} alt="image" />
          <div className="p-4">
            <h4 className="text-xl font-semibold tracking-tight text-black">
              Deteksi Iris
            </h4>

            <button
              onClick=""
              className=" relative mt-2 text-black bg-slate-400 hover:bg-slate-500 focus:ring-0 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="rounded-lg shadow-md lg:max-w-sm">
          <img className="object-cover w-full h-48" src={Face} alt="image" />
          <div className="p-4">
            <h4 className="text-xl font-semibold tracking-tight text-black">
              Deteksi Wajah
            </h4>

            <button
              onClick=""
              className=" relative mt-2 text-black bg-slate-400 hover:bg-slate-500 focus:ring-0 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="rounded-lg shadow-md lg:max-w-sm">
          <img className="object-cover w-full h-48" src={Finger} alt="image" />
          <div className="p-4">
            <h4 className="text-xl font-semibold tracking-tight text-black">
              Deteksi Sidik Jari
            </h4>

            <button
              onClick=""
              className=" relative mt-2 text-black bg-slate-400 hover:bg-slate-500 focus:ring-0 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Macth;
