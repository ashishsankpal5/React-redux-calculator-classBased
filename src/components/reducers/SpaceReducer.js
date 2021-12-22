import { SPACE } from "../constants/calConstants";
let initialState = {
  number: "",
  ans: "",
};
const SpaceReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
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
export default SpaceReducer;
