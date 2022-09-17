import { atom } from "recoil";
import { Todo } from "./types";

export const todolistState = atom<Todo[]>({
  key: "todolistState",
  default: [],
});
