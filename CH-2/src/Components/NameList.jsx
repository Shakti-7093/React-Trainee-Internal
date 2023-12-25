import React from "react";

const Namelist = ({ names }) => {
  return (
    <div>
    <hr/>
      <h2>List of Names</h2>
      <ul style={{display:'flex', flexDirection:'row',justifyContent:'space-around '}}>   

        {names.map((name) => {
          return (
            <p key={name.id}>
              <h3>Name: {name.name}</h3>
              <h3>Age: {name.age}</h3>
            </p>
          )
        })}
      </ul>
    <hr/>
    </div>
  );
};

export default Namelist;