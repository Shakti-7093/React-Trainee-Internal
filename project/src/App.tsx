import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./module/Layout";
import UserForm from "./module/User/UserForm";
import UserList from "./module/User/UserList";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<UserList />}></Route>
          <Route path="/add-user" element={<UserForm />}></Route>
          <Route
            path="/edit/:id"
            element={<UserForm isEditForm={true} />}
          ></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;