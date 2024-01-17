import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light h-16 bg-slate-100">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-2xl font-bold">
            Developers
          </Link>
        </div>
        <div className="flex justify-end font-semibold text-lg space-x-7 px-10">
          <Link to="/counter">Counter</Link>
          <Link to="/todo">ToDo</Link>
          <Link to="/singup">Login</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
