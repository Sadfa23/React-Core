import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div className='flex space-x-3.5 mt-2.5'>
        <button
        onClick={()=>setCount(count-1)}
        className='bg-red-600 text-white p-2 '
        >-
        </button>
        <button
        onClick={()=> setCount(count + 1)}
        className='bg-blue-600 text-white p-2'
        >+
        </button>
        <button
        onClick={()=> setCount(0)}
        className='bg-green-600 text-white p-2'
        >Reset
        </button>
        <div className='px-2.5 bg-green-300'>
            {count}
        </div>
    </div>
  )
}

export default Counter