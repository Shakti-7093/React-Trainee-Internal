import { useState } from "react";
import { debounce } from "lodash";
import axios from "axios";

function SearchThrottling() {
  const [query, setQuery] = useState("");
  const [serachResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const throttledSearch = debounce(async (searchQuery) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`,
        { params: { q: searchQuery } }
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, 1000);

  const handleSearch = (e) => {
    const newQuary = e.target.value;
    setQuery(newQuary);
    throttledSearch(newQuary);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={handleSearch}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {serachResult.map((user, index) => {
          return <li key={index}>{user.name}</li>
        })}
      </ul>
    </div>
  );
}

export default SearchThrottling;
