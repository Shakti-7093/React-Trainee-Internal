import React, { useState } from "react";

const ToDoList = () => {
  const [todolist, setTodolist] = useState("");
  const [todo, setTodo] = useState([]);
  const [todocount, setTodoCount] = useState(0);

  const [proglist, setProglist] = useState("");
  const [progress, setProgress] = useState([]);
  const [progcount, setProgCount] = useState(0);

  const [complist, setComplist] = useState("");
  const [completed, setCompleted] = useState([]);
  const [compcount, setCompCount] = useState(0);

  const progressChange = () => {
    if (todo.length > 0) {
      const itemToAdd = todo[0];
      const newArray = [...progress, itemToAdd];
      setProgress(newArray);
      setTodo(todo.slice(1));
      setTodoCount(todocount - 1);
      setProgCount(progcount + 1);
    }
  };

  const completedChange = () => {
    if (progress.length > 0) {
      const itemToAdd = progress[0];
      const newArray = [...completed, itemToAdd];
      setCompleted(newArray);
      setProgress(progress.slice(1));
      setProgCount(progcount - 1);
      setCompCount(compcount + 1);
    }
  };

  const itemTodo = (e) => {
    setTodolist(e.target.value);
  };

  const itemprog = (e) => {
    setProglist(e.target.value);
  };

  const itemcomp = (e) => {
    setComplist(e.target.value);
  };

  const listToDo = () => {
    if (todolist.length > 0) {
      setTodo((olditem) => {
        return [...olditem, todolist];
      });
      setTodolist("");
      setTodoCount(todocount + 1);
    }
  };

  const listprog = () => {
    if (proglist.length > 0) {
      setProgress((olditem) => {
        return [...olditem, proglist];
      });
      setProglist("");
      setProgCount(progcount + 1);
    }
  };

  const listcomp = () => {
    if (complist.length > 0) {
      setCompleted((olditem) => {
        return [...olditem, complist];
      });
      setComplist("");
      setCompCount(compcount + 1);
    }
  };

  const deleteToDo = (remove) => {
    console.log("deleted");
    const newitem = todo.filter((intemval) => intemval !== remove);
    setTodo(newitem);
    setTodoCount(todocount - 1);
  };

  const deleteProg = (remove) => {
    console.log("deleted");
    const newitem = progress.filter((intemval) => intemval !== remove);
    setProgress(newitem);
    setProgCount(progcount - 1);
  };

  const deleteComp = (remove) => {
    console.log("deleted");
    const newitem = completed.filter((intemval) => intemval !== remove);
    setCompleted(newitem);
    setCompCount(compcount - 1);
  };

  const clearAllToDo = () => {
    setTodo([]);
    setTodoCount(0);
  };

  const clearAllProg = () => {
    setProgress([]);
    setProgCount(0);
  };

  const clearAllComp = () => {
    setCompleted([]);
    setCompCount(0);
  };

  return (
    <>
      <div className="text-center my-5">
        <h3>TO-DO_LIST</h3>
      </div>
      <div className="container-fluid my-5">
        <div className="main d-flex flex-row justify-content-around">
          <div className="col-sm-3 w-25 bg-color">
            <div className="heading d-flex flex-row justify-content-around bg-primary pt-2">
              <div>
                <h4>TO-DO</h4>
              </div>
              <div className="">
                <h4 className="bg-light rounded-2">
                  <b className="text-dark m-0 px-2 py-1">{todocount}</b>
                </h4>
              </div>
            </div>
            <div className="input-text px-4 py-2">
              <input
                type="text"
                placeholder="Add Task"
                className="form-control"
                name="todolist"
                value={todolist}
                onChange={itemTodo}
              />
            </div>
            <div className="buttons d-flex flex-row justify-content-around">
              <div className="submit">
                <button
                  type="button"
                  className="btn border-0 bg-success text-light"
                  onClick={listToDo}
                >
                  Submit
                </button>
              </div>
              <div className="submit">
                <button
                  type="button"
                  className="btn border-0 bg-secondary text-light"
                  onClick={clearAllToDo}
                >
                  Clear All
                </button>
              </div>
            </div>
            <ul className="p-5">
              {todo.map((item, index) => {
                return (
                  <div>
                    <li key={index} className="mt-1">
                      {item}
                      <div className="float-end">
                        <button
                          onClick={progressChange}
                          className="border-0 bg-warning rounded-1"
                        >
                          <i className="bi bi-hourglass-split text-light p-2"></i>
                        </button>
                        <button className="border-0 bg-danger rounded-1 ms-1">
                          <i
                            className="bi bi-trash text-light p-2"
                            onClick={() => deleteToDo(item)}
                          ></i>
                        </button>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-3 w-25 bg-color">
            <div className="heading d-flex flex-row justify-content-around bg-warning pt-2">
              <div>
                <h4>In Progress</h4>
              </div>
              <div className="">
                <h4 className="bg-light rounded-2">
                  <b className="text-dark m-0 px-2 py-1">{progcount}</b>
                </h4>
              </div>
            </div>
            <div className="input-text px-4 py-2">
              <input
                type="text"
                placeholder="Add Task"
                className="form-control"
                name="proglist"
                value={proglist}
                onChange={itemprog}
              />
            </div>
            <div className="buttons d-flex flex-row justify-content-around">
              <div className="submit">
                <button
                  type="button"
                  className="btn border-0 bg-success text-light"
                  onClick={listprog}
                >
                  Submit
                </button>
              </div>
              <div className="submit">
                <button
                  type="button"
                  className="btn border-0 bg-secondary text-light"
                  onClick={clearAllProg}
                >
                  Clear All
                </button>
              </div>
            </div>
            <ul className="p-5">
              {progress.map((item, index) => {
                return (
                  <div>
                    <li key={index} className="mt-1">
                      {item}
                      <div className="float-end">
                        <button
                          onClick={completedChange}
                          className="border-0 bg-info rounded-1"
                        >
                          <i className="bi bi-check2-circle text-light p-2"></i>
                        </button>
                        <button className="border-0 ms-1 bg-danger rounded-1">
                          <i
                            className="bi bi-trash text-light p-2"
                            onClick={() => deleteProg(item)}
                          ></i>
                        </button>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-3 w-25 bg-color">
            <div className="heading d-flex flex-row justify-content-around bg-info pt-2">
              <div>
                <h4>Completed</h4>
              </div>
              <div className="">
                <h4 className="bg-light rounded-2">
                  <b className="text-dark m-0 px-2 py-1">{compcount}</b>
                </h4>
              </div>
            </div>
            <div className="input-text px-4 py-2">
              <input
                type="text"
                placeholder="Add Task"
                className="form-control"
                name="complist"
                value={complist}
                onChange={itemcomp}
              />
            </div>
            <div className="buttons d-flex flex-row justify-content-around">
              <div className="submit">
                <button
                  type="button"
                  className="btn border-0 bg-success text-light"
                  onClick={listcomp}
                >
                  Submit
                </button>
              </div>
              <div className="submit">
                <button
                  type="button"
                  className="btn border-0 bg-secondary text-light"
                  onClick={clearAllComp}
                >
                  Clear All
                </button>
              </div>
            </div>
            <ul className="p-5">
              {completed.map((item, index) => {
                return (
                  <div>
                    <li key={index} className="mt-1">
                      {item}
                      <div className="float-end">
                        <button className="border-0 bg-danger rounded-1">
                          <i
                            className="bi bi-trash text-light p-2"
                            onClick={() => deleteComp(item)}
                          ></i>
                        </button>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
