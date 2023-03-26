import { createRef } from "react";

import Greet from "./Greet";

export default function App() {
  const ref = createRef<any>();

  return (
    <div>
      hii
      <button
        onClick={() => {
          ref?.current?.changeGreet();
        }}
      >
        {" "}
        change greet{" "}
      </button>
      <Greet ref={ref} />
    </div>
  );
}
