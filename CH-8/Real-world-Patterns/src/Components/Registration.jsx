import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux-Store/Slice/authSlice";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegistration = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    history("/");
  };

  return (
    <div className="border bg-slate-200 text-center w-96 mx-auto my-24 p-5">
      <h2 className="text-3xl">Registration</h2>
      <form onSubmit={handleRegistration} className="mt-3">
        <label>
          <input
          placeholder="Enter Username"
            type="text"
            value={formData.username}
            className="p-1 px-3 rounded-sm"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          <input
          placeholder="Enter Email"
            type="email"
            className="p-1 px-3 rounded-sm mt-3"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Enter Password"
            type="password"
            className="p-1 px-3 rounded-sm mt-3"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit" disabled={loading} className="p-1 px-3 bg-green-600 rounded-sm mt-5 text-white">
          Register
        </button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Registration;
