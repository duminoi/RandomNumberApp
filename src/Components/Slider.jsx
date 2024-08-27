import React, { useContext, useEffect, useRef, useState } from "react";
import "../assets/slider.css";
import { ProviderContext } from "../store/Provider";
export default function Slider() {
  const { state, dispatch } = useContext(ProviderContext);
  const [trackBarWidth, setTrackBarWidth] = useState(0);
  const trackBar = useRef();
  const dot = useRef();
  const fillTrack = useRef();

  const handleTrackBarMouseDown = (e) => {
    console.log("offsetX", e.nativeEvent.offsetX);
    console.log("clientX", e.clientX);
    const offsetX = e.nativeEvent.offsetX;
    const rate = (offsetX / trackBarWidth) * 100;
    console.log("rate", rate);
    fillTrack.current.style.width = rate + "%";
  };

  const handleSpanMouseMove = (e) => {
    console.log(e.clientX);
  };

  const handleSpanMouseDown = (e) => {
    console.log(e.nativeEvent.offsetX);
    e.stopPropagation();
    document.addEventListener("mousemove", handleSpanMouseMove);
  };

  const handleSpanMouseUp = (e) => {
    document.removeEventListener("mousemove", handleSpanMouseMove);
  };
  document.addEventListener("mouseup", handleSpanMouseUp);

  const colorText = state.theme ? "" : "white";
  const bgColor = state.theme ? "bg-[#319795]" : "bg-[#81e6d9]";
  useEffect(() => {
    if (trackBarWidth == 0) {
      setTrackBarWidth(trackBar.current.clientWidth);
    }
  }, []);
  return (
    <div className=" w-full h-[.4rem] bg-transparent relative rounded mt-3 ">
      <div style={{ color: colorText }} className="marker left-[4.65002%]">
        100
      </div>
      <div style={{ color: colorText }} className="marker left-[24.8164%] ">
        512
      </div>
      <div style={{ color: colorText }} className="marker left-[49.8776%]">
        1024
      </div>
      <div style={{ color: colorText }} className="marker left-[74.9388%]">
        1536
      </div>
      <div style={{ color: colorText }} className="marker left-[100%]">
        2048
      </div>
      <div
        ref={trackBar}
        onMouseDown={(e) => {
          handleTrackBarMouseDown(e);
        }}
        style={{ color: colorText }}
        className="slider-track w-full h-full rounded absolute top-[50%] translate-y-[-50%] bg-gray-500 "
      >
        <div
          ref={fillTrack}
          className={`fill-track absolute rounded  h-full top-0 left-0 ${bgColor}`}
        >
          <span
            ref={dot}
            onMouseDown={(e) => {
              handleSpanMouseDown(e);
            }}
            className="dot absolute top-[-2px] right-0 w-[0.8rem] bg-white h-[0.8rem] rounded-[50%]"
          ></span>
        </div>
      </div>
    </div>
  );
}
