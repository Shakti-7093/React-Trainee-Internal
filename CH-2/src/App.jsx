import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Userprofile from "./Components/UserProfile";
import Form from "./Components/Form";
import NameList from "./Components/NameList";
import Counter from "./Components/Counter";
import Home from "./Components/Home";

const App = () => {
  const name = "Shakti Singh Chundawat";
  const age = 19;
  const names = [
    {
      id: 1,
      name: "Shakti",
      age: 19,
    },
    {
      id: 2,
      name: "Shubham",
      age: 20,
    },
    {
      id: 3,
      name: "Shivam",
      age: 21,
    },
    {
      id: 4,
      name: "Shivansh",
      age: 22,
    },
    {
      id: 5,
      name: "Shivendra",
      age: 23,
    },
    {
      id: 6,
      name: "Shivam",
      age: 24,
    }
  ];

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/userprofile" element={<Userprofile name={name} age={age} />}/>
          <Route path="/NameList" element={<NameList names={names} />}/>
          <Route path="/Form" element={<Form />}/>
          <Route path="/Counter" element={<Counter/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;