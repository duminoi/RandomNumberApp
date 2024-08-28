export const initialValue = {
  theme: true,
  number: 100,
  randomTry: 0,
  toast: "idle",
  inputValue: "",
  maxTime: 0,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "theme/changeColor":
      return { ...state, theme: !state.theme };
    case "number/changeNumber":
      return { ...state, number: action.payload };
    case "randomTry/changeNumber":
      return { ...state, randomTry: action.payload };
    case "toast/setToast":
      return { ...state, toast: action.payload };
    case "inputValue/setInput":
      return { ...state, inputValue: action.payload };
    case "maxTime/setMaxTime":
      return { ...state, maxTime: action.payload };
    default:
      return state;
  }
};
