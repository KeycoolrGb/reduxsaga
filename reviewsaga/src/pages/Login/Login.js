import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [state, setstate] = useState({
    username: "",
    password: "",
  });
  console.log(state);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((state.username === "admin") & (state.password === "admin")) {
      history.push("/profile");
      localStorage.setItem("userLogin", JSON.stringify(state));
    } else {
      alert("login fail");
      return;
    }
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          id
          className="form-control"
          placeholder
          aria-describedby="helpId"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          id
          className="form-control"
          placeholder
          aria-describedby="helpId"
          onChange={handleChange}
        />
        <button className="btn btn-success mt-2">Submit</button>
      </form>
    </div>
  );
}

export default Login;
