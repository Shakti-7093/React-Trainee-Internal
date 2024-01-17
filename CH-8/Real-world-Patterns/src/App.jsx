import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./Components/Home";
import Counter from "./Components/Counter";
import TodoListing from "./Components/TodoListing";
import Registration from "./Components/Registration";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="todo" element={<TodoListing />} />
            <Route path="singup" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
