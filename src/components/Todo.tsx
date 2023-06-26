import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Counter from "./Counter";

export type ITodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

const Todo = (): JSX.Element => {
  const [todo, setTodo] = useState<ITodoItem[]>([]);
  const uniqId: number = 10000 + Math.floor(Math.random() * 1000);

  const addHandler = (title: string): void => {
    if (title) {
      setTodo((item) => [...item, { id: uniqId, title, completed: false }]);
    }
  };
  const addUpdate = (id: number): void => {
    const update: ITodoItem[] = todo.map((item) => {
      return item.id === id
        ? { ...item, completed: !item.completed }
        : { ...item };
    });
    setTodo(update);
  };
  const addDelete = (id: number): void => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="TodoWrapper">
        <div className="todoInner">
          <div className="todoForm">
            <h2>Todo List</h2>
            <TodoForm add={addHandler} />
          </div>
          <div className="TodoList">
            {todo && todo.length > 0 ? (
              todo.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  delete={addDelete}
                  update={addUpdate}
                />
              ))
            ) : (
              <p className="text-center">No item Found</p>
            )}
          </div>
        </div>
      </div>
      <Counter></Counter>
    </>
  );
};

export default Todo;
