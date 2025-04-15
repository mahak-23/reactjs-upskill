# React Class-based Components

## Nested Routing in React Router
We can create a `Nested Routes` inside a react router configuration as follows:<br/>
first call createBrowserRouter for routing different pages
### Basic Nested Route
```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />, 
    errorElement: <Error />, 
    children: [
      {
        path: "/path",
        element: <Child />,
      },
    ],
  },
]);
```

### Further Nested Route (SubChild under Child)
```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />, 
    errorElement: <Error />, 
    children: [
      {
        path: "/path",
        element: <Child />,
        children: [
          {
            path: "child", // Don't use '/' because then react-router-dom will understand it's the direct path
            element: <SubChild />,
          },
        ],
      },
    ],
  },
]);
```

## Other Routers in React Router

### `createHashRouter`
- Useful when you can't configure your server to handle client-side routing.
- Uses the hash (`#`) portion of the URL instead of the standard path.
- Functionally similar to `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

### `createMemoryRouter`
- Maintains history in memory (not in the URL).
- Primarily used for testing, Storybook, or other non-browser environments.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

## Why do we use `super(props)` in constructor?

**Ans:** `super(props)` is used to inherit the properties and access variables of the React parent class when we initialize our component.<br/>
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.<br/>
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## Why can't we have the `callback function` of `useEffect async`?

**Ans:** `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.


# Extra Knowledge

## React Class Component Lifecycle Methods Detailed Explanation

- In React, class components have a series of lifecycle methods that you can override to run code at particular times in the process.
- In React, class components go through several lifecycle phases: mounting, updating, and unmounting.
- Each phase includes specific lifecycle methods that are called in a particular order.
- Understanding these methods and the order in which they are called is crucial for effectively managing component behavior.

### **1. Mounting Phase**

The mounting phase is when a component is created and inserted into the DOM. The methods called during this phase are:

#### **1.1 constructor(props)**

- Purpose:
  - Initializes the component's state.
  - Binds event handlers.
- Use Case:
  - Setting up initial state values.
  - Binding methods to this.

### Example:

```js
constructor(props) {
  super(props);
  this.state = {
    count: 0,
  };
  this.handleClick = this.handleClick.bind(this);
}
```

#### **1.2 render()**

- Purpose:
  - Defines the JSX (UI) of the component.
- Use Case:
  - Creating the structure and appearance of the component.

### Example:

```js
render() {
  return (
    <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleClick}>Increase Count</button>
    </div>
  );
}
```

#### **1.3 componentDidMount()**

- Purpose:
  - Runs after the component has been rendered to the DOM.
- Use Case:
  - Making API calls.
  - Setting up subscriptions.
  - Initializing libraries or frameworks.

### Example:

```js
componentDidMount() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}
```

### **2. Updating Phase**

The updating phase is when the component is re-rendered due to changes in props or state. The methods called during this phase are:

#### **2.1 shouldComponentUpdate(nextProps, nextState)**

- Purpose:
  - Determines whether the component should update.
- Use Case:
  - Optimizing performance by preventing unnecessary renders.

### Example:

```js
shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count;
}
```

#### **2.2 render()**

- Purpose:
  - Same as in the mounting phase, but called again if state or props change.

### Example:

```js
render() {
  return (
    <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleClick}>Increase Count</button>
    </div>
  );
}
```

#### **2.3 componentDidUpdate(prevProps, prevState)**

- Purpose:
  - Runs after the component has been updated.
- Use Case:
  - Performing operations based on new state or props.
  - Fetching new data when props change.

### Example:

```js
componentDidUpdate(prevProps, prevState) {
  if (this.state.count !== prevState.count) {
    console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
  }
}
```

### **3. Unmounting Phase**

The unmounting phase is when a component is removed from the DOM. The methods called during this phase are:

#### **3.1 componentWillUnmount()**

- Purpose:
  - Runs just before the component is unmounted and destroyed.
- Use Case:
  - Cleaning up subscriptions.
  - Canceling network requests.
  - Clearing timers.

### Example:

```js
componentWillUnmount() {
  clearInterval(this.interval);
}
```

<br/>

## Summary of Lifecycle Methods Order

### **1. Mounting Phase:**

- **constructor(props):** Initializes the state and binds event handlers.
- **render():** Defines the component's UI.
- **componentDidMount():** Makes API calls, sets up subscriptions, and initializes data.

### **2. Updating Phase:**

- **shouldComponentUpdate(nextProps, nextState):** Optimizes performance by determining whether the component should update.
- **render():** Re-defines the component's UI.
- **componentDidUpdate(prevProps, prevState):** Handles operations based on new state or props.

### **3. Unmounting Phase:**

- **componentWillUnmount():** Cleans up subscriptions, cancels network requests, and clears timers.
