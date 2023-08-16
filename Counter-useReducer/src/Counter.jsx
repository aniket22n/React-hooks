import React, { useReducer } from "react";

// Step 2: Define the initial state for the counter
const initialState = { count: 0 };

// Step 3: Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      // Increase the count by 1
      return { count: state.count + 1 };
    case "DECREMENT":
      // Decrease the count by 1
      return { count: state.count - 1 };
    case "RESET":
      // Reset the count to 0
      return { count: 0 };
    default:
      // Return the current state for unknown actions
      return state;
  }
};

// Step 4: Define the Counter component
function Counter() {
  // Initialize state and dispatch using useReducer
  // useReducer takes two arguments:
  // - The first argument is the reducer function that specifies how state updates are handled.
  // - The second argument is the initial state. In this case, it's the initialState object defined above.
  const [state, dispatch] = useReducer(reducer, initialState);

  // 'state' is the current state object that we can access and display.
  // 'dispatch' is a function that sends actions to the reducer to update the state.

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* Add buttons to trigger actions */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Counter;
