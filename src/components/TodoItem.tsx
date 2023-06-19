import React from "react";
import { BiLockOpen, BiLock, BiCheck } from "react-icons/bi";
import { ITodoItem } from "./Todo";

type Props = {
  item: ITodoItem;
  delete: (id: number) => void;
  update: (id: number) => void;
};

const TodoItem = (props: Props): JSX.Element => {
  const { id, title, completed } = props.item;

  return (
    <div className={`${completed ? "cpt" : ""} Todo-item`}>
      <div className="item d-flex">
        <div className="title">{title}</div>
        <div className="opts">
          <div className="remove" onClick={() => props.update(id)}>
            {completed ? (
              <BiLock color="green" size={32} />
            ) : (
              <BiLockOpen color="green" size={32} />
            )}{" "}
          </div>
          <div className="done" onClick={() => props.delete(id)}>
            <BiCheck color="red" size={32} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
