import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Search({ username, handleInputChange, setUserData, setError, setUsername }) {
  const history = useNavigate();
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
      setError(null);
      setUsername("");
    } catch (error) {
      setUserData(null);
      setError("User not found");
    }
    history(`/profile/${username}`);
  };
  return (
    <>
      <h1>Github User Profile</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
}

export default Search;
