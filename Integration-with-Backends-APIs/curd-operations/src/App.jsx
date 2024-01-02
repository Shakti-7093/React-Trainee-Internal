import React from "react";
import NoteApp from "./components/NoteApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import UpdateNote from "./components/UpdateNote";
import Navbar from "./components/Navbar";
import CompanyListing from "./components/CompanyListing";
import Name from "./components/Name";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<NoteApp />} />
            <Route path="/list" element={<NoteApp />} />
            <Route path="/list/uplist/:id" element={<UpdateNote />} />
            <Route path="/company/uplist/:id" element={<Name />} />
            <Route path="/company" element={<CompanyListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
