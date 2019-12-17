import { createStore } from "redux";
//Action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});
//set count

//reset count

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ setCount = 101 } = {}) => ({
  type: "SET",
  setCount
});

// Reducers
//1.Reducers are pure functions
//2.Never Change state or actions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "SET":
      return {
        count: action.setCount
      };
    case "RESET":
      return {
        count: 0
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
//
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ setCount: 300 }));

/*
NOTE:++++++++
unorder to unsubscribe we need to call unsubscribe method 
LIKE :+++++++
unsubsribe();
*/

//desrement by 5
