import { useReducer, useState } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAl_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const countReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
    case "increaseBy":
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };
    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(countReducer, INITIAl_STATE);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncreaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  return (
    <>
      <h1>Counter Reducer: {JSON.stringify(counterState, null, 2)}</h1>

      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>

      <button onClick={handleReset}>Reset</button>
    </>
  );
};
