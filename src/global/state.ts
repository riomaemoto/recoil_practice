import { atom } from "recoil";
import { Todo } from "./types";

export const TodoListState = atom<Todo[]>({
  key: "TodoListState",
  default: [],
});
