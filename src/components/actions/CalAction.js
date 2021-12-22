import { BUTTON, REMOVE, SPACE, ANSWER } from "../constants/calConstants";

export const buttonClick = (number) => {
  return {
    type: BUTTON,
    payload: number,
  };
};
export const answerClick = (number) => {
  return {
    type: ANSWER,
    payload: number,
  };
};
export const clearClick = (number) => {
  return {
    type: REMOVE,
    payload: number,
  };
};

export const spaceClick = (number) => {
  return {
    type: SPACE,
    payload: number,
  };
};
