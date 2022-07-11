import React, { useState } from "react";

function Keypad() {
  const [number, setNumber] = useState("");

  return (
    <>
      <div>{number}</div>
      <div>
        <button
          onClick={() => {
            setNumber(number + "1");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setNumber(number + "2");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setNumber(number + "3");
          }}
        >
          3
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setNumber(number + "4");
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setNumber(number + "5");
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setNumber(number + "6");
          }}
        >
          6
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setNumber(number + "7");
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setNumber(number + "8");
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setNumber(number + "9");
          }}
        >
          9
        </button>
        <div>
          <button>⬅️</button>
          <button>0</button>
        </div>
      </div>
    </>
  );
}

export default Keypad;
