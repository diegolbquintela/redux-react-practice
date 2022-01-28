import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  //subscribing to the store using useSelector
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  //dispatch handler functions
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", amount: 1 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
