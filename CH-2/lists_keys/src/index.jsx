import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NameList from "./Components/NameList";
const details = [
  { name: "Mukesh" },
  { name: "Rajesh" },
  { name: "Sneha" },
  { name: "Amit" },
  { name: "Raj" },
  { name: "Deep" },
  { name: "Yash" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NameList data={details} />
  </React.StrictMode>
);

reportWebVitals();
