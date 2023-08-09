import { atom } from "recoil";

const ToDoListState = atom({
  key: "ToDoListState",
  default: ["HTML", "CSS", "JavaScript"],
});

export default ToDoListState;
