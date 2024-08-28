import React, { useContext } from "react";
import { ProviderContext } from "../store/Provider";
import CountResult from "./CountResult";
import { useRef, useState, useEffect } from "react";
export default function Table() {
  const { state, dispatch } = useContext(ProviderContext);

  useEffect(() => {
    // if (state.data.length > 0) {
    //   if (state.data.length === state.maxTime) {
    //     console.log("vào đây");
    //     console.log(state.data);
    //   }
    // }
    console.log(state.history);
  }, [state.history]);
  const textColor = state.theme ? "" : "white";
  return (
    <div className="block whitespace-nowrap overflow-hidden max-w-[100%] border-[2px] border-solid border-[#2c7a7b] rounded-[8px] flex-shrink-0 w-[100vw] ">
      <table className="font-varient lining-nums tabular-nums w-full mt-4 mb-4">
        <caption
          style={{ color: textColor }}
          className="mt-4 text-center font-bold ps-[1.5rem] pe-[1.5em] pt-[0.5rem] pb-[0.5rem] text-[#4a5568] caption-bottom "
        >
          <span>
            {" "}
            Làn thử thú {state.playQuantity} / {state.playQuantity}
          </span>
        </caption>
        <caption
          style={{ color: textColor }}
          className="mt-4  text-center font-bold  pt-[0.5rem] pb-[0.5rem] text-[#4a5568] caption-bottom "
        >
          <span>Số lần nhập tối đa: {state.maxTime}</span>
        </caption>
        <caption
          style={{ color: textColor }}
          className="mt-4  text-center font-bold  pt-[0.5rem] pb-[0.5rem] text-[#4a5568] caption-bottom "
        >
          Tỷ lệ đúng: 0%
        </caption>
        <thead>
          <tr>
            <th style={{ color: textColor }}>Số lần nhập</th>
            <th style={{ color: textColor }}>Số nhập vào</th>
          </tr>
        </thead>
        <tbody>
          {state.history.map((item, index) => {
            return (
              <CountResult key={index} id={index} value={item}></CountResult>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
