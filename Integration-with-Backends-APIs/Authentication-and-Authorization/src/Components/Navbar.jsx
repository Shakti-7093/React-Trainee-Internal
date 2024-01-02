import { Link } from "react-router-dom";
import Signin from "./Signin";

function Navbar() {
  const value = localStorage.getItem("email");

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="bg-blue-300 text-white py-3 h-[10vh] px-5 flex justify-between">
        <h3 className="text-3xl font-semibold">Note App</h3>
        <div className="flex">
          <Link to="/" className="mx-4 text-xl font-bold mt-1">
            Home
          </Link>
          <Link to="/company" className="mx-9 text-xl font-bold mt-1">
            Company
          </Link>
          {value ? <button onClick={handleLogOut}>Log Out</button> : <Signin />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
