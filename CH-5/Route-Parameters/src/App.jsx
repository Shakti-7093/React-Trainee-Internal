import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Search from "./Components/Search";
import Profile from "./Components/Profile";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Search
                username={username}
                handleInputChange={handleInputChange}
                setUserData={setUserData}
                setError={setError}
                setUsername={setUsername}
              />
            }
          />
          <Route
            path="/profile/:username"
            element={<Profile userData={userData} error={error} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// AIzaSyBYoN9oxMNmeociY6SEBXyGZFAwJQEOiGU