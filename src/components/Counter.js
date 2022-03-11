import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.toggle);

   function toggleCounterHandler(){
    dispatch({type : 'toggle'});
   };


  function incrementHandler() {
    dispatch({type : 'Increment'})
  }
  function decrementHandler() {
    dispatch({type : 'Decrement'});
  }
  function increaseHandler() {
    dispatch({type : 'Increase', value : 5});
  }


  return (
    <main className={classes.counter}>
       <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div >
        <button onClick={incrementHandler} className={classes.btn}>+</button>
        <button onClick={increaseHandler} className={classes.btn}>+5</button>
        <button onClick={decrementHandler} className={classes.btn}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
