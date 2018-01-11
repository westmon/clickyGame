import React from "react";
import "./Counter.css";


const Counter = props => (
      <div className="countArea">
        <div className="panel-heading"></div>
        <div className="panel-body">
          <p>Click Count: {props.count}</p>
          <p>Correct: {props.correct}</p>
          <p>Incorrect: {props.incorrect}</p>


        </div>
      </div>
);

export default Counter;