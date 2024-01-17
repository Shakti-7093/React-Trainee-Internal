import React from "react";

const PropsFunctionBase = (props) => {
  return (
    <>
      <div
        style={{
          background: "MediumSeaGreen",
          display: "block",
          width: "auto",
          height: "auto",
        }}
      >
        <h1>My name is {props.name}</h1>
        <img src={props.image} alt="images" width={"200px"} />
        <h1>My Technology is {props.techno}</h1>
        <h2>Pass Array :- {props.newArray}</h2>
      </div>
    </>
  );
};

export default PropsFunctionBase;
