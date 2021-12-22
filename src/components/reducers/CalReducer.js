import { BUTTON, SPACE, REMOVE, ANSWER } from "../constants/calConstants";

export const unique_key = "calculatorStore";
let initialState = {
  number: "",
  ans: "",
};
export const calculatorReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case BUTTON:
      return {
        ...state,
        ...payload,
        number: state.number.concat(action.payload),
      };
    case ANSWER:
      try {
        return {
          ...state,
          ...payload,
          ans: eval(state.number).toString(),
        };
      } catch (err) {
        return {
          ...state,
          ...payload,
          ans: "I am not einstein...",
        };
      }
    case REMOVE:
      return {
        ...state,
        ...payload,
        number: "",
        ans: "",
      };
    case SPACE:
      return {
        ...state,
        ...payload,
        number: state.number.slice(0, -1),
        ans: "",
      };
    default:
      return state;
  }
};
