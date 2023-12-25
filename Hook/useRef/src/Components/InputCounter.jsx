import React, { useEffect, useRef, useState } from 'react'

function InputCounter() {
  const [myData, setMyData] = useState("");
  // const [count, setCount] = useState();

  const count = useRef(0);
  console.log(count);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>the number of time render: {count.current}</p>
    </>
  );
}

export default InputCounter;
