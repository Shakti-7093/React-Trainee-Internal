import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <form action="" onSubmit={handelSubmit} className="w-25 mx-auto bg-info-subtle form-control position-absolute top-50 start-50 translate-middle">
      <fieldset>
          <legend className="text-center">Sign Up Here!</legend>
        <div className="input-text">
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="Username"
            aria-describedby="inputGroupPrepend2"
            required
            onChange={changeHandler}
            className="form-control my-3"
          />
        </div>
        <div className="input-text">
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Email"
            aria-describedby="inputGroupPrepend2"
            required
            onChange={changeHandler}
            className="form-control my-3"
          />
        </div>
        <div className="input-text">
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            aria-describedby="inputGroupPrepend2"
            required
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        <div className="inpit-text">
        <button type="submit" className="btn btn-primary my-3">Submit</button>
        </div>
        </fieldset>
      </form>
    </div>
  );
}
