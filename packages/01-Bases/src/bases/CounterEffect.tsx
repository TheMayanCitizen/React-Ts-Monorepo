import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterH2Element = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return;

    const timeline = gsap.timeline();
    timeline
      .to(counterH2Element.current, {
        y: -10,
        duration: 0.2,
        ease: "elastic.out",
      })
      .to(counterH2Element.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });

    console.log("%cAndas con todo", "color:red; background-color:black;");
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterH2Element}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
