import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetcher2() {
    const [info, setInfo] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setInfo(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(true)
        })
    })
    
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

export default DataFetcher2