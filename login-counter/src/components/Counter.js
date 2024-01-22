import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const ShowCounter = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    //dispatch({type:'toggle'});
    dispatch(counterActions.toggle());
  };
  const incrementHandler = () => {
    //dispatch({type:'increment'});
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    //dispatch({type:'decrement'});
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    //dispatch({type:'increaseBy5', amount: 5});
    dispatch(counterActions.increase(10));
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {ShowCounter && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase Counter</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
