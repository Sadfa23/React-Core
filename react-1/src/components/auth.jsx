import React, { useState } from 'react'

function Auth() {
    const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div>
        <button
        className='bg-blue-500 text-white p-2 rounded-2xl shadow-2xl'
        onClick={()=>setLoggedIn(!loggedIn)}>
            Switch auth
        </button>
        {
            loggedIn ? (
                <p className='bg-green-400 text-white p-0.5'>You are logged in</p>
            ): (
                <p className='bg-red-500 text-white p-0.5'>You are NOT logged in</p>
            )
        }
    </div>
  )
}

export default Auth