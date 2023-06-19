import React, { useState, useRef } from "react";

type Props = {
  add: (title: string) => void;
};

const TodoForm = (props: Props): JSX.Element => {
  const { add } = props;
  const [input, setInput] = useState<string>("");
  const addTodo = () => {
    add(input);
    setInput("");
  };
  return (
    <div className="form-todo">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="inputBox"
      />
      <input
        type="button"
        value="Add"
        className="submitBtn btn btn-primary"
        onClick={addTodo}
      />
    </div>
  );
};

export default TodoForm;
