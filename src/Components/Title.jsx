import { useContext, useEffect, useRef } from "react";
import Slider from "./Slider";
import { ProviderContext } from "../store/Provider";
export default function Title() {
  const { state } = useContext(ProviderContext);
  const toast = useRef("Chào mừng bạn đến với trò chơi đoán số");
  useEffect(() => {
    if (state.toast !== "idle") {
      toast.current = state.toast;
    }
  }, [state.toast]);
  return (
    <div className="mt-4 mb-8 select-none">
      <hr className="opacity-[0.6] w-full bg-[#319795] border-0 h-[0.5rem] transition-width duration-[0.5s] ease-in-out delay-100 fixed top-0 left-0" />
      <h2 className="md:text-4xl min-[320px]:text-3xl  text-baseleading-[1.2] font-bold text-[#319795]">
        {toast.current}
      </h2>
      <h2 className="md:text-4xl min-[320px]:text-3xl  text-baseleading-[1.2] font-bold text-[#2c7a7b]">
        Còn{" "}
        {state.maxTime - state.playCount > 0
          ? state.maxTime - state.playCount
          : state.maxTime}
        /{state.maxTime} lần
      </h2>
      <h2 className="md:text-4xl min-[320px]:text-3xl  text-baseleading-[1.2] font-bold text-[#285e61]">
        Bạn cần tìm kiếm một số từ 1 đến {Math.floor(state.number)}
      </h2>
      <Slider />
    </div>
  );
}
