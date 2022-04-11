import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const Test = () => {
  const counter = useSelector((state) => state.myCount);
  const dispatch = useDispatch();

  console.log(counter);
  return (
    <>
      <button onClick={(e) => 
        {
          // e.preventDefault()
        dispatch(increment(50))
        }
        }>+</button>
      <h1>Status {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Test;
