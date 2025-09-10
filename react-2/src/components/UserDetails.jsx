import React, { useEffect, useState } from "react";
import axios from "axios";

function UserDetails() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUser(res.data);
    };

    fetchUser();
  }, [userId]); // ✅ Refetches when userId changes

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Details</h2>

      {/* Change ID */}
      <select
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border px-4 py-2 rounded mb-4"
      >
        {[1, 2, 3, 4, 5].map((id) => (
          <option key={id} value={id}>
            User {id}
          </option>
        ))}
      </select>

      {user && (
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold">{user.name}</h3>
          <p>{user.email}</p>
          <small>{user.company.name}</small>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
