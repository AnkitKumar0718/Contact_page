import React from 'react'
import './Button.css'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Button = () => {
    const handleClick=()=>{
        console.log('hello');
    }
  return (
    <div className='container'>
    <div className='btn'>
      <button onClick={handleClick} className='btn-1'> <MdMessage fontSize='20px' /> VIA MESSAGE</button>
      <button className='btn-2'> <MdCall fontSize='20px' />  VIA CALL</button>
    </div>
    <button className='btn-3'> <IoIosMail fontSize='20px' /> VIA E-MAIL</button>
    </div>
  )
}

export default Button
