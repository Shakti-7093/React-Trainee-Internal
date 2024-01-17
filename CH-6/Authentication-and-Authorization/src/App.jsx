import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UpdateNote from "./components/UpdateNote";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Components/Navbar";
import Signin from "./Components/Signin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/list/uplist/:id" element={<UpdateNote />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
