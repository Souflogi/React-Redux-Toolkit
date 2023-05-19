import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const { increment, decrement, customIncrement, toggle } = counterActions;

  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  const decrementCounterHandler = () => {
    dispatch(decrement());
  };
  const decrement5CounterHandler = () => {
    dispatch(customIncrement(5));
  };
  const incrementCounterHandler = () => {
    dispatch(increment());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className="">
        <button onClick={incrementCounterHandler}> +1 </button>
        <button onClick={decrementCounterHandler}> -1 </button>
        <button onClick={decrement5CounterHandler}> +5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
