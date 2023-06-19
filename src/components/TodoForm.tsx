import React, { useState, useRef } from "react";

type Props = {
  add: (title: string) => void;
};

const TodoForm: React.FC<Props> = (props: Props) => {
  const { add } = props;
  const [inputbox, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const addTodo = () => {
    console.log("in", inputbox, inputRef.current);
    add(inputbox);
    setInput("");
  };
  return (
    <div className="form-todo">
      <input
        type="text"
        defaultValue={inputbox}
        onChange={(e) => setInput(e.target.value)}
        className="inputBox"
        ref={inputRef}
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
