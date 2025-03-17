
# Laying the Foundation

## Starting a Project
- Initialize a project using the terminal.
- Set up an `npm` script for easier development workflow.
- Best practices for starting a project when joining a new company, including understanding `package.json` scripts and dependencies.

## JSX Introduction & Usage
- JSX (JavaScript XML) allows embedding HTML-like syntax in JavaScript.
- JSX is syntactic sugar over `React.createElement()`.

## Transpiling JSX
- JSX code needs to be transpiled into JavaScript.
- Transpilation is done using Babel.

## Babel Explanation
- Babel converts modern JavaScript (ES6+) into backward-compatible JavaScript for browser compatibility.
- Converts JSX into `React.createElement()` calls.

## Class vs ClassName in JSX
- `class` is a reserved keyword in JavaScript; hence, React uses `className` instead.
- Example:
  ```jsx
  <div className="container">Hello World</div>
  ```

## Useful VS Code Extensions for React
- **Prettier**: Code formatting.
- **Bracket Pair Colorization**: Highlights matching brackets.
- **ESLint**: Linting for better code quality.
- **Better Comments**: Enhanced comment formatting.

## React Components
- **Class-based Components** (older approach, uses `this.state`, lifecycle methods).
- **Functional Components** (modern approach, uses hooks like `useState`).

## Nested Functional Components
- Components can be nested inside other components.
- **React Element** is a JavaScript object representing a UI element.
- **React Component** returns a React element.
- Example:
  ```jsx
  const Title = () => <h1>Title Component</h1>;
  const Header = () => (
    <div>
      <Title />
    </div>
  );
  ```

## Rendering a Functional Component
- Use `root.render(<ComponentName />)` to render a functional component.
  ```jsx
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HeadingComponent />);
  ```

## Rendering a Component Inside Another
- Components can be composed inside one another to create reusable UI elements.
- Example:
  ```jsx
  const Header = () => (
    <div>
      <Navbar />
    </div>
  );
  ```

## Component Composition
- Multiple components can be combined to form complex UI structures.
- Example:
  ```jsx
  const Layout = () => (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
  ```

## Writing Components Without Arrow Functions
- Components can be written using standard functions.
  ```jsx
  function MyComponent() {
    return <h1>Hello</h1>;
  }
  ```

## Embedding React Elements Inside Components
- React elements can be placed inside components.
  ```jsx
  const element = <h1>Hello</h1>;
  const Component = () => <div>{element}</div>;
  ```

## Cross-Site Scripting (XSS), JSX Expressions & React Fragments
- React automatically escapes JSX expressions to prevent XSS attacks.
- JSX expressions allow embedding JavaScript within `{}` inside JSX.
- React Fragments (`<>...</>`) help return multiple elements without adding extra DOM nodes.

## Session Recap
- Initialized a React project and set up an efficient workflow.
- Learned JSX syntax and how it gets transpiled.
- Explored Babel, React Components, and their different types.
- Understood how to render and compose components.
- Covered security measures in React, such as JSX escaping to prevent XSS attacks.

## References
- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
