# React: Class-based 

## Class-based Component
Class-based components are ES6 classes that extend from `React.Component`. They allow usage of React lifecycle methods and internal state.

- In functional comp. we used to import the useState hook. We know that classes have a constructor and constructor is a special member function used for initialisation and hence we create the state variables inside a class constructor. Now, we use useState to create state variables, but earlier we used this.state object, given to us by React, just like this.props. In that object we can write the state variables with their initial value in the form of key-value pairs.

- We know that if we the set function for updating the value of a set variable, instead of doing normally like -> `setVar = newValue`, React will trigger the reconciliation cycle on encountering it and keep our Ul in sync with it. Similarly, for CBC, React gives access to a function called setState, where we pass the modified object as parameter. Never mutate state directly. In the below example we have shown how to update state variables in both FC and CBC :

### Example:
```jsx
import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to React!"
    };
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}
```

## Props in Class-based vs Function-based Components
Props are read-only properties passed from parent to child components.

### Class-based:
```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Function-based:
```jsx
const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
```

## State in Class-based vs Function-based Components
State holds local component data.

### Class-based:
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={this.increment}>Count: {this.state.count}</button>;
  }
}
```

### Function-based (using useState):
```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
```


## Super(props) in Constructor

Used in class components to pass props to the base `React.Component` class.

```jsx
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```


## Lifecycle Methods
Lifecycle methods are available only in class-based components and define different phases of a component's existence.

### Common Lifecycle Methods:
- `constructor()` – Initialization
- `render()` – Renders UI
- `componentDidMount()` – Invoked after component is mounted
- `componentDidUpdate()` – Invoked after update
- `componentWillUnmount()` – Cleanup before unmount

### Example:
```jsx
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Did Mount");
    fetchUser();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Cleanup work");
  }

  render() {
    return <div>User Info</div>;
  }
}
```

## React Lifecycle Phases
- **Mounting**: constructor -> render -> componentDidMount
- **Updating**: render -> componentDidUpdate
- **Unmounting**: componentWillUnmount


### Mounting Phase

```jsx
constructor() {}
static getDerivedStateFromProps() {}
render() {}
componentDidMount() {}
```

### Updating Phase

```jsx
shouldComponentUpdate()
getSnapshotBeforeUpdate()
componentDidUpdate()
```

### Unmounting Phase

```jsx
componentWillUnmount()
```

## Example: Parent-Child Lifecycle Flow

1. Parent Constructor
2. Parent Render
3. Child Constructor
4. Child Render
5. Child componentDidMount
6. Parent componentDidMount


## API Calls in Class-based Components

In functional components, API calls are usually done in `useEffect()` because it runs after the first render. Similarly, in class-based components, API calls are made in `componentDidMount()`, which runs after `render()`.

### Sequence:
1. Constructor
2. Render
3. `componentDidMount()`

### Example

```jsx
componentDidMount() {
  fetch("api_url")
    .then(res => res.json())
    .then(data => this.setState({ data }));
}
```

## Multiple Child Components from a Parent

When rendering multiple child class-based components from a parent:

- React completes the **render phase** for all components (parent and children) first.
- Only after the entire render phase is completed, it begins the **commit phase** (DOM updates).
then moves to the **commit phase**:
- Constructor and render() of Parent
- Constructor and render() of Child1
- Constructor and render() of Child2
- DOM updates (commit phase)
- componentDidMount of children, then parent

## Render vs Commit Phase

- **Render Phase**: Includes constructor and `render()` method. React does not modify the DOM here.
- **Commit Phase**: React updates the DOM and calls `componentDidMount()`.

## ComponentDidUpdate()

Called after every update and re-rendering. Use to act on changes:

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    console.log("State updated");
  }
}
```

## Mimicking useEffect Dependency Array in CBC

Use `componentDidUpdate(prevProps, prevState)` to monitor specific state changes:

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    // Do something when count changes
  }
}
```

## componentWillUnmount()
Triggered when a component is about to be removed from the DOM. Helpful for cleanup like clearing timers.

### Use Case Example:

```jsx
componentDidMount() {
  this.timer = setInterval(() => {
    console.log("Namaste React OP");
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.timer);
}
```

## useEffect Hook in Functional Component
Performs side effects (e.g., API calls, subscriptions) and mimics lifecycle methods.

### Example:
```jsx
import { useEffect } from 'react';

const UserProfile = () => {
  useEffect(() => {
    fetchUser();

    return () => {
      console.log("Cleanup work");
    };
  }, []);

  return <div>User Info</div>;
};
```

## Async Operations and setInterval
Using `setInterval` or async logic in `useEffect` requires cleanup to avoid memory leaks.
#### Functional Component Cleanup with useEffect

### Example:
```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Interval running");
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

React warns against making the `useEffect` callback directly async. Instead:

```jsx
// ❌ Don't do this:
useEffect(async () => {
  await fetchData();
}, []);

// ✅ Correct way:
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("api_url");
    const data = await res.json();
    setData(data);
  };
  fetchData();
}, []);

```
## When Should You Use useEffect Cleanup?
To avoid memory leaks or unwanted side effects. Example: canceling subscriptions or clearing timers.

## Common Mistakes to Avoid
- Not cleaning up side-effects like intervals or subscriptions.
- Making `useEffect()` async directly.
- Forgetting to include dependencies in dependency array.
- Comparing class component lifecycles directly with hooks (they behave differently).


## One-Way Data Binding

React supports one-way data flow: from parent to child. To pass data from child to parent, use callback functions passed as props.

```jsx
const Parent = () => {
  const handleData = (data) => console.log(data);
  return <Child sendData={handleData} />;
};

const Child = ({ sendData }) => {
  return <button onClick={() => sendData("Hello")}>Send</button>;
};
```


## Use Cases for Lifecycle Methods:

### 1. constructor(props)

- **Use Case:** Initializing state or binding event handlers.
- **Example:** Setting up initial values for the state or binding methods to this.

### 2. componentDidMount()

- **Use Case:** Fetching initial data, setting up subscriptions.
- **Example:** Making an API call to fetch data and setting it in the state.

### 3. shouldComponentUpdate(nextProps, nextState)

- **Use Case:** Optimizing performance by preventing unnecessary re-renders.
- **Example:** Comparing current props or state with next props or state and returning false if they are the same.

### 4. componentDidUpdate(prevProps, prevState)

- **Use Case:** Performing actions based on changes to props or state.
- **Example:** Making an API call when a prop changes.

### 5. componentWillUnmount()

- **Use Case:** Cleaning up resources before the component is destroyed.
- **Example:** Removing event listeners or canceling timers.


## Helpful Resources

- [Thapa Technical - Cleanup in React](https://www.youtube.com/watch?v=5gCtW7RCtQA&ab_channel=ThapaTechnical)
- [The Net Ninja - useEffect](https://www.youtube.com/watch?v=aKOQtGLT-Yk&ab_channel=TheNetNinja)
- [WebDev Cody - React Cleanup](https://www.youtube.com/watch?v=Wu0rVQuawLU&ab_channel=WebDevCody)
- [Lama Dev - Mistakes Every React Developer Should Avoid](https://www.youtube.com/watch?v=QQYeipc_cik&ab_channel=LamaDev)
- [React Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

<img src="../../assets/lifec ycle.png" alt="Dine Out App" />