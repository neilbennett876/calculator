import React, { useState } from "react";

function Keypad() {
  const [number, setNumber] = useState("");

  const calculate = () => {
    setNumber(eval(number));
  };

  return (
    <>
      <div id="calculator-body">
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
          <button
            onClick={() => {
              setNumber(number + "+");
            }}
          >
            ➕
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
          <button
            onClick={() => {
              setNumber(number + "-");
            }}
          >
            ➖
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
          <button
            onClick={() => {
              setNumber(number + "/");
            }}
          >
            ➗
          </button>
          <div>
            <button
              onClick={() => {
                setNumber("");
              }}
            >
              ⬅️
            </button>
            <button
              onClick={() => {
                setNumber(number + "0");
              }}
            >
              0
            </button>
            <button
              onClick={() => {
                setNumber(number + "*");
              }}
            >
              ✖️
            </button>
            <button onClick={calculate}>🟰</button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Keypad;
