import React from "react";
import Dashboard from "./Dashboard";
import icon from "../assets/biometric.png";
import { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";

const RegisrtrationForm = () => {
  // const [src, setSrc] = useState('')
  // const [preview, setPreviw] = useState('')
  // const [payload, setPayload] = useState({
  //   namaLengkap: '',
  //   NIK: '',
  //   TTL: ''
  // })

  // const namaDepan = 'Ahmad'
  // const namaBelakang = 'Subekhty'

  // const concat = setPayload.namaLengkap(namaDepan + ' ' + namaBelakang)

  // const nama = 'Subek'
  // const dataSiswa = {
  //   nama: 'subek',
  //   kelas: '10A'
  // }
  // const hobby = ['berenang', 'futsal', 'dsb']

  // const onClose =()=>{
  //   setPreviw(null)
  // }

  // const onCrop = view =>{
  //   setPreviw(view)
  // }

  // useEffect(() =>{
  //   console.log(preview)
  // },[preview])
  return (
    <Dashboard>
      <div className=" mt-10 flex justify-center">
        <div className=" w-full flex justify-center items-center">
          <form className=" bg-slate-400 to-stone-400 bg-gradient-to-br rounded-md w-4/6 shadow-lg py-4 px-20">
            <div className=" flex items-center gap-44">
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
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kota
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-1 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Agama
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-1 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Islam</option>
                    <option>Kristen</option>
                    <option>Hindu</option>
                  </select>
                </div>
              </div>

              <div className=" w-2/5 flex flex-col justify-center items-center mt-8">
                <div className=" text-center bg-slate-900 rounded-sm border-none ">
                  <div className=" bg-slate-100 rounded-sm flex justify-center items-center border-2 w-152 h-227">
                    {/* <Avatar
      width={400}
      height={300}
      onCrop={onCrop}
      onClose={onClose}
      src={src}
      />
      {preview && <img src={preview} alt="" />} */}
                  </div>
                  <p className=" text-white text-10 font-semibold py-1">
                    Maximum upload file size: 8 MB
                  </p>
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
              <div className="w-full mt-4">
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
              <div className="w-full mt-4">
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
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default RegisrtrationForm;
