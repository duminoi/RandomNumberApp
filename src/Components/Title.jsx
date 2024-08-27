import React from "react";
import Slider from "./Slider";
export default function Title() {
  return (
    <div className="mt-4 mb-8 select-none">
      <hr className="opacity-[0.6] w-full bg-[#319795] border-0 h-[0.5rem] transition-width duration-[0.5s] ease-in-out delay-100 fixed top-0 left-0" />
      <h2 className="md:text-4xl min-[320px]:text-3xl  text-baseleading-[1.2] font-bold text-[#319795]">
        Chào mừng bạn đến với trò chơi đoán số!
      </h2>
      <h2 className="md:text-4xl min-[320px]:text-3xl  text-baseleading-[1.2] font-bold text-[#2c7a7b]">
        Còn 9/9 lần
      </h2>
      <h2 className="md:text-4xl min-[320px]:text-3xl  text-baseleading-[1.2] font-bold text-[#285e61]">
        Bạn cần tím kiếm một số từ 1 đến{" "}
      </h2>
      <Slider />
    </div>
  );
}
