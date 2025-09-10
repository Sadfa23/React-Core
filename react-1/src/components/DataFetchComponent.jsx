import React, { useState, useEffect } from 'react'
import axios from 'axios'

const getData = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products')
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("Error fetching data", error)
    }
}

function DataFetchComponent() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const dataFetched = getData()
        setData(dataFetched)
    }, [])
  return (
    <div>
        
           
    </div>
  )
}

export default DataFetchComponent