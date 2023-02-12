import React, { useCallback, useState } from "react";

export default function App(props: { message: string }) {
  return(
    <>
      <h1>{props.message}</h1>
      <h2>Count: {count}</h2>
      <button type="button">Increment</button>
    </>
  );
}