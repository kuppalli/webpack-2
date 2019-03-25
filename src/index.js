require("./assets/stylesheets/styles.scss");

import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.jsx";
import { cube } from "./app/maths";

const ticker = () => {
  ReactDOM.render(
    <App userDisplayName='Jhon' />,
    document.getElementById("root")
  );
};

setInterval(ticker, 1000);

console.log("hello webpack, i am watching for changes now");

console.log("cube of 3 is ", cube(3));

// spread operator 
const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };
const newObj = { ...obj1, ...obj2, planet: 'Earth' };
console.log('new object ', newObj);