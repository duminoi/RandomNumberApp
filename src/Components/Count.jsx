import React, { useContext } from "react";
import { ProviderContext } from "../store/Provider";

export default function Count() {
  const { state, dispatch } = useContext(ProviderContext);
  const handleIncre = () => {
    dispatch({ type: "count/increment" });
  };
  const handleDecre = () => {
    dispatch({ type: "count/decrement" });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncre}>+</button>
      <button onClick={handleDecre}>-</button>
    </div>
  );
}
