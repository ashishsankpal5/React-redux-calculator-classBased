import ButtonReducer from "./ButtonReducer";
import AnswerReducer from "./AnswerReducer";
import SpaceReducer from "./SpaceReducer";
import RemoveReducer from "./RemoveReducer";
import { combineReducers } from "redux";
export const Unique_key = "calculatorStore";

let rootReducer = combineReducers({
  // [unique_key]: calculatorReducer,
  buttonReducer: ButtonReducer,
  answerReducer: AnswerReducer,
  spaceReducer: SpaceReducer,
  removeReducer: RemoveReducer,
});
export { rootReducer };
