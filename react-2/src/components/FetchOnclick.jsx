import axios from 'axios'
import React, { useEffect, useState } from 'react'


function FetchOnclick() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    

    const fetchData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(res.data)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    
    return (
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Fetch Users on Button Click</h2>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Load Users
          </button>
    
          {loading && <p className="mt-2">Loading...</p>}
    
          <ul className="mt-4 space-y-2">
            {users.map((u) => (
              <li key={u.id} className="border p-2 rounded">
                {u.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }


export default FetchOnclick