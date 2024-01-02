import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateNote() {
  // Add data in API using axios
  const [note, setNote] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/notes").then((res) => {
      setNote(res.data);
    });
  }, []);

  // updating data in api using axios
  const title = useRef("");
  const description = useRef("");
  const date = useRef("");
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/notes/${id}`).then((res) => {
      title.current.value = res.data.title;
      description.current.value = res.data.description;
      date.current.value = res.data.date;
    });
  }, []);

  const UpdateData = () => {
    const update = {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    };

    axios.put(`http://localhost:3000/notes/${id}`, update).then(() => {});
    history("/list");
  };

  return (
    <div className="text-center mb-4">
      <h3 className="text-3xl my-5 font-semibold">Upadate Notes</h3>
      <form action="" className="border w-96 mx-auto p-5 rounded-lg shadow-lg">
        <input type="date" ref={date} name="date" className="border outline-none p-1 rounded-sm w-80 mb-2" />
        <input
          type="text"
          ref={title}
          name="title"
          placeholder="Title here..."
          className="border outline-none p-1 rounded-sm w-80"
        />
        <br />
        <textarea
          rows={4}
          cols={50}
          ref={description}
          name="description"
          placeholder="Discription here..."
          className="border  outline-none p-1 rounded-sm w-80 my-4"
        ></textarea>
        <br />
        <button
          className="border p-1 px-3 bg-blue-400 text-white rounded-md"
          onClick={UpdateData}
        >
          Update Notes
        </button>
      </form>
    </div>
  );
};

export default UpdateNote;