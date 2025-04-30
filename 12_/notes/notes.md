# Redux Toolkit Detailed Explanation

---

## 📦 Installation

Install Redux Toolkit and React-Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

Useful Links:

- [Redux Toolkit Official](https://redux-toolkit.js.org/)
- [React Redux Official](https://react-redux.js.org/)
- [Immer.js (for immutability)](https://immerjs.github.io/immer/)
- [Redux Toolkit on npm](https://www.npmjs.com/package/@reduxjs/toolkit)
- [React Redux on npm](https://www.npmjs.com/package/react-redux)
- [Redux Toolkit Beginner's Guide (FreeCodeCamp)](https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/)

## ❓ What is Redux Toolkit?

**Redux Toolkit (RTK)** is a set of tools and best practices designed to simplify and improve the process of using Redux for state management in JavaScript applications, particularly with React.

It helps by:

- Reducing boilerplate code.
- Simplifying store setup.
- Improving the developer experience.
- Following best practices.

> 🔗 [More on Redux Toolkit](https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today#what-is-redux-toolkit)

---

## ✨ Key Features of Redux Toolkit

1. **Simplified Store Configuration**
   - `configureStore()` sets up Redux with DevTools + default middleware.
   - Automatically combines reducers and applies middleware.
2. **Create Slices Easily**
   - `createSlice()` combines reducers and actions automatically, reducing boilerplate code.
   - Each slice represents a piece of the state and includes reducers, initial state, and action creators.
3. **Handle Async Code**
   - `createAsyncThunk()` simplifies async actions (e.g., API calls).
   - Handle asynchronous logic like data fetching. It helps create actions and reducers to handle the lifecycle of an async request (pending, fulfilled, rejected).
4. **Immutable Updates:**

   - Built-in support for writing immutable updates using Immer, making it easier to write reducers without directly mutating the state.

5. **Pre-configured Middleware:**

   - Built-in support for common middleware such as redux-thunk for handling async actions, and optional middleware for additional features.

6. **Developer Experience:**
   - Better default error messages, warnings, and integration with Redux DevTools.

## ⚡ Example: Basic Redux Toolkit Setup

```javascript
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

// Initial State
const initialState = {
  value: 0,
};

// Create a Slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Async Thunk Example
export const fetchCounterValue = createAsyncThunk(
  "counter/fetchValue",
  async () => {
    const response = await fetch("/api/counter");
    const data = await response.json();
    return data.value;
  }
);

// Configure Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
```

---

## 🏪 What is Redux Store?

The **Redux Store** holds the whole state tree of your application.  
It is the **single source of truth** and can only be changed by dispatching actions.

### Key Concepts of the Redux Store:

1. **Single Source of Truth**:

   - The entire state of your application is stored in a single object within the store. This simplifies state management and debugging.

2. **State is Read-Only**:

   - The state in the Redux store cannot be changed directly. To change the state, you need to dispatch an action, which is a plain JavaScript object describing the change.

3. **Changes are Made with Pure Functions**:
   - Actions are handled by reducers, which are pure functions that take the current state and an action as arguments and return a new state. Reducers must be pure functions, meaning they do not modify the original state but return a new state object.

### Core Store Functions

- `getState()` ➔ Get the current state.
- `dispatch(action)` ➔ Dispatch an action to update the state.
- `subscribe(listener)` ➔ Listen for state changes..

### Accessing and Updating the State:

To interact with the Redux store, you can use the getState and dispatch methods.

```javascript
import store from "./store";
import { increment, decrement, incrementByAmount } from "./counterSlice";

// Get current state
console.log(store.getState());

// Dispatch actions
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmount(5));

// Updated state
console.log(store.getState());
```

The Redux Store is fundamental to Redux architecture, ensuring a predictable and centralized state management solution for your application.

---

## 🏛️ Redux Toolkit Architecture

Redux Toolkit simplifies the process of setting up and using Redux in your application. Below is a step-by-step outline of the architecture and flow, along with a diagram to illustrate the components and their interactions.

### Components:

| Component      | Description                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| **Slices**     | Create parts of the state with initial state, actions and reducers.                                         |
| **Store**      | Centralizes the slices and applies middleware, such as `redux-thunk` for handling asynchronous operations.. |
| **Actions**    | Describe what happened (sync or async). Dispatched from components to trigger state changes.                |
| **Reducers**   | Handle actions and update the state.                                                                        |
| **Selectors**  | Extract and use specific parts of the state in components.                                                  |
| **Components** | Dispatch actions and select state for UI rendering.                                                         |

---

### 📈 Architecture Diagram (Text Version)

Below is a diagram illustrating the Redux Toolkit architecture:

```plaintext
+-----------------------+                  +----------------------+
|                       |                  |                      |
|  React Components     | <-- dispatch --  |       Actions        |
|                       |                  |                      |
+-----------+-----------+                  +-----+----------------+
            |                                    |
            |                                    |
            |                                    |
            |                                    v
            |                          +---------+---------+
            |                          |                   |
            |                          |     Reducers      |
            |                          |                   |
            |                          +---------+---------+
            |                                    |
            |                                    |
            v                                    |
+-----------+-----------+                        |
|                       |                        |
|        Store          | <-- state updates --   |
|                       |                        |
+-----------+-----------+                        |
            |                                    |
            |                                    v
            |                          +---------+---------+
            |                          |                   |
            |                          |      Slices       |
            |                          |                   |
            |                          +---------+---------+
            |                                    |
            |                                    |
            v                                    v
+-----------+-----------+              +---------+---------+
|                       |              |                   |
|    createSlice()      |              |  createAsyncThunk |
|                       |              |                   |
+-----------------------+              +-------------------+
```

---

## 🧠 How Redux Toolkit Works Behind the Scenes

- **Immer.js** handles writing "mutable" code that actually results in **immutable** updates.
- **createSlice()** internally generates action creators and reducer functions.
- **configureStore()** automatically sets up Redux DevTools + adds middleware like `redux-thunk`.

> 📝 Note: Immer allows writing reducers that look like they mutate the state, but under the hood, they produce new immutable copies.

---

# 🎯 Conclusion

Redux Toolkit provides a powerful, efficient, and scalable way to manage your application's state, with much less boilerplate code compared to traditional Redux setup.

---

## 📷 Architecture Visual (Optional)

```markdown
![Redux Toolkit Architecture](./Redux%20Toolkit%20Architecture.png)
```
