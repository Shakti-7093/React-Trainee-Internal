import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const history = useNavigate();

    const Home = () => {
        history('/')
    };

    const Company = () => {
        history('/company')
    };

  return (
    <>
      <div className="bg-blue-300 text-white py-3 px-5 flex justify-between">
        <h3 className="text-3xl font-semibold">Note App</h3>
        <div className="flex">
          <Link to="/" className="mx-4 text-xl font-bold mt-1">Home</Link>
          <Link to="/company" className="mx-9 text-xl font-bold mt-1">Company</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
