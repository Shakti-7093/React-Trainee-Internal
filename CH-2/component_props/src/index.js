import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ClassBase from "./Components/ClassBase";
import FunctionBase from "./Components/FunctionBase";
import PropsClassBase from "./Components/PropsClassBase";
import PropsFunctionBase from "./Components/PropsFunctionBase";
import img1 from "./assets/images/IMG-20180909-WA0007.jpg";
import img from "./assets/images/IMG-20180912-WA0001.jpg";
let myArray = ["HTML ", "CSS ", "JavaScript "];
let myObj = {
  firstName: "Paras",
  lastName: "Vekariya",
  email: "Paras1245@gmail.com",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClassBase />
    <FunctionBase />
    <PropsClassBase
      name="Paras Vekariya"
      image1={img1}
      techno="Web Designing"
      newObj={myObj}
    />
    <PropsFunctionBase
      name="Paras"
      image={img}
      techno="React JS"
      newArray={myArray}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
