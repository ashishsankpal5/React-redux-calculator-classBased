import { REMOVE } from "../constants/calConstants";
let initialState = {
  number: "",
  ans: "",
};
const RemoveReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case REMOVE:
      return {
        ...state,
        ...payload,
        number: "",
        ans: "",
      };
    default:
      return state;
  }
};
export default RemoveReducer;
