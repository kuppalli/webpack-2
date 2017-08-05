import React, { Component } from "react";
import sample1 from "images/sample1.png";
import sample2 from "images/sample2.png";
import sample3 from "images/sample3.jpg";

const hello = props => {
  return (
    <div>
      <h5 className="heading">
        Hello <em>{props.userDisplayName}</em> welcome to react component !!!{" "}
      </h5>
      <code>
        local time : {new Date().toLocaleTimeString()}
      </code>
      <br />
      <img src={sample3} />
    </div>
  );
};

export default hello;
