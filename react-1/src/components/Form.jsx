import React, { useState } from 'react'

function SampleForm() {
    const [formData, setFormData] = useState({})
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newFormData = {
            email:email,
            password:password,
            userName:userName,
        }
        setFormData(newFormData)
        console.log("This is the form data", newFormData)
    }
  return (
    <div className='bg-teal-200 space-y-1'>
        <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="">Sample Form</label>
            <input 
            type="text"
            placeholder='Username' 
            className='text-black'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}/>
            <input 
            type="text" 
            className='text-black'
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <input 
            type="text" 
            className='text-black'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <button
            type='submit'
            >
                Submit
            </button>
        </form>
        <p>Form Data {formData.email}</p>
        <p>Form Data {formData.userName}</p>
        <p>Form Data {formData.password}</p>
    </div>
  )
}

export default SampleForm