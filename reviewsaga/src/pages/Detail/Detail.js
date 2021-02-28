import React from "react";

function Detail(props) {
  return (
    <div>
      Detail <br></br>
      This is path: {props.match.path} <br></br>
      This is url: {props.match.url}
    </div>
  );
}

export default Detail;
