import React, { useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import Home from "./Home";

function Signin() {
  const [value, setValue] = useState("");
  const handelSigninGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <>
      {value ? (
        <Home />
      ) : (
        <button onClick={handelSigninGoogle}>Signin with Google</button>
      )}
    </>
  );
}

export default Signin;
