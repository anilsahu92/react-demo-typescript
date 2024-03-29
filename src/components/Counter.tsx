import React from "react";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/reduser/counter/counterReduser";

interface Props {}

function Counter(props: Props) {
  const {} = props;
  const state = useSelector((store: RootState) => store);
  const { value: count } = useSelector((store: RootState) => store.counter);
  const dispatch = useDispatch();

  console.log(count, state);
  return (
    <div className="text-center">
      <h1>Count Box :{count}</h1>
      <div className="text-center">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default Counter;
