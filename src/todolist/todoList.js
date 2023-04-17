import React, { useState } from "react";

const TodoList = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="m-5">
      <h1>Todo List App</h1>
      <input
        className="form-control"
        type="text"
        placeholder="Add task"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button onClick={() => addItem()} className="btn btn-primary">
        Add
      </button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button
                onClick={() => deleteItem(item.id)}
                className="btn btn-danger"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
