import React, { useEffect } from "react";
import { auth, provider } from "./Config.jsx";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import Home from "./Home.jsx";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [value, setValue] = useState("");
  const history = useNavigate();
  const handelSigninGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
    history("/list");
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <>
      {value ? (
        <Home />
      ) : (
        <button className="ml-[615px]" onClick={handelSigninGoogle}>Signin with Google</button>
      )}
    </>
  );
}

export default Signin;
