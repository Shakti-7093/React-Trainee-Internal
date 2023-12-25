import React from 'react'
import { useState } from "react";

const Form = () => {

  const [formDataList, setformDataList] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
    favCar: "",
  });

  console.log(formDataList);

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setformDataList((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formDataList);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <hr/>
      <h1>Please fill the Form</h1>
        <form onSubmit={submitHandler} style={{ marginTop: "2rem" }}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formDataList.firstName}
          style={{ marginBottom: "1rem", border: "none" }}
        />
        
        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formDataList.lastName}
          style={{ marginBottom: "1rem", border: "none" }}
        />

        <br />

        <input
          type="email"
          placeholder="email"
          onChange={changeHandler}
          name="email"
          value={formDataList.email}
          style={{ marginBottom: "1rem", border: "none" }}
        />

        <br />

        <textarea
          placeholder="Enter your comments"
          onChange={changeHandler}
          name="comments"
          value={formDataList.comments}
          style={{ marginBottom: "1rem", border: "none", background: "lightgray" }}
        />

        <br />

        <label htmlFor="isVisible">Am I Visible?</label>{" "}
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formDataList.isVisible}
          style={{ marginBottom: "1rem", border: "none" }}
        />

        <br />

        <fieldset>
          <legend>MODE : </legend>
          <label htmlFor="online mode">online mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="online mode"
            value={"online mode"}
            checked={formDataList.mode === "online mode"}
            style={{ marginBottom: "1rem", border: "none" }}
          />

          <br />

          <label htmlFor="offline mode">offline mode</label>{" "}
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="offline mode"
            value={"offline mode"}
            checked={formDataList.mode === "online mode"}
            style={{ marginBottom: "1rem", border: "none", background: "lightgray" }}
          />
        </fieldset>

        <br />

        <label htmlFor="favCar">Select One Car : </label>{" "}

        <select
          name="favCar"
          id="favCar"
          onChange={changeHandler}
          style={{ marginBottom: "1rem" }}
          value={formDataList.favCar}
          required
        >{"   "}
          <option value="None">None</option>
          <option value="Nissan GT-R">Nissan GT-R</option>
          <option value="Toyota Supra">Toyota Supra</option>
          <option value="Lamborghini Aventador">Lamborghini Aventador</option>
          <option value="McLaren 720S">McLaren 720S</option>
        </select>

        <br />

        <button className='btn btn-secondary btn-lg' style={{ marginBottom: "1rem" }}>Submit</button>
      </form>
    </div>
  )
}

export default Form