import { useEffect, useState } from "react";

const Debounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Hooks = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchTerm = Debounce(search, 500);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?q=${searchTerm}`)
      .then(response => response.json())
      .then(json => setSearchResults(json));
      
    console.log('Performing API call with debounced search term:', searchTerm);
  }, [searchTerm]);

  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChangeInput}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Hooks;
