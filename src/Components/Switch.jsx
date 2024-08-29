import React, { useContext, useEffect } from "react";
import { ProviderContext } from "../store/Provider";

export default function Switch() {
  const { state, dispatch } = useContext(ProviderContext);
  const handleClick = () => {
    dispatch({ type: "theme/changeColor" });
  };
  const theme = JSON.parse(localStorage.getItem("themeUi"));
  const bg = theme ? "hover:bg-[#edf2f7]" : "hover:bg-[#585a5c]";
  useEffect(() => {
    localStorage.setItem("themeUi", JSON.stringify(state.theme));
  }, [state.theme]);
  return (
    <div
      onClick={handleClick}
      className={`absolute top-[2rem] w-[3rem] h-[3rem] rounded flex items-center justify-center right-[2rem] ${bg}  duration-150 ease-linear transition-colors`}
    >
      <div className="w-[1.2rem]">
        {state.theme ? (
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon css-onkibi"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
            ></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon css-onkibi text-white"
            aria-hidden="true"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2"></path>
              <path d="M12 21v2"></path>
              <path d="M4.22 4.22l1.42 1.42"></path>
              <path d="M18.36 18.36l1.42 1.42"></path>
              <path d="M1 12h2"></path>
              <path d="M21 12h2"></path>
              <path d="M4.22 19.78l1.42-1.42"></path>
              <path d="M18.36 5.64l1.42-1.42"></path>
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}
