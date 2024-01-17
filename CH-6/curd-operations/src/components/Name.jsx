import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Name() {
  // Add data in API using axios
  const [note, setNote] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/company").then((res) => {
      setNote(res.data);
    });
  }, []);

  // updating data in api using axios
  const companyName = useRef("");
  const companyLocation = useRef("");
  const date = useRef("");
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/company/${id}`).then((res) => {
      companyName.current.value = res.data.companyName;
      companyLocation.current.value = res.data.companyLocation;
      date.current.value = res.data.date;
    });
  }, []);

  const UpdateCompany = () => {
    const updateCompany = {
      companyName: companyName.current.value,
      companyLocation: companyLocation.current.value,
      date: date.current.value,
    };

    axios.put(`http://localhost:3000/company/${id}`, updateCompany).then(() => {});
    history("/company");
  };

  return (
    <div className="text-center bg-gray-50 h-[90vh] -mt-5">
      <h3 className="text-3xl my-5 font-semibold">Upadate Company Details</h3>
      <form action="" className="border w-96 mx-auto p-5 mt-[8rem] rounded-lg shadow-lg">
        <input
          type="date"
          ref={date}
          name="date"
          className="border outline-none p-1 rounded-sm w-80 mb-2"
        />
        <input
          type="text"
          ref={companyName}
          name="companyName"
          placeholder="Companies Name"
          className="border outline-none p-1 rounded-sm w-80"
        />
        <br />
        <input
          cols={50}
          ref={companyLocation}
          name="companyLocation"
          placeholder="Companies Location"
          className="border  outline-none p-1 rounded-sm w-80 my-4"
        ></input>
        <br />
        <button
          className="border p-1 px-3 bg-green-400 hover:shadow-blue-300 shadow-sm text-white rounded-md"
          onClick={UpdateCompany}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Name;
