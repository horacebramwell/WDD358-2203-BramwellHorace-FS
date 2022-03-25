import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

// The useSelector hook is a react-redux hook that allows you to access the state of your store.
// It takes a function that returns the part of the state you want to access.
// The function is called every time the state changes.

// The useDispatch hook is a react-redux hook that allows you to call actions from the reducer.
// It takes in a function that returns an action.
// The function is called every time an action is dispatched.
