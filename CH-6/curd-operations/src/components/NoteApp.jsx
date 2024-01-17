import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function NoteApp(){
  const history = useNavigate();
  // Get data from input
  const date = useRef("");
  const title = useRef("");
  const description = useRef("");

  const addTask = () => {
    let insert = {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    };

    axios.post("http://localhost:3000/notes", insert).then(() => {});
  };

  //   Get data from API
  const [data, setData] = useState([]);

  const listData = () => {
    axios.get("http://localhost:3000/notes").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    listData();
  }, []);

  // Delete note
  const deleteNote = (id) => {
    axios.delete(`http://localhost:3000/notes/${id}`).then((res) => {
      console.warn(res);
      listData();
    });
  };
  return (
    <>
      <div className="text-center mb-5">
        <h3 className="text-3xl my-5 font-semibold">Note Taking App</h3>
        <form
          action=""
          className="border w-96 mx-auto p-5 rounded-xl shadow-lg"
        >
          <input type="date" ref={date} className="border border-gray-400 outline-none p-1 rounded-md w-80 mb-2" />
          <input
            type="text"
            ref={title}
            placeholder="Title here..."
            className="border border-gray-400 outline-none p-1 w-80 text-center rounded-md"
          />
          <br />
          <textarea
            rows="4"
            ref={description}
            placeholder="Discription here..."
            className="border border-gray-400 outline-none p-1 rounded-md w-80 my-4"
          ></textarea>
          <br />
          <button
            className="hover:border p-1 px-3 bg-green-600 shadow-md hover:shadow-blue-300 text-white rounded-md"
            onClick={addTask}
          >
            Add Note
          </button>
          <button className="hover:border p-1 px-3 ms-4 bg-red-700 hover:shadow-red-300 shadow-md text-white rounded-md">
            Reset
          </button>
        </form>
      </div>
      <hr />
      <div className="text-center mt-5">
        <h3 className="text-3xl font-semibold">
          Lists of Notes
        </h3>
        <h3 className="text-[20px] mb-3 text-right mx-24 -mt-9">
          Number of Notes{" "}
          <span className="text-2xl font-bold text-green-900">
            {data.length}
          </span>
        </h3>
        <table className="mx-auto border">
          <thead>
            <tr className="border">
              <th className="border-r">No.</th>
              <th className="border-r">Date</th>
              <th className="border-r">Title</th>
              <th className="border-r">Discription</th>
              <th>Delete / Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id} className="border w-80 mb-3">
                  <td className="w-28 border-r">{item.id}</td>
                  <td className="w-36 border-r">{item.date}</td>
                  <td className="w-40 border-r">{item.title}</td>
                  <td className="w-[40rem] border-r">{item.description}</td>
                  <td className="w-28 border-r">
                    <button
                      className="mx-2 my-2 text-lg text-red-500"
                      onClick={() => deleteNote(item.id)}
                    >
                      <MdDeleteForever />
                    </button>
                    <button
                      className="ml-4 text-green-500 text-lg"
                      onClick={() => history(`/list/uplist/${item.id}`)}
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NoteApp;
