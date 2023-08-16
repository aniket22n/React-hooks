# useReducer hook

"The `useReducer` hook offers a powerful and flexible approach to state management in React components. `useReducer` is a React hook that provides an alternative approach to managing state compared to the commonly used `useState` hook. It can replace `useState` for complex state management, simplifying our lives."

## useState vs. useReducer

| useState                                          | useReducer                                                       |
| ------------------------------------------------- | ---------------------------------------------------------------- |
| Simpler, ideal for basic state management.        | Can be used when maintaining state with `useState` becomes hard. |
| Less boilerplate and simple syntax.               | Handles complex state updates with clear patterns.               |
| Suitable for managing a single independent state. | Organizes large components with better separation of concerns.   |

## The Counter Example

Let's start by creating a simple counter component using the `useReducer` hook. We'll build a counter that can be incremented, decremented, and reset to zero.

### Step 1: Set Up Your Component

Importing the necessary dependencies:

```jsx
import React, { useReducer } from "react";
```

### Step 2: Define Initial State

Define the initial state for your counter. In this case, I'll start with a count of 0:

```jsx
const initialState = { count: 0 };
```

### Step 3: Create the Reducer Function

Create a reducer function that takes the current state and an action as parameters. The reducer will update the state based on the action type:

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};
```

### Step 4: Create the Component Function

Define your component function (Counter) that will render the counter and handle state updates:

```jsx
export function Counter() {
  // Initialize state and dispatch using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Render the counter, buttons
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
```

### Step 5:

Import and use the Counter component in App.js

```jsx
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Counter Example using useReducer</h1>
      <Counter />
    </div>
  );
}

export default App;
```
