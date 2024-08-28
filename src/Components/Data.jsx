// import React from "react";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import Result from "./Result";
import { ProviderContext } from "../store/Provider";

export default function Data() {
  const { state, dispatch } = useContext(ProviderContext);
  const inputRef = useRef();
  const status = useRef(state.status);
  const handleChangeInput = (e) => {
    const regex = /^\d{0,3}$/;
    if (regex.test(e.target.value)) {
      dispatch({ type: "inputValue/setInput", payload: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("playCount", state.playCount);

    const formData = new FormData(e.target);
    const inputValue = formData.get("inputData");
    // console.log("randomNumber", state.randomNumber);
    if (inputValue < state.randomNumber) {
      dispatch({
        type: "toast/setToast",
        payload: "hmmm.... bạn cần tăng thêm chút nx",
      });
    } else {
      dispatch({
        type: "toast/setToast",
        payload: "hmmm.... bạn cần giảm thêm chút nx",
      });
    }
    const index = state.data.findIndex((item) => {
      return item == inputValue;
    });
    if (index !== -1) {
      dispatch({
        type: "toast/setToast",
        payload: "Bạn đã từng nhập số này rồi !!!!",
      });
      // const leftCount = state.maxTime - state.playCount;
      dispatch({ type: "status", payload: true });
    } else {
      if (state.data.length < state.maxTime) {
        dispatch({ type: "playCount/count" });
        dispatch({ type: "data/insert", payload: inputValue });
      }
    }
  };

  const handleClick = () => {
    console.log("history", state.history);

    dispatch({
      type: "toast/setToast",
      payload: "Chào mừng bạn đến với trò chơi đoán số",
    });
    dispatch({ type: "playQuantity/count" });
    dispatch({ type: "maxTime/setMaxTime", payload: 10 });
    dispatch({ type: "data/remove" });
    dispatch({ type: "playAgain/check" });
    dispatch({ type: "playCount/remove" });
    dispatch({ type: "history/update", payload: [...state.data] });
  };

  useEffect(() => {}, [state.inputValue]);
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
  useEffect(() => {
    if (state.data.length === state.maxTime) {
      dispatch({ type: "playAgain/check" });
    }
  }, [state.data]);
  return (
    <div>
      <div className="inputData">
        {state.playAgain ? (
          <button
            onClick={handleClick}
            className="inline-flex appearance-none text-center justify-center user-select select-none border-2 border-transparent  items-center outline-offset-[2px rounded w-[5rem] h-[3rem] bg-[#319795] text-white text-xl"
          >
            Chơi lại
          </button>
        ) : (
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            action=""
          >
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
                name="inputData"
                className="w-full h-[2.5rem] bg-transparent text-[1rem] ps-[1rem] pe-[1rem] rounded min-w-0  outline-[2px] border outline-offset-[2px] relative transition-all duration-[200ms] p-[1rem] "
                placeholder="Thử một số"
                value={state.inputValue}
              />
            </div>
          </form>
        )}

        <Result />
      </div>
    </div>
  );
}
