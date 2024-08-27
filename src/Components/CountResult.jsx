import React, { useContext } from "react";
import { ProviderContext } from "../store/Provider";

export default function CountResult({ count, value }) {
  const { state, dispatch } = useContext(ProviderContext);
  const textColor = state.theme ? "" : "white";
  return (
    <tr>
      <td>
        <p className="text-center text-[#68d391]">{count}</p>
        <hr className="opacity-[0.6] border-t-0 border-r-0 border-b-[1px] border-l-0 border-solid w-full" />
      </td>
      <td>
        <p style={{ color: textColor }} className="text-center ">
          {value}
        </p>
        <hr className="opacity-[0.6] border-t-0 border-r-0 border-b-[1px] border-l-0 border-solid w-full" />
      </td>
    </tr>
  );
}
