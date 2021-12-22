import { BUTTON, SPACE, REMOVE, ANSWER } from "../constants/calConstants";
let initialState = {
  number: "",
  ans: "",
};

const AnswerReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ANSWER:
      try {
        return { ...state, ...payload, ans: eval(state.number).toString() };
      } catch (err) {
        return {
          ...state,
          ...payload,
          ans: "I am not einstein...",
        };
      }
    default:
      return state;
  }
};
export default AnswerReducer;
