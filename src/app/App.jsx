import React from "react";
import sample1 from "images/sample3.jpg";

const hello = props => {
  return (
    <div>
      <h5 className='heading'>
        Hello <em>{props.userDisplayName}</em> welcome to react component !!!{" "}
      </h5>
      <code>local time : {new Date().toLocaleTimeString()}</code>
      <br />
      <img src={sample1} />
    </div>
  );
};

export default hello;
