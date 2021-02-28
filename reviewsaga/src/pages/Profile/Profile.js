import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../Login/Login";
function Profile() {
  if (localStorage.getItem("userLogin")) {
    return <div>Profile of User</div>;
  } else {
    alert("Please login first");
    return <Redirect to="/login"></Redirect>;
  }
  //   return <div>Profile of User</div>;
}

export default Profile;
