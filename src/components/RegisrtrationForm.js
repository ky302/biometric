import React, { useRef } from "react";
import Dashboard from "./Dashboard";
import icon from "../assets/biometric.png";
import { useEffect, useState } from "react";
import Avatar from "../assets/avatar.png";
import SignatureCanvas from "react-signature-canvas";

const RegisrtrationForm = () => {
  const photoInputRef = useRef(null);
  const [photoName, setPhotoName] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhotoName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const signatureRef = React.useRef();

  const clearSignature = () => {
    signatureRef.current.clear();
  };
  return (
    <Dashboard>
      <div className=" mt-10 mb-10 flex justify-center">
        <div className=" w-full flex flex-col justify-center items-center">
          <form className=" bg-slate-400 to-stone-400 bg-gradient-to-br rounded-md w-4/6 shadow-lg py-4 px-20">
            <div className=" flex items-center gap-48">
              <img src={icon} alt="" className=" w-20 mb-4 " />
              <h1 className=" font-extrabold text-2xl text-slate-800">
                Kop Surat
              </h1>
            </div>
            <div className=" bg-yellow-400 w-full h-1 rounded-lg"></div>
            <div className=" text-center mt-2">
              <h1 className="font-extrabold text-2xl text-slate-800">
                Form Registrasi
              </h1>
              <h2 className="font-semibold text-md text-slate-800">
                Calon Anggota 2023
              </h2>
            </div>

            <div className="flex mt-4 justify-between ">
              <div className=" w-2/4">
                <h1 className="font-semibold text-slate-100">Data Diri</h1>
                <hr />
                <div className="w-full mt-4">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                  />
                </div>
                <div className="w-full mt-4">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Nomor Induk Kependudukan
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block tracking-wide text-slate-100 text-xs font-bold mb-2">
                    Tempat/ Tanggal Lahir
                  </label>

                  <div className=" grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="date"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-white"
                  >
                    Kota
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-red-500 bg-white py-1 px-1 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Jakarta Selatan</option>
                    <option>Jakarta Barat</option>
                    <option>Jakarta Pusat</option>
                    <option>Jakarta Utara</option>
                    <option>Jakarta Timur</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3 mt-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-white"
                  >
                    Provinsi
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-red-500 bg-white py-1 px-1 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Nanggroe Aceh Darussalam</option>
                    <option>Sumatera Utara</option>
                    <option>Sumatera Selatan </option>
                    <option>Sumatera Barat</option>
                    <option>Bengkulu</option>
                    <option>Riau</option>
                    <option>Kepulauan Riau</option>
                    <option>Jambi</option>
                    <option>Lampung</option>
                    <option>Bangka Belitung</option>
                    <option>Kalimantan Barat</option>
                    <option>Kalimantan Timur</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 mt-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-white"
                  >
                    Agama
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-red-500 bg-white py-1 px-1 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Islam</option>
                    <option>Kristen</option>
                    <option>Hindu</option>
                  </select>
                </div>
              </div>

              <div className=" w-2/5 flex flex-col items-center mt-14 ">
                <div className="col-span-6 justify-center ml-2 sm:col-span-4 md:mr-3">
                  <input
                    type="file"
                    className="hidden"
                    ref={photoInputRef}
                    onChange={handleFileChange}
                  />

                  <label
                    htmlFor="photo"
                    className="block text-white text-sm font-bold mb-2 text-center"
                  >
                    Profile Photo <span className="text-red-600"> </span>
                  </label>

                  <div className="text-center">
                    <div
                      className="mt-2"
                      style={{ display: !photoPreview ? "block" : "none" }}
                    >
                      <img
                        src={Avatar}
                        className="w-40 h-48 m-auto shadow"
                        alt="Current Profile"
                      />
                    </div>

                    <div
                      className="mt-2 mx-1"
                      style={{ display: photoPreview ? "block" : "none" }}
                    >
                      <span
                        className="block w-40 h-48 shadow"
                        style={{
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                          backgroundImage: `url('${photoPreview}')`,
                        }}
                      />
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300  font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2"
                      onClick={() => photoInputRef.current.click()}
                    >
                      Select New Photo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-semibold text-slate-100 mt-4">
                Riwayat Pendidikan
              </h1>
              <hr />
            </div>

            <div className=" grid grid-cols-2">
              <div className="w-full mt-4">
                <label
                  className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Sekolah Dasar
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-12 ml-10">
                <div className="col-span-5 mt-4">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Tahun
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="month"
                    min="1999"
                    max="2023"
                  />
                </div>
                <h1 className=" flex justify-center items-center col-span-2">
                  s/d
                </h1>
                <div className=" col-span-5 mt-4">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Tahun
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="month"
                  />
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div className="w-full">
                <label
                  className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Sekolah Menengah Pertama
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-12 ml-10">
                <div className="col-span-5">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Tahun
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="month"
                    min="1999"
                    max="2023"
                  />
                </div>
                <h1 className=" flex justify-center items-center col-span-2">
                  s/d
                </h1>
                <div className=" col-span-5 ">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Tahun
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="month"
                  />
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div className="w-full ">
                <label
                  className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Sekolah Menengah Atas
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-12 ml-10">
                <div className="col-span-5 ">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Tahun
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="month"
                    min="1999"
                    max="2023"
                  />
                </div>
                <h1 className=" flex justify-center items-center col-span-2">
                  s/d
                </h1>
                <div className=" col-span-5 ">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Tahun
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="month"
                  />
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div className="w-full ">
                <label
                  className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Perguruan Tinggi
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-12 ml-10">
                <div className="col-span-5 ">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Tahun
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="month"
                    min="1999"
                    max="2023"
                  />
                </div>
                <h1 className=" flex justify-center items-center col-span-2">
                  s/d
                </h1>
                <div className=" col-span-5 ">
                  <label
                    className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Tahun
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="month"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md mt-4 mb-4">
              <label
                className="block tracking-wide text-slate-100 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Masukkan Tanda Tangan
              </label>
              <SignatureCanvas
                ref={signatureRef}
                penColor="black"
                canvasProps={{
                  className: "border border-gray-300",
                  width: 335,
                  height: 150,
                }}
              />
              <div className="mt-2">
                <button
                  type="button"
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-0 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center inline-flex items-center"
                  onClick={clearSignature}
                >
                  Clear Signature
                </button>
              </div>
            </div>
          </form>
          <div className=" flex justify-end mt-8 w-4/6 ">
            <button
              onClick=""
              className=" relative text-white bg-red-500 hover:bg-red-600 focus:ring-0 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default RegisrtrationForm;
