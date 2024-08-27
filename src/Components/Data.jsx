import React from "react";
import Result from "./Result";

export default function Data() {
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
              type="text"
              className="w-full h-[2.5rem] bg-transparent text-[1rem] ps-[1rem] pe-[1rem] rounded min-w-0  outline-[2px] border outline-offset-[2px] relative transition-all duration-[200ms] p-[1rem] "
              placeholder="Thử một số"
            />
          </div>
        </form>
        <Result />
      </div>
    </div>
  );
}
