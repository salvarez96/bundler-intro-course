import React, { useCallback, useState } from "react";

export default function App(props: { message: string }) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  
  const decrement = () => {
    setCount(count - 1);
  }

  return(
    <>
      <h1>{props.message}</h1>
      <h2>Count: {count}</h2>
      <button 
        type="button" 
        onClick={increment}
      >
        Increment
      </button>
      <button 
        type="button" 
        onClick={decrement}
      >
        Decrement
      </button>
    </>
  );
}