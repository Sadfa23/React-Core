import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchUsers() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length < 3) return; // ✅ Only fetch if query has 3+ chars

    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const filtered = res.data.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    };

    fetchData();
  }, [query]); // ✅ Runs when query changes

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Search Users</h2>
      <input
        type="text"
        placeholder="Type at least 3 letters..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-4 py-2 rounded w-full mb-4"
      />

      <ul>
        {results.map((u) => (
          <li key={u.id} className="border p-2 rounded mb-2">
            {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
