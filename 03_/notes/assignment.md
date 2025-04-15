# Laying the Foundation

### JSX
- JSX (JavaScript XML) allows writing HTML-like syntax in JavaScript.
- It is a syntactic sugar over `React.createElement()`.
- JSX needs to be transpiled by Babel before being rendered.
- Helps in writing cleaner and more readable UI code.

### React.createElement vs JSX
- `React.createElement()` is the core function to create React elements.
- JSX is an abstraction that makes it easier to write and read.
- JSX is transpiled into `React.createElement()` calls.

### Benefits of JSX
- Readability and maintainability.
- Allows writing JavaScript expressions inside HTML-like syntax.
- Helps prevent Cross-Site Scripting (XSS) attacks by escaping injected values.

### Behind the Scenes of JSX
- JSX is converted into JavaScript using Babel.
- Transpiled code uses `React.createElement()`.
- Results in a JavaScript object representing the DOM structure.

### Superpowers of `JSX`.
- Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. 
- JSX is easy to maintain and debug.
### Example:
```js
function greeting(user) {
  //JSX
  return <h1>{user}, How are you!!!</h1>;
}
```

### Role of `type` attribute in script tag? What options can I use there?
- The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax:
    ```js
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and requires babel to transpile it.
- `text/typescript`: As the name suggests the script is written in `TypeScript`.

### Babel & Parcel's Role in JSX
- **Babel**: Transpiles JSX to `React.createElement()`.
- **Parcel**: Bundles JavaScript files and optimizes performance.

### Components in React
#### Functional Components
- Functions that return JSX.
- Can accept `props` as arguments.
- The modern way of writing React components.

#### Class Components (Old Approach)
- Uses ES6 class syntax.
- Requires a `render()` method to return JSX.
- Less common due to the introduction of Hooks.

### Composing Components
- Nesting multiple components inside another component.
- Helps in reusability and modular design.

### `{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}`
- `{TitleComponent}`: Refers to a JavaScript variable or function.
- `{<TitleComponent/>}`: Self-closing component syntax.
- `{<TitleComponent></TitleComponent>}`: Explicit opening and closing tag.
- `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.-

## Coding Assignments

### Create a Nested Header Element using `React.createElement()`
```js
const header = React.createElement("div", { className: "title" },
  React.createElement("h1", {}, "Heading 1"),
  React.createElement("h2", {}, "Heading 2"),
  React.createElement("h3", {}, "Heading 3")
);
```

### Create the Same Element using JSX
```js
const headerJSX = (
  <div className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);
```

### Functional Component with JSX
```js
const HeaderComponent = () => (
  <div className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);
```

### Passing Attributes in JSX
```js
const ImageComponent = () => (
  <img src="logo.png" alt="Company Logo" width="100" />
);
```

### Component Composition Example
```js
const ParentComponent = () => (
  <div>
    <HeaderComponent />
    <ImageComponent />
  </div>
);
```

### Header Component with Functional Component
```js
const Header = () => (
  <div className="header">
    <img src="logo.png" alt="Logo" className="logo" />
    <input type="text" placeholder="Search..." className="search-bar" />
    <img src="user-icon.png" alt="User Icon" className="user-icon" />
  </div>
);
```