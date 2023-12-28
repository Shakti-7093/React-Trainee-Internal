import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Components/Search';
import Results from './Components/Results';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Results/>} />
        <Route path="/" element={<Search/>} />
      </Routes>
    </Router>
  );
};

export default App;
