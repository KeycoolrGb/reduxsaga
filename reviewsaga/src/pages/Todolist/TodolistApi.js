import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";
import axios from "axios";
function TodolistApi() {
  const [state, setstate] = useState({ taskList: [], taskName: "", error: "" });
  console.log(state.taskName);
  console.log(state.error);
  const getTaskList = () => {
    return axios({
      url: `http://svcy.myclass.vn/api/ToDoList/GetAllTask`,
      method: "GET",
    })
      .then((res) => {
        setstate({ ...state, taskList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    let newtaskName = { ...state.taskName, [name]: value };
    let regexString = /^[a-z A-Z]+$/;
    let newerror = { ...state.error, [name]: value };
    if (!regexString.test(value) || value.trim() === "") {
      newerror[name] = name + "! invalid";
    } else {
      newerror[name] = "";
    }

    setstate({ ...state, taskName: newtaskName, error: newerror });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return axios({
      url: `http://svcy.myclass.vn/api/ToDoList/AddTask`,
      method: "POST",
      data: state.taskName,
    })
      .then((res) => {
        console.log(res);
        getTaskList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (taskName) => {
    return axios({
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        getTaskList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleTaskDone = (taskName) => {
    return axios({
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    })
      .then((res) => {
        console.log(res);
        getTaskList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRejectTask = (taskName) => {
    return axios({
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    })
      .then((res) => {
        console.log(res);
        getTaskList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTaskList();
  }, []);
  return (
    <form className="card" onSubmit={handleSubmit}>
      {/* <button onClick={getTaskList}>Get</button> */}
      <div className="card__header">
        <img src={logo} />
      </div>
      {/* <h2>hello!</h2> */}
      <div className="card__body">
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <p>September 9,2020</p>
          </div>
          <div className="card__add">
            <input
              onChange={handleChange}
              name="taskName"
              id="newTask"
              type="text"
              placeholder="Enter an activity..."
            />

            <button id="addItem">
              <i className="fa fa-plus" />
            </button>
          </div>
          <p className="text text-danger">{state.error.taskName}</p>
          <div className="card__todo">
            {/* Uncompleted tasks */}
            <ul className="todo" id="todo">
              {state.taskList
                .filter((item) => !item.status)
                .map((item, index) => {
                  return (
                    <li key={index}>
                      <span>{item.taskName}</span>
                      <div className="buttons">
                        <button
                          type="button"
                          className="remove"
                          onClick={() => {
                            handleDelete(item.taskName);
                          }}
                        >
                          <i className="fa fa-trash-alt" />
                        </button>
                        <button
                          className="complete"
                          type="button"
                          onClick={() => {
                            handleTaskDone(item.taskName);
                          }}
                        >
                          <i className="far fa-check-circle" />
                          <i className="fas fa-check-circle" />
                        </button>
                      </div>
                    </li>
                  );
                })}
            </ul>
            {/* Completed tasks */}
            <ul className="todo" id="completed">
              {state.taskList
                .filter((item) => item.status)
                .map((item, index) => {
                  return (
                    <li key={index}>
                      <span>{item.taskName}</span>
                      <div className="buttons">
                        <button
                          className="remove"
                          type="button"
                          onClick={() => {
                            handleDelete(item.taskName);
                          }}
                        >
                          <i className="fa fa-trash-alt" />
                        </button>
                        <button
                          className="complete"
                          type="button"
                          onClick={() => {
                            handleRejectTask(item.taskName);
                          }}
                        >
                          <i className="far fa-check-circle" />
                          <i className="fas fa-check-circle" />
                        </button>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TodolistApi;
