import { BUTTON, SPACE, REMOVE, ANSWER } from "../constants/calConstants";
let initialState = {
  number: "",
  ans: "",
};
const ButtonReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case BUTTON:
      return {
        ...state,
        ...payload,
        number: state.number.concat(action.payload),
      };
    default:
      return state;
  }
};
export default ButtonReducer;
