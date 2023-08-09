import React, { useState } from "react";
import { useRecoilState } from "recoil";
import ToDoListState from "../atoms/todoState";

function ToDo() {
  const [toDoList, setToDoList] = useRecoilState(ToDoListState);
  // istersek sadece atomun değerini okumak için 'useRecoilValue' kullanılabilir.
  //const todos = useRecoilValue(ToDoListState);

  // ekleme işlemi yaparken girilen değeri tutmak için usestate tanımlıyoruz
  const [newTask, setNewTask] = useState("");

  // silme için gerekli fonksiyonu oluşturduk
  const deleteWithIndex = (index) => {
    let todos = [...toDoList];
    todos.splice(index, 1);
    setToDoList(todos);
  };

  // düzenleme için gerekli fonksiyonu oluşturduk
  const editWithIndex = (index) => {
    let todos = [...toDoList];
    var item = prompt("edit task value", toDoList[index]);
    todos[index] = item;
    setToDoList(todos);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        value={newTask}
      />
      <button
        onClick={() => {
          setToDoList([...toDoList, newTask]);
          setNewTask("");
        }}
      >
        {" "}
        Add New Task{" "}
      </button>

      {toDoList.map((item, index) => {
        return (
          <div style={{ margin: "10px" }}>
            <li key={index}> {item} </li>
            <button
              onClick={() => deleteWithIndex(index)}
              style={{ margin: "3px" }}
            >
              {" "}
              Delete{" "}
            </button>
            <button
              onClick={() => editWithIndex(index)}
              style={{ margin: "3px" }}
            >
              {" "}
              Edit{" "}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ToDo;
