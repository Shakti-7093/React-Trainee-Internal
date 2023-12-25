/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useCallback } from "react";

function SquaredSum() {
  const [numbers, setNumbers] = useState([]);
  
  const memory = useMemo(() => {
    return numbers.reduce((acc, num) => acc + num * num, 0);
  }, [numbers]);

  const handleAddNumber = useCallback(() => {
    const newNumber = parseInt(prompt("Enter a number:"), 10);
    if (!isNaN(newNumber)) {
      setNumbers((prevNumbers) => [...prevNumbers, newNumber]);
    }
  }, []);

  const handleClearList = useCallback(() => {
    setNumbers([]);
  }, []);

  return (
    <div>
      <h2>List of Numbers</h2>
      <ul style={{listStyle:'none'}}>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={handleAddNumber}>Add</button>
      <button onClick={handleClearList}>Reset</button>
      <div>
        <h2>Sum of square of given numbers</h2>
        <p>{memory}</p>
      </div>                                                        
      <hr/>
    </div>
  );
}

export default SquaredSum;