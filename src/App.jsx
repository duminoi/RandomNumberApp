import { useContext } from "react";
import "./assets/App.css";
import Title from "./Components/Title";
import { ProviderContext } from "./store/Provider";
import Switch from "./Components/Switch";
import Data from "./Components/Data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { state } = useContext(ProviderContext);
  const background = state.theme ? "bg-white" : "bg-[#1a202c]";
  return (
    <>
      <div className={`p-[1rem] h-screen block relative ${background}`}>
        <Switch />
        <Title />
        <Data />
      </div>
      <ToastContainer />
    </>
  );
}
