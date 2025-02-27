import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterTypes {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [counter, setCounter] = useState<CounterTypes>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    // setCounter({ //UNA FORMA DE HACERLO
    //   counter: counter.counter + value,
    //   clicks: counter.clicks + 1,
    // });
    setCounter(({ counter, clicks }) => ({
      //OTRA FORMA
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };
  return (
    <>
      <h1>Counter: {counter.counter}</h1>
      <h1>Clicks: {counter.clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
