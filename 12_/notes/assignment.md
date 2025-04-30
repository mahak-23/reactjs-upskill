# useContext vs Redux

`useContext` and `Redux` are both tools used for state management in React applications, but they serve different purposes and have different use cases. Let's explore the key differences between useContext and Redux:

## useContext:

- **Scope**:

  - Used for passing data deeply through the component tree without manually passing props at every level.
  - Good for small or medium state sharing inside a section of the app.

- **Complexity**:

  - Very simple and lightweight.
  - No external libraries needed — part of React itself.

- **Component Coupling**:

  - Localized to a subtree.
  - Best when you don't need to share the state across many different places.

- **Integration**:
  - Built into React, uses the `useContext` hook to consume the context.

### Example:

```jsx
const MyContext = React.createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <MyContext.Provider value={{ count, setCount }}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const { count, setCount } = useContext(MyContext);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

## Redux:

- **Scope**:

  - Designed for global state management across the entire app.

- **Complexity**:

  - More complex than `useContext`.
  - Requires concepts like Store, Actions, and Reducers.

- **Component Coupling**:

  - State is global and accessible anywhere through hooks like `useSelector` and `useDispatch`.

- **Integration**:
  - Needs external libraries (`redux`, `react-redux`).

### Example:

```jsx
// Redux store setup
const initialState = { count: 0 };
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

---

## When to use which?

| useContext                        | Redux                              |
| :-------------------------------- | :--------------------------------- |
| Small or medium apps              | Large complex apps                 |
| Limited sharing across components | Deep state sharing across the app  |
| Simple and quick setup            | Standardized, predictable patterns |

---

# Advantages of using Redux Toolkit over Redux

`Redux Toolkit` is a set of utility functions and abstractions that simplifies and streamlines the process of working with Redux. It is designed to address some of the common pain points and boilerplate associated with using plain Redux. Here are some advantages of using Redux Toolkit over plain Redux:

1. **Less Boilerplate Code**:

   - No need to manually create action types and action creators.

2. **Easier Async Operations**:

   - `createAsyncThunk` makes async logic simple and clean.

3. **Simpler Store Setup**:

   - `configureStore` automatically sets up the Redux DevTools and middleware.

4. **Built-in DevTools Support**:

   - Automatically integrates with Redux DevTools Extension.

5. **Encourages Best Practices**:

   - Follows official Redux standards by default.

6. **Handles Immutability Internally**:

   - Uses Immer library, allowing us to "mutate" state directly in reducers.

7. **Backward Compatibility**:

   - Can be integrated into existing Redux apps gradually.

8. **Faster Development**:
   - Speeds up coding and reduces errors.

### Example with Redux Toolkit:

```jsx
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

const store = configureStore({ reducer: counterSlice.reducer });
```

---

# Explain Dispatcher

In Redux, a `dispatcher` is not a standalone concept; instead, it's a term often used to refer to a function called dispatch. The dispatch function is a key part of the Redux store, and it plays a crucial role in the Redux data flow.

- In Redux, the **dispatch** function sends an action to the Redux Store.

### What dispatch does:

- Sends an action object (e.g., `{ type: "INCREMENT" }`) to the store.
- The store passes the action to the **reducer**.
- The reducer updates the state based on the action.

### Example:

```js
const action = { type: "INCREMENT" };
store.dispatch(action);
```

### In a React component:

```jsx
import { useDispatch } from "react-redux";

const MyComponent = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "INCREMENT" });
  };

  return <button onClick={handleClick}>Increment</button>;
};
```

---

# Explain Reducer

In Redux Toolkit, the `createSlice function is commonly used to create reducers`. It simplifies the process of defining actions and the corresponding reducer logic, reducing boilerplate code.

- A **Reducer** is a function that determines how the state changes based on an action.

### Example using Redux Toolkit:

```jsx
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

# Explain Slice

- A **Slice** represents a piece of Redux state along with:

  - Initial state
  - Reducers
  - Auto-generated actions

- Created using `createSlice` in Redux Toolkit.

### **Creating a Slice:** The createSlice function takes an options object with the following properties:

1. `name (string)` : A string that identifies the slice. This is used as the prefix for the generated action types.

   ```js
   import { createSlice } from "@reduxjs/toolkit";

   const mySlice = createSlice({
     name: "mySlice",
     initialState: {
       /* ... */
     },
     reducers: {
       // ...reducers
     },
   });
   ```

2. `initialState (any)`: The initial state value for the slice. This is the starting point for your state before any actions are dispatched.
3. `reducers (object)`: An object where each key-value pair represents a reducer function. The keys are the names of the actions, and the values are the corresponding reducer logic.

   ```js
   const mySlice = createSlice({
     initialState: {
       /* ... */
     },
     reducers: {
       increment: (state) => {
         state.value += 1;
       },
       decrement: (state) => {
         state.value -= 1;
       },
     },
   });
   ```

### **Output:** The createSlice function returns an object with the following properties:

1. `name (string)`: The name of the slice.
2. `reducer (function)`: The reducer function generated based on the provided reducers. This is the function you use in your store configuration.
3. `actions (object)`: An object containing the action creators for each defined reducer. These action creators can be directly used to dispatch actions.

```js
const { increment, decrement } = mySlice.actions;
```

### **Using a Slice:** Once we've created a slice, you can use its reducer and actions in your Redux store configuration and in your React components.

1. `Configuring the Store`: We can include the generated reducer in your store configuration.

   ```js
   import { configureStore } from "@reduxjs/toolkit";
   import mySliceReducer from "./path/to/mySlice";

   const store = configureStore({
     reducer: {
       mySlice: mySliceReducer,
       // ...other reducers
     },
   });
   ```

2. `Dispatching Actions`: In our React components, we can use the generated action creators to dispatch actions.

   ```jsx
   import { useDispatch } from "react-redux";
   import { increment } from "./path/to/mySlice";

   const MyComponent = () => {
     const dispatch = useDispatch();

     const handleIncrement = () => {
       dispatch(increment());
     };

     // ... rest of the component logic
   };
   ```

Using `slices in Redux Toolkit promotes a modular and organized approach to state management`. Each slice encapsulates the logic related to a specific part of the state, making it easier to understand, maintain, and scale your Redux code.

---

# Explain Selector

- **Selectors** are functions used to **get specific pieces of the Redux state**.

- Helps you **read** the state easily inside components.

### Basic Selector Example:

```jsx
import { useSelector } from "react-redux";

const MyComponent = () => {
  const count = useSelector((state) => state.counter.value);
  return <div>Count: {count}</div>;
};
```

### Using `reselect` library for Memoized Selectors:

```jsx
import { createSelector } from "reselect";

const selectCounter = (state) => state.counter.value;

const selectDoubleCounter = createSelector(
  [selectCounter],
  (value) => value * 2
);
```

Selectors play a crucial role in managing the state in a clean and efficient way.

Redux Toolkit provides the createSlice and createAsyncThunk utilities along with the createSelector function from the reselect library to help manage selectors easily.

Here's an explanation of how selectors work in Redux Toolkit:

1. `Defining Selectors with createSlice`: When we create a slice using createSlice, we can include selectors in the extraReducers field. These selectors can compute and return specific pieces of data from the state.

   ```jsx
   import { createSlice } from "@reduxjs/toolkit";

   const mySlice = createSlice({
     name: "mySlice",
     initialState: { data: [] },
     reducers: {
       // ...reducers
     },
     extraReducers: (builder) => {
       builder
         .addCase(otherSliceAction, (state, action) => {
           // logic for handling other slice's action
         })
         .addDefaultCase((state, action) => {
           // default logic for handling actions not handled by this slice
         });
     },
     selectors: (state) => ({
       // selector functions here
       selectData: () => state.data,
       selectFilteredData: (filter) =>
         state.data.filter((item) => item.includes(filter)),
     }),
   });

   export const { selectData, selectFilteredData } = mySlice.selectors;
   ```

2. `Using Reselect with createSlice`: If we need more advanced memoization and composition of selectors, you can use the createSlice function along with the reselect library.

   ```jsx
   import { createSlice, createSelector } from "@reduxjs/toolkit";

   const mySlice = createSlice({
     // ... other options
     selectors: {
       selectData: (state) => state.data,
       selectFilteredData: createSelector(
         (state) => state.data,
         (_, filter) => filter,
         (data, filter) => data.filter((item) => item.includes(filter))
       ),
     },
   });

   export const { selectData, selectFilteredData } = mySlice.selectors;
   ```

3. `Using Selectors in Components`: Once we've defined selectors, we can use them in your React components using the useSelector hook from the react-redux library. This hook allows you to efficiently extract and subscribe to parts of the Redux store.

   ```jsx
   import { useSelector } from "react-redux";
   import { selectData, selectFilteredData } from "./mySlice";

   const MyComponent = () => {
     const data = useSelector(selectData);
     const filteredData = useSelector((state) =>
       selectFilteredData(state, "someFilter")
     );

     // ... rest of the component logic
   };
   ```

Selectors help keep your state management logic clean and efficient by allowing us to centralize the computation of derived data from the Redux store. They contribute to better organization, improved performance, and easier maintenance of our Redux code.

---

# Explain createSlice and the configuration it takes

- **createSlice** is a helper function in Redux Toolkit.
- It generates actions and reducers automatically!

### Configuration Options:

| Option                             | Description                                      |
| ---------------------------------- | ------------------------------------------------ |
| 1. `name`                          | Name of the slice (e.g., "counter")              |
| 2. `initialState`                  | Starting state                                   |
| 3. `reducers`                      | Object containing reducer functions              |
| `extraReducers (builder callback)` | Handle actions from other slices or async thunks |

4. `extraReducers (builder callback)`: A callback function that allows you to define additional reducers outside of the reducers field. It is called with a builder object that provides methods for adding reducers based on other action types.

   ```js
   const mySlice = createSlice({
     extraReducers: (builder) => {
       builder
         .addCase(otherSliceAction, (state, action) => {
           // logic for handling other slice's action
         })
         .addDefaultCase((state, action) => {
           // default logic for handling actions not handled by this slice
         });
     },
     // ... other options
   });
   ```

5. `slice (string)`: An optional string that specifies a slice of the state to be used with the createAsyncThunk utility. This is useful when working with asynchronous actions.

   ```js
   const mySlice = createSlice({
     slice: "myAsyncSlice",
     // ... other options
   });
   ```

6. `extraReducers (object)`: An alternative way to define extra reducers using an object directly. Each key represents an action type, and the value is the corresponding reducer function.

   ```js
   const mySlice = createSlice({
     extraReducers: {
       [otherSliceAction.type]: (state, action) => {
         // logic for handling other slice's action
       },
       // ... additional action types
     },
     // ... other options
   });
   ```

---

# Quick Summary 🚀

| Concept       | Quick Meaning                                      |
| ------------- | -------------------------------------------------- |
| useContext    | Local small-scale state sharing                    |
| Redux         | Global complex state management                    |
| Redux Toolkit | Simplifies Redux with less code and best practices |
| Dispatcher    | Sends action to reducer                            |
| Reducer       | Updates state based on action                      |
| Slice         | Group of reducer + actions                         |
| Selector      | Extract specific state data                        |
| createSlice   | Creates reducers + actions easily                  |
