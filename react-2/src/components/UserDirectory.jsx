import React, { useEffect, useState } from 'react'
import axios from "axios"

function UserDirectory() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(res.data);
                setFilteredUsers(res.data)
                setLoading(false)
            } catch (error) {
                setError(error.message);
                setLoading(false)
            }
        }

        fetchData()
    },[])

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
      
        setFilteredUsers(
          users.filter((user) =>
            user.name.toLowerCase().includes(value.toLowerCase())
          )
        );
      };
      

    if (loading) return <p>Loading users ...</p>
    if (error) return <p>{error}</p>
    
  return (
    <div className="max-w-3xl mx-auto p-6">
    <h2 className="text-2xl font-bold text-center mb-6">👥 User Directory</h2>

    {/* 🔍 Search Input */}
    <input
      type="text"
      placeholder="Search users by name..."
      value={search}
      onChange={handleSearch}
      className="w-full px-4 py-2 mb-6 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />

    {/* 📝 Display Users */}
    <ul className="space-y-4">
      {filteredUsers.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow rounded-lg border hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg text-gray-800">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">{user.company.name}</p>
        </li>
      ))}
    </ul>

    {/* Empty state */}
    {filteredUsers.length === 0 && (
      <p className="text-center text-gray-400 mt-6">No users found.</p>
    )}
  </div>
  )
}

export default UserDirectory