## Theory Points

### Q: Is JSX mandatory for React?

**A:** No. JSX is just an extension syntax that makes writing HTML and JavaScript together easier in React. JSX ultimately calls `React.createElement()` behind the scenes, so everything done with JSX can also be done using plain JavaScript.

Example:

```js
const sample = <h2>Greetings</h2>;
```

### Q: Is ES6 mandatory for React?

**A:** No, but it is highly recommended. Modern React relies heavily on ES6 features like:

- Classes
- Arrow Functions
- `let` and `const`

### Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

#### Differences:

- `{TitleComponent}` → Refers to a JavaScript expression or variable that holds a component reference.
- `{<TitleComponent/>}` → Renders the `TitleComponent` as a self-closing tag.
- `{<TitleComponent></TitleComponent>}` → Works the same as `{<TitleComponent/>}` unless child components are included.

Example:

```js
<TitleComponent>
  <FirstChildComponent />
  <SecondChildComponent />
</TitleComponent>
```

### Q: How to write comments in JSX?

```js
{
  /* This is a JSX comment */
}
{
  /*
  Multi-line
  JSX comment
*/
}
```

### Q: What is `<React.Fragment></React.Fragment>` and `<>...</>`?

- `<React.Fragment>` allows grouping multiple elements without adding extra nodes to the DOM.
- `<>...</>` is a shorthand version of React.Fragment.
- **Difference:** The shorthand (`<>...</>`) does **not** support the `key` attribute.

Example:

```js
return (
  <React.Fragment>
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
);
```

### Q: What is Reconciliation in React?

**A:** The process of updating the Browser DOM efficiently by using a **diffing algorithm** that compares the Virtual DOM with the real DOM and updates only the changed nodes.

### Q: What is React Fiber?

**A:** React Fiber is React's new reconciliation algorithm, making updates faster and smoother by enabling:

- Asynchronous rendering
- Task prioritization
- Efficient updates

### Q: Why do we need keys in React?

**A:** Keys help React identify which items have changed, are added, or removed in a list, improving performance.

Example:

```js
<li key={0}>Item 1</li>
<li key={1}>Item 2</li>
```

### Q: Can we use index as keys in React?

**A:** Yes, but it’s not recommended if the list order can change, as it can cause performance issues and incorrect component state updates.

### Q: What are props in React?

**A:** Props (short for **properties**) allow passing data from parent to child components.

Example:

```js
function App() {
  return <Tool name="Chetan Nada" tool="Figma" />;
}
```

### Q: What is Config Driven UI?

**A:** UI generated dynamically based on configuration data, making apps more flexible and scalable.

### Q: Difference between Virtual DOM and Real DOM

| Feature      | Virtual DOM | Real DOM |
| ------------ | ----------- | -------- |
| Updates      | Fast        | Slow     |
| Memory Usage | Efficient   | High     |
| HTML Updates | Indirect    | Direct   |
| Manipulation | Optimized   | Costly   |

**Summary:** Virtual DOM improves performance by reducing unnecessary re-renders in the Real DOM.
