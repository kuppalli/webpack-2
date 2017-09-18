require("./assets/stylesheets/styles.scss");

import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.jsx";

const ticker = () => {
  ReactDOM.render(
    <App userDisplayName="Jhon" />,
    document.getElementById("root")
  );
};

setInterval(ticker, 1000);

console.log("hello webpack, i am watching for changes now");

// test if the ES6 is working

// const dress = () => {
//     document.write('sample message printing here');
// }
// dress();

//test the spread operator
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
console.log(lyrics);