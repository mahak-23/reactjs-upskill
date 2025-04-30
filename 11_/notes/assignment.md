# Data States

## 🛠️ What is Prop Drilling?

**Definition:**  
Prop drilling is when we send data (props) from a top-level parent component to a deeply nested child component by passing it through all intermediate components, even if they don't need it. This can result in a situation where many components in the component tree are only serving as intermediaries to pass down props.

**Simple Example:**

```js
<ParentComponent />
  <ChildComponent />
    <SubChildComponent />
```

If you want to pass a prop from `ParentComponent` to `SubChildComponent`, you must also pass it through `ChildComponent`, even though ChildComponent doesn’t use it.

---

### **How Prop Drilling Works:**

1. **Parent Component:** The parent component holds the state or data that needs to be passed down.<br/>
2. **Intermediate Components:** These components are between the parent and the final child component that needs the data. They receive the props and pass them down to their children.<br/>
3. **Child Component:** The deeply nested component that actually uses the props.

### **Example:**

```js
import React, { useState } from "react";

// Parent Component
const App = () => {
  const [data, setData] = useState("Hello from App");

  return (
    <div>
      <IntermediateComponent data={data} />
    </div>
  );
};

// Intermediate Component
const IntermediateComponent = ({ data }) => {
  return (
    <div>
      <AnotherIntermediateComponent data={data} />
    </div>
  );
};

// Another Intermediate Component
const AnotherIntermediateComponent = ({ data }) => {
  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
};

// Child Component
const ChildComponent = ({ data }) => {
  return <div>{data}</div>;
};

export default App;
```

In this example, `data` is passed through each component until it reaches `ChildComponent`.

## **Problems with Prop Drilling:**

- **Increased Complexity:** Hard to maintain when app grows..
- **Unnecessary Re-renders:** Intermediate components re-render even if they don't use the prop.
- **Tight Coupling:** Components are tightly linked and harder to refactor.

## **Solutions to Avoid Prop Drilling:**

### **1. Context API:**

React's Context API allows you to create a context object, which can be accessed by any component in the component tree without the need to pass props down manually.

Instead of passing props manually, we can share data globally using Context.

```js
import React, { useState, createContext, useContext } from "react";

const DataContext = createContext();

const App = () => {
  const [data, setData] = useState("Hello from App");

  return (
    <DataContext.Provider value={data}>
      <IntermediateComponent />
    </DataContext.Provider>
  );
};

const IntermediateComponent = () => <AnotherIntermediateComponent />;

const AnotherIntermediateComponent = () => <ChildComponent />;

const ChildComponent = () => {
  const data = useContext(DataContext);
  return <div>{data}</div>;
};

export default App;
```

### 2. **State Management Libraries:**

Libraries like Redux or MobX manage state globally, allowing components to access the state directly without passing props through intermediate components.

### 3. **Component Composition:**

Design components in a way that they don’t rely on deeply nested structures, reducing the need for prop drilling.

## What is lifting the state up

**Lifting State Up** means moving state from a child component to their closest common parent component so multiple child components can share it. This technique is useful when multiple components need to share or synchronize some state.

### **Why Lift State Up?**

- **State Sharing:** When siblings need shared data.
- **Single Source of Truth:** Easier to track and manage.
- **Component Reusability:** Stateless components are easier to reuse.

### **How to Lift State Up?**

1. **Identify the Common Ancestor:** Determine the closest common ancestor component that can hold the shared state.<br/>
2. **Move State to Common Ancestor:** Move the state and any related functions to this common ancestor.<br/>
3. **Pass State and Handlers Down:** Pass the state and state updater functions as props to the child components that need them.

### **Example:**

```js
import React, { useState } from "react";

const TemperatureInput = ({ temperature, onTemperatureChange }) => {
  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
};

const BoilingVerdict = ({ celsius }) => {
  return (
    <p>
      {celsius >= 100 ? "The water would boil." : "The water would not boil."}
    </p>
  );
};

const Calculator = () => {
  const [temperature, setTemperature] = useState("");

  return (
    <div>
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </div>
  );
};

export default Calculator;
```

Here, the `Calculator` component holds the shared state and passes it down to both `TemperatureInput` and `BoilingVerdict`.

### **Benefits:**

- **Consistency:** Both components are synchronized and display consistent information.
- **Separation of Concerns:** Each component focuses on its specific functionality without managing the shared state.
- **Easier Maintenance:** Having a single source of truth for the state makes it easier to manage and debug the application.

Lifting state up is a fundamental pattern in React that helps in creating a predictable and maintainable data flow in your application.

## What is Context Provider and Context Consumer?

**1. `Context Provider`:**
The `Provider` component shares a value with all child components.

**Example:**

```js
import React, { createContext, useState } from "react";

const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({ name: "John Doe" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Head />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};
```

Here, `Head`, `Outlet`, and `Footer` can access user without props.

**2. `Context Consumer:`** is used to consume the context data , provided by react context. We can do this using `useContext` hook for functional components and `Context.Consumer` in clasees based components.

**Example:**

- In Class based components, we can use the `Context.Consumer`.

  ```js
  import UserContext from "./UserContext";

  <UserContext.Consumer>
    {({ user }) => <h1>{user.name}</h1>}
  </UserContext.Consumer>;
  ```

- In Functional components we can use `useContext` hook to consume the context.

  ```js
  import { useContext } from "react";
  import UserContext from "./UserContext";
  const Profile = () => {
    const { user } = useContext(UserContext);
    return <h1>{user.name}</h1>;
  };
  ```

## What Happens if No Value is Passed to Provider?

If no value is passed to `Provider`, React uses the default value defined when creating the context.

### **Default Value in Context:**

When you create a context using `React.createContext(defaultValue)`, the `defaultValue` is used if a component does not have a matching `Provider` above it in the tree. This can be useful for providing a fallback value or ensuring that your components have a default state to work with.

### **Example:**

Let's create a context with a default value and see what happens if we do not provide a value to the `Provider`.

```js
import React, { createContext, useContext } from "react";

// Create context with a default value
const MyContext = createContext("Default Value");

const DisplayValue = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};

const App = () => {
  return (
    <div>
      <h1>Without Provider</h1>
      <DisplayValue />

      <h1>With Provider</h1>
      <MyContext.Provider value="Provided Value">
        <DisplayValue />
      </MyContext.Provider>
    </div>
  );
};

export default App;
```

### **Explanation:**

2. **Without Provider:** It shows "Default Value".
3. **With Provider:** It shows "Provided Value".

## Summary

| Concept                   | Key Point                                                                  |
| ------------------------- | -------------------------------------------------------------------------- |
| **Prop Drilling**         | Passing props manually through multiple intermediate components.           |
| **Lifting State Up**      | Moving state to the nearest common ancestor to share it between siblings.  |
| **Context Provider**      | Makes data available to all child components without passing props.        |
| **Context Consumer**      | Accesses the context data via `useContext` hook or `Context.Consumer`.     |
| **Default Context Value** | Used when no value is passed to the Provider; fallback default is applied. |

---

## Quick Points:

- **Prop Drilling**: Leads to messy and tightly-coupled components when overused.
- **Lifting State Up**: Helps maintain a single source of truth and synchronizes sibling components.
- **Context API**: Solves prop drilling by providing a global state to components.
- **Default Values in Context**: Ensures components still work even without a nearby Provider.

---

## References:

- [Lifting State Up](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)
- [React Context](https://react.dev/reference/react/useContext)
