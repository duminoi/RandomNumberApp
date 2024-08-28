import { useContext, useEffect, useRef, useState } from "react";
import "../assets/slider.css";
import { ProviderContext } from "../store/Provider";
import { toast } from "react-toastify";
export default function Slider() {
  const { state, dispatch } = useContext(ProviderContext);
  const [trackBarWidth, setTrackBarWidth] = useState(0);
  const trackBar = useRef();
  const dot = useRef();
  const fillTrack = useRef();
  let RANGE_NUMBER = useRef(state.number);

  let lastTrackBar = 0;
  let initClientX = 0;
  let numberValue = 0;

  function getRandomNumber(min, max) {
    // console.log("state.number:", state.number);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleTrackBarMouseDown = (e) => {
    // console.log("offsetX", e.nativeEvent.offsetX);
    const MAX_TIME = Math.ceil(Math.log2(RANGE_NUMBER.current));
    const offsetX = e.nativeEvent.offsetX;
    const rate = (offsetX / trackBarWidth) * 100;
    fillTrack.current.style.width = rate + "%";
    lastTrackBar = offsetX;
    initClientX = e.clientX;
    numberValue = 100 + (rate / 100) * (2048 - 100);
    // console.log(numberValue);
    dispatch({ type: "data/remove" });
    dispatch({ type: "playCount/remove" });
    dispatch({ type: "playAgain/false" });
    dispatch({ type: "maxTime/setMaxTime", payload: MAX_TIME });
    dispatch({ type: "number/changeNumber", payload: numberValue });
    dispatch({
      type: "toast/setToast",
      payload: "Chào mừng bạn đến với trò chơi đoán số",
    });
    document.addEventListener("mousemove", handleSpanMouseMove);
    document.addEventListener("mouseup", handleSpanMouseUp);
  };

  const handleSpanMouseMove = (e) => {
    console.log("clientWidth", trackBarWidth);
    console.log("clientX", e.clientX);
    const offsetTrackBar = e.clientX - initClientX + lastTrackBar;
    const rate = (offsetTrackBar / trackBarWidth) * 100;
    fillTrack.current.style.width = rate + "%";
    numberValue = 100 + (rate / 100) * (2048 - 100);
    dispatch({ type: "number/changeNumber", payload: numberValue });
    if (rate <= 100) {
      document.addEventListener("mousemove", handleSpanMouseMove);
    }
    if (rate > 100) {
      document.removeEventListener("mousemove", handleSpanMouseMove);
    }
  };

  const handleSpanMouseUp = () => {
    // console.log("xóa sự kiện");
    const MAX_TIME = Math.ceil(Math.log2(RANGE_NUMBER.current));
    dispatch({ type: "playCount/remove" });
    dispatch({ type: "playAgain/false" });
    dispatch({ type: "data/remove" });
    dispatch({ type: "maxTime/setMaxTime", payload: MAX_TIME });
    dispatch({
      type: "toast/setToast",
      payload: "Chào mừng bạn đến với trò chơi đoán số",
    });
    document.removeEventListener("mousemove", handleSpanMouseMove);
    document.removeEventListener("mouseup", handleSpanMouseUp);
  };

  const handleSpanMouseDown = (e) => {
    console.log(e.nativeEvent.offsetX);
    e.stopPropagation();
    document.addEventListener("mousemove", handleSpanMouseMove);
    document.addEventListener("mouseup", handleSpanMouseUp);
  };

  const colorText = state.theme ? "" : "white";
  const bgColor = state.theme ? "bg-[#319795]" : "bg-[#81e6d9]";
  useEffect(() => {
    if (trackBarWidth == 0) {
      setTrackBarWidth(trackBar.current.clientWidth);
    }
    RANGE_NUMBER.current = state.number;
    dispatch({
      type: "randomNumber/setNumber",
      payload: getRandomNumber(100, state.number),
    });
    // console.log("randomNumber", state.randomNumber);
  }, [state.number, trackBarWidth]);

  useEffect(() => {
    if (state.toast != "idle") {
      toast(state.toast);
      setTimeout(() => {
        dispatch({ type: "toast/setToast", payload: "idle" });
      }, 100);
    }
    return () => {};
  }, [state.toast, toast]);
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
            className="dot absolute top-[-2px] right-[-5px] w-[0.8rem] bg-white h-[0.8rem] rounded-[50%]"
          ></span>
        </div>
      </div>
    </div>
  );
}
