import { useReducer } from "react";
import { countReducer } from "./state/counterReducer";
import { CounterState } from "./@types/types";
import { doIncreaseBy, doReset } from "./actions/actions";

const INITIAl_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(countReducer, INITIAl_STATE);

  const handleReset = () => {
    dispatch(doReset());
  };

  const handleIncreaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  return (
    <>
      <h1>
        Counter Reducer Segmentado: {JSON.stringify(counterState, null, 2)}
      </h1>

      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>

      <button onClick={handleReset}>Reset</button>
    </>
  );
};
