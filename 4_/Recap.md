## Writing Scripts in package.json

**Q. What converts New Code to Older Code (For older version Browsers)?**  
**A:** Babel

- We do not need to write polyfill. Babel does it automatically.

### `npx` vs `npm`

- `npx` - executing commands without downloading packages
- `npm` - will download required packages

### Console Log Removal

- Parcel will not remove `console.log` automatically. We need to configure it.
- There is a package for it, named **`babel-plugin-transform-remove-console`**
- Install it using:
  ```sh
  npm install babel-plugin-transform-remove-console --save-dev
  ```
- Usage:
  1. via `.babelrc` (recommended)
  2. via CLI
  3. via NodeAPI

## React-key Reconciliation

- When there are siblings in an array, we need to give keys for each sibling.
- Read about React-key Reconciliation from React Docs.

## How JSX Works

- `React.createElement()` gives us an **Object**, which is then converted to **HTML** and put into the **DOM**.
- JSX uses `React.createElement()` (behind the scenes) → creates an Object → converted to HTML → put into the **DOM**.
- Babel does the conversion. **JSX was developed by Facebook**.
- **Babel is required to use JSX.**

### **Q. Is JSX HTML inside JS?**

**A:** No, JSX is **HTML-like Syntax**, but **not** HTML inside JS.

## Babel: The JS Compiler

- Babel is a **compiler** for JavaScript.
- **Read Babel Docs:** [babeljs.io](https://babeljs.io/)
- Try **Babel Playground** on its website.
- Babel comes bundled with Parcel.
- **Go to Babel's GitHub Repo** and read about its algorithms.

## React Components

### Types of Components:

1. **Functional Component** (New)
2. **Class-Based Component** (Old)

- A Functional Component is **just a normal function** that returns **JSX** or a **React element**.
- **Component Naming Convention:** Should start with a **Capital Letter** (not mandatory, but good practice).
- If returning **multiple lines**, wrap them in `()` and use `;` at the end.

Follow normal JS convention for writing components.

---

## **Part 2: Differences between React Element & React Component**

| Feature              | React Element                | React Component                   |
| -------------------- | ---------------------------- | --------------------------------- |
| **Returns**          | An **Object**                | JSX / React Element / Function    |
| **Rendering Syntax** | `root.render(element_name);` | `root.render(<ComponentName />);` |

### **JavaScript in JSX**

- **Any** piece of JavaScript code can be written inside `{}`.

## **XSS - Cross Site Scripting**

- **XSS** is an attack where malicious scripts are injected into a trusted website.
- Attackers send a **malicious link** and entice users to **click** it.
- **JSX protects against XSS attacks.**

## **Interview Question: Component Composition**

**Q. What is Component Composition?**  
**A:** Writing **one component inside another component** (nesting components).

---

**Read about React-key Reconciliation** from React Docs.
