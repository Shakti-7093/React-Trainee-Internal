import React from "react";

const NameList = (props) => {

  const allData = props.data;
  const listItems = allData.map((person) => (
    <li key={person.name}>{person.name}</li>
  ));
  
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
};

export default NameList;