import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import Avatar from 'react-avatar-edit'

const Macth = () => {
  const [src, setSrc] = useState(null)
  const [preview, setPreviw] = useState(null)

  const onClose =()=>{
    setPreviw(null)
  }

  const onCrop = view =>{
    setPreviw(view)
  }

  useEffect(() =>{
    console.log(preview)
  },[preview])
 
  return (
    <Dashboard>
      <Avatar
      width={400}
      height={300}
      onCrop={onCrop}
      onClose={onClose}
      src={src}
      />
      {preview && <img src={preview} alt="" />}
      
    </Dashboard>
  )
}

export default Macth