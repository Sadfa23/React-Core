import React, { useState,useEffect } from 'react'
import axios from 'axios';

function DataFetcher() {
    const [info, setInfo] = useState([]);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>res.json())
        .then(data => {
            setInfo(data)
            console.log("Info", info)
            setError(null)
            setLoading(false)
        })
        .catch(err=> {
            setError(err.message)
        }) 
    },[])

  return (
    <div>
    <ul>
      {
        info.map((i)=>{
          return <li key={i.id}>{i.name}</li>
        })
      }
    </ul>
    </div>
  )
}

export default DataFetcher