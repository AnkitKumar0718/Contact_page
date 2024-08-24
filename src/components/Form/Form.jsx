import React, { useState } from 'react'
import Button from '../Button/Button'
import './Form.css'


const Form = () => {
    const [name,setName]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [text,setText]=React.useState("") 
    const handleSumbission=(event)=>{
        event.preventDefault();
       setName(event.target[0].value)
       setEmail(event.target[1].value)
       setText(event.target[2].value)
       console.log(name,email,text); 
    }
  return (
    <div className='container2'>
      <div className='form-btn'>
      <Button/>
       <form onSubmit={handleSumbission}>
        <div className='form-container'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name'/>
        </div>
        <div className='form-container'>
        <label htmlFor="e-mail">E-mail</label>
        <input type="text" name='e-mail'/>
        </div>
        <div className='form-container'>
        <label htmlFor="text">Text</label>
        <textarea type="text" name='text'/>
        </div>
        <div style={{display:'flex'}}>
        <button className='btn-4'>SUBMIT</button>
        </div>
        <div>
            {name + " "+ email + " "+text}
        </div>
       </form>
      </div>
      <div className='svg-image'>
      <img src='images/Service 24_7-pana 1.svg'/>
      </div>
    </div>
  )
}

export default Form
