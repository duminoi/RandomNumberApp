// import React from "react";
import { useContext, useEffect, useRef } from "react";
import Result from "./Result";
import { ProviderContext } from "../store/Provider";

export default function Data() {
  const { state, dispatch } = useContext(ProviderContext);
  const inputRef = useRef();
  const handleChangeInput = (e) => {
    const regex = /^\d{0,3}$/;
    if (regex.test(e.target.value)) {
      dispatch({ type: "inputValue/setInput", payload: e.target.value });
    }
  };
  useEffect(() => {
    console.log(state.inputValue);
  }, [state.inputValue]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      const regex = /^[0-9]$/;
      if (regex.test(e.key)) {
        inputRef.current.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      <div className="inputData">
        <form action="">
          <div className="w-full relative">
            <label
              htmlFor=""
              className={`block text-start text-[1rem] me-[0.75rem] mb-2 font-medium duration-[200ms] opacity-[1] text-[#319795] `}
            >
              Hãy thử nhập một số
            </label>
            <input
              ref={inputRef}
              type="number"
              min="0"
              max="999"
              step="1"
              onChange={(e) => {
                handleChangeInput(e);
              }}
              className="w-full h-[2.5rem] bg-transparent text-[1rem] ps-[1rem] pe-[1rem] rounded min-w-0  outline-[2px] border outline-offset-[2px] relative transition-all duration-[200ms] p-[1rem] "
              placeholder="Thử một số"
              value={state.inputValue}
            />
          </div>
        </form>
        <Result />
      </div>
    </div>
  );
}
