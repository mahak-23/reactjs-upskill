# Data States

## What is Higher-Order Components (HOCs)?

A **Higher-Order Component (HOC)** is a **function** that **takes a component and returns a new component**.

It helps to **reuse component logic** without duplicating code.

- An HOC is a function that takes a component and returns a new component with additional props or behavior.
- This allows you to encapsulate common functionality and apply it to multiple components without duplicating code.

### Function Signature

- An HOC is a function that takes a component as an argument and returns a new component.

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

### Why use HOCs?

- Reuse common logic across multiple components.
- Add features like authentication, logging, or data fetching without changing the original component.

### Key Points:

- **Props Manipulation**: HOC can add, remove, or modify props.
- **Composition**: You can combine multiple HOCs.
- **Stateless**: HOCs usually don’t have their own state but rather manage the state of the wrapped component.
- **Naming**: Use clear names like `withAuth`, `withLogging`.
- Avoid mutating the original component; instead, wrap and extend it.
- Ensure that HOCs are reusable and composable.

```js
const EnhancedComponent = withAuth(withLogging(WrappedComponent));
```

### Example

Here's an example of an HOC that adds logging functionality to a component:

```javascript
import React from "react";

function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// Usage
class MyComponent extends React.Component {
  render() {
    return <div>Hello, world!</div>;
  }
}

const MyComponentWithLogging = withLogging(MyComponent);
```

In this example, `withLogging` is a Higher-Order Component that logs messages when the wrapped component mounts and unmounts. `MyComponent` is wrapped with `withLogging` to create a new component `MyComponentWithLogging` that includes this logging behavior.

---

## When do we use Higher-Order Components (HOCs)?

### Common Use Cases

1. **Code Reusability:**

   - When you have common logic that needs to be shared across multiple components, HOCs allow you to encapsulate this logic in a single place and reuse it.

2. **Cross-Cutting Concerns:**

   - Cross-cutting concerns like logging, error handling, and analytics can be managed using HOCs, ensuring that this logic is consistently applied across components.

3. **Conditional Rendering:**

   - HOCs can be used to conditionally render components based on certain conditions, such as user authentication or feature flags.

   ```js
   const withAuth = (WrappedComponent) => {
     return class extends React.Component {
       render() {
         if (!this.props.isAuthenticated) {
           return <Redirect to="/login" />;
         }
         return <WrappedComponent {...this.props} />;
       }
     };
   };
   ```

4. **Data Fetching:**

   - For components that need to fetch data from an API, HOCs can handle the data fetching logic and pass the data down as props.

   ```js
   const withData = (url) => (WrappedComponent) => {
     return class extends React.Component {
       state = { data: null, loading: true };

       componentDidMount() {
         fetch(url)
           .then((response) => response.json())
           .then((data) => this.setState({ data, loading: false }));
       }

       render() {
         return <WrappedComponent {...this.props} {...this.state} />;
       }
     };
   };
   ```

5. **State Management:**

   - HOCs can manage state for wrapped components, abstracting complex state logic and providing a cleaner API for the wrapped component.

   ```js
   const withToggle = (WrappedComponent) => {
     return class extends React.Component {
       state = { toggled: false };

       toggle = () => {
         this.setState((prevState) => ({ toggled: !prevState.toggled }));
       };

       render() {
         return (
           <WrappedComponent
             {...this.props}
             toggled={this.state.toggled}
             toggle={this.toggle}
           />
         );
       }
     };
   };
   ```

6. **Behavior Injection:**

   - HOCs can inject behaviors, such as tracking user interactions or managing form submissions, without modifying the wrapped component's implementation.

7. **UI Enhancements:**

   - HOCs can be used to enhance UI components with additional styles, animations, or other visual modifications.

8. **Authorization:**

   - Ensuring that only authorized users can access certain components can be handled by HOCs, which check user permissions and render the appropriate UI.

9. **Performance Optimizations:**
   - HOCs can be used to optimize performance by implementing techniques like lazy loading or memoization.

---

## Controlled vs Uncontrolled Components

In React, forms can be **controlled** or **uncontrolled** based on how data is handled.

### Controlled Components

- React **controls the form data** via state.
- Every input change updates the component's state.

#### Example

```javascript
import { useState } from "react";

function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Pros:**

- `Single Source of Truth`: The state of the form is managed by React, making it easier to control and debug.
- `Validation`: Easier to implement validation logic because you have control over the form data.
- `Consistency`: Ensures that the UI is always in sync with the data.

**Cons:**

- `Boilerplate Code`: Requires more code to manage state and event handlers.
- `Performance`: Frequent state updates can cause performance issues in large forms with many elements.

### Uncontrolled Components

- **DOM controls** the form data.
- React accesses the data using `refs`.

#### Example

```javascript
import { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Pros:**

- `Less Code`: Requires less boilerplate code because you don't need to manage state.
- `Performance`: Can be more performant in certain situations as there are fewer state updates.

**Cons:**

- `No Single Source of Truth`: Form data is not managed by React, making it harder to control and debug.
- `Validation`: Harder to implement validation logic since you don’t have control over the form data.
- `Inconsistency`: Potential for the UI to be out of sync with the data.

### Key Differences

| Feature         | Controlled Component | Uncontrolled Component |
| --------------- | -------------------- | ---------------------- |
| State           | Managed by React     | Managed by DOM         |
| Data Access     | Through State        | Through Ref            |
| Validation      | Easy                 | Harder                 |
| Code Complexity | More                 | Less                   |

### When to Use Each:

- **`Controlled Components`**: When you need more control over the form data, such as when implementing complex validation, dynamic forms, or handling data changes.
- **`Uncontrolled Components`**: When you need simpler forms with minimal validation and do not require frequent state updates. This is suitable for scenarios where performance is critical and state management overhead is unnecessary.

---

## What is Props Drilling?

**Props Drilling** means passing data from a parent component down through multiple layers to reach a deeply nested child component.

### Example

```javascript
function GrandParent() {
  const value = "Hello from GrandParent";

  return <Parent value={value} />;
}

function Parent({ value }) {
  return <Child value={value} />;
}

function Child({ value }) {
  return <div>{value}</div>;
}
```

Here, `value` is passed through `Parent` even though only `Child` needs it.

### Problems with Props Drilling

- Extra code (boilerplate).
- Harder to maintain and understand.
- Components become tightly coupled, reducing reusability..

### Solutions

- **Context API:** React’s Context API provides a way to share values between components without explicitly passing props through every level of the tree.
- **State Management Libraries:** Libraries like (Redux, MobX, Zustand) can manage state across the application, avoiding the need for deep prop passing.

### Context API Example

```javascript
import React, { createContext, useContext } from "react";

const ValueContext = createContext();

function GrandParent() {
  const value = "Hello from GrandParent";

  return (
    <ValueContext.Provider value={value}>
      <Parent />
    </ValueContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  const value = useContext(ValueContext);

  return <div>{value}</div>;
}
```

Now `Child` can access the value **directly** without drilling through `Parent`.

---

# Conclusion

- HOCs help reuse and share component logic.
- Controlled components are good for complete form control; uncontrolled are simpler and faster.
- Props drilling can be avoided using Context API.
