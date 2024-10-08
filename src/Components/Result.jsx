import { useContext, useEffect, useState } from "react";
import Table from "./Table";
import { ProviderContext } from "../store/Provider";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

export default function Result() {
  const { state, dispatch } = useContext(ProviderContext);
  const [notify, setNotify] = useState(null);
  const handleRemove = () => {
    const dialog = () => {
      confirmAlert({
        title: "Xác nhận để xóa bảng lịch sử?",
        message:
          "Bạn có chắc chắn không, vì nếu xóa sẽ mất đi toàn bộ lịch sử chơi",
        buttons: [
          {
            label: "Xác nhận",
            onClick: () => dispatch({ type: "history/remove" }),
          },
          {
            label: "Không",
            onClick: () => {},
          },
        ],
      });
    };
    dialog();
    setNotify(dialog);
  };
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key == "Escape" && notify) {
        confirmAlert.button[1].onClick();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);
  return (
    <>
      {state.history.length ? (
        <div className="flex w-full  relative mt-[2rem]">
          <div
            onClick={handleRemove}
            className="w-[3rem] h-[3rem] bg-[#63cccc] flex items-center justify-center  absolute top-0 right-0 hover:text-red-600 hover:bg-[#008080]"
          >
            <button className="w-[1.2rem] ">
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="chakra-icon css-onkibi "
                aria-hidden="true"
              >
                <g fill="currentColor">
                  <path d="M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"></path>
                </g>
              </svg>
            </button>
          </div>
          <Table />
        </div>
      ) : (
        ""
      )}
      {/* notify */}
    </>
  );
}
