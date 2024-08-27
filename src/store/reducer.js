import { theme } from "@chakra-ui/react";

export const initialValue = {
  theme: true,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "theme/changeColor":
      return { ...state, theme: !state.theme };
    default:
      return state;
  }
};
