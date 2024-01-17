import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTask, deleteTask } from "../Redux-Store/Slice/taskSlice";
import { Modal } from "react-bootstrap";

function TodoListing() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.data);

  const title = useRef("");
  const date = useRef("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const addTaskHandler = () => {
    const task = {
      title: title.current.value,
      date: date.current.value,
    };

    dispatch(addTask(task))
      .then(() => {
        alert("Task Added Successfully");
        handleClose();
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id))
      .then(() => {
        alert("Task Deleted Successfully");
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <div className="TaskManager rounded">
        <div className="pops bg-light mx-auto mt-5 p-2">
          <div className="d-flex justify-content-between m-0 p-3">
            <div className="">
              <h2 className="text-success">Task Manager App</h2>
              <h3 className="mt-4">
                Number of Task : <b className="text-success">{tasks.length} </b>
              </h3>
            </div>
            <div className="">
              <button className="btn btn-success mt-1" onClick={handleShow}>
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal className="" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Manager App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-control">
            <label>Task</label>
            <br />
            <input
              type="text"
              ref={title}
              placeholder="Task Title**"
              className="form-control"
            />
            <br />

            <label>Date & Time</label>
            <br />
            <input
              type="date"
              ref={date}
              placeholder="Date & Time **"
              className="form-control"
            />
            <br />
            <button
              type="button"
              onClick={addTaskHandler}
              className="form-control bg-dark text-white"
            >
              Submit Task
            </button>
          </form>
        </Modal.Body>
      </Modal>

      <div className="Manage mt-5 mx-auto pt-5">
        <h1 className="text-success">Manage Task</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Date (yy/mm/dd)</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteTaskHandler(item.id)}
                      className="ms-2 p-1 border-0 bg-danger text-light rounded-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoListing;
