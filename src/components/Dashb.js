export const regData = [
    {
        ket : 'Petunjuk Penggunaan :'
    },
    {
        ket1 :  '1. Wajib mengisi form dengan data yang benar dan tepat.',
        ket2 :  '2. Wajib mengisi data Face Recognition, Iris Recognition,Fingerprint, dan Signature.'
    },
    {
        ket3 :  '1. Wajib mengisi form dengan data yang benar dan tepat.',
        ket4 :  '2. Wajib mengisi data Face Recognition, Iris Recognition,Fingerprint, dan Signature.'
    },
    {
        ket5 :  '1. Wajib mengisi form dengan data yang benar dan tepat.',
        ket6 :  '2. Wajib mengisi data Face Recognition, Iris Recognition,Fingerprint, dan Signature.'
    }
]


import React, { useState } from 'react'
import Dashboard from './Dashboard'
import icon from "../assets/icon.png"

const Macth = () => {
  const [image, setImage] = useState("")
  return (
    <Dashboard>
      <div className='profile_Img text-center p-4'>
        <div className="flex flex-col justify-center items-center">
          <img style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4x solid green",
          }} 
          src={icon} alt="" />
          
          <input type="file" accept='/image/*' onChange={(event)=>{
            const file = event.target.files[0]
            if(file && file.type.substring(0.5)==="image"){
              setImage(file)
            }else{
              setImage(null)
            }
          }}/>
        </div>
      </div>
    </Dashboard>
  )
}

export default Macth