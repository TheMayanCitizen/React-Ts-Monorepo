import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const timeline = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useEffect(() => {
    if (counter < maxCount) return;

    timeline.current.play(0);
    console.log("%cAndas con todo", "color:red; background-color:black;");
  }, [counter]);

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "elastic.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);
  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
