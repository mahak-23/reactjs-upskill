# Inception Summary

## 1. Manipulating the DOM with JavaScript vs. React

- Traditional JavaScript modifies the DOM using `document.createElement` and `appendChild`.
- React creates a Virtual DOM and updates the real DOM efficiently.

## 2. Creating React Elements

- `React.createElement` creates a React element (object), not an actual DOM element.
- Example:
  ```js
  const heading = React.createElement("h1", {}, "Hello World from React!");
  ```

## 3. Rendering React Elements

- Use `ReactDOM.createRoot()` to create a root and render elements.
- Example:
  ```js
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
  ```

## 4. Nesting React Elements

- React allows creating a nested structure using `React.createElement`:
  ```js
  const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", {}, "I am an h1 tag")
    )
  );
  ```

## 5. Sibling Elements in React

- Use an array to pass multiple children inside a parent element.
- Example:
  ```js
  const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ]),
  ]);
  ```

## 6. Adding Inline Styles in React

- Use the `style` prop with an object.
- Example:
  ```js
  const parent = React.createElement(
    "div",
    {
      id: "parent",
      style: { background: "#fff", padding: "10px", color: "blue" },
    },
    [child1, child2]
  );
  ```

## 7. React and HTML Structure

- The React script is linked inside an HTML file.
- The `root` div is where React components are mounted.
