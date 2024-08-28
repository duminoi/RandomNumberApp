export const initialValue = {
  theme: true,
  number: 100,
  toast: "idle",
  inputValue: "",
  maxTime: 10,
  randomNumber: 0,
  data: [],
  playCount: 0,
  playAgain: false,
  playQuantity: 1,
  history: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "theme/changeColor":
      return { ...state, theme: !state.theme };
    case "number/changeNumber":
      return { ...state, number: action.payload };
    case "toast/setToast":
      return { ...state, toast: action.payload };
    case "inputValue/setInput":
      return { ...state, inputValue: action.payload };
    case "maxTime/setMaxTime":
      return { ...state, maxTime: action.payload };
    case "randomNumber/setNumber":
      return { ...state, randomNumber: action.payload };
    case "data/insert":
      return { ...state, data: [...state.data, action.payload] };
    case "data/remove":
      return { ...state, data: [] };
    case "playCount/count":
      return { ...state, playCount: state.playCount + 1 };
    case "playCount/remove":
      return { ...state, playCount: 0 };
    case "playAgain/check":
      return { ...state, playAgain: !state.playAgain };
    case "playAgain/false":
      return { ...state, playAgain: false };
    case "playQuantity/count":
      return { ...state, playQuantity: state.playQuantity + 1 };
    case "history/update":
      return { ...state, history: action.payload };
    case "history/remove":
      return { ...state, history: [] };
    default:
      return state;
  }
};
