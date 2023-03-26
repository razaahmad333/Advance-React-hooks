import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

function Greet(props: any, ref: any) {
  const [greet, setGreet] = useState("hello");

  const changeGreet = () => {
    setGreet("hello " + String(Math.random() * 100));
  };

  useImperativeHandle(ref, () => {
    return { changeGreet };
  });

  useEffect(() => {
    changeGreet();
  }, []);

  return <div>{greet}</div>;
}

export default forwardRef(Greet);
