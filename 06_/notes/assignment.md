# Understanding React Concepts and Microservices

## Ques): What is `Microservice`?

**Ans:** `Microservice` - also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams.<br/>
Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.<br/>
means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.

#### Benefits of Microservices:

- **Flexible Scaling** – Each service can be scaled independently.
- **Easy Deployment** – Updates can be made without affecting the entire system.
- **Technological Freedom** – Teams can choose different technologies for different services.
- **Reusable Code** – Components can be reused in multiple applications.
- **Resilience** – Failure of one service does not bring down the entire application.

## Ques): What is `Monolith architecture`?

**Ans:** A `Monolith architecture` is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications.<br/>
A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.<br/>
means we are not dividing software into small, well-defined modules, we use every services like, database, server or a UI of the application, in one Application file.

#### Drawbacks of Monolithic Architecture:

- **Difficult to scale** – The entire application needs to be scaled together.
- **Slower updates** – Changing one part of the system requires redeploying the whole application.
- **Risk of failure** – A failure in one component can impact the entire system.

## Ques): What is the difference between `Monolith and Microservice`?

**Ans:**
In a **monolithic architecture**, all processes are tightly coupled and run as a single unit. If demand increases, the whole system must be scaled, making it difficult to add or update features.

In a **microservices architecture**, the application is broken into independent services. Each service performs a single function and can be updated, deployed, and scaled separately.
![Monolith and Microservice](./monolith-microservices.png)

## Ques): Why do we need a `useEffect Hook`?

**Ans:** `useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects.<br/>
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

```js
useEffect(() => {}, []);
```

The `() => {}` is callback function and `[]` is called a empty dependency array. <br/>
The empty `[]` ensures the effect runs only once. If we add variables inside the array, the effect will run when those variables change.
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.

```js
useEffect(() => {
  setCurrentState("true");
}, [currentState]);
```

If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```js
useEffect(() => {});
```

## Ques): What is `Optional Chaining`?

**Ans:**
`Optional Chaining` (`?.`) allows us to safely access object properties without throwing an error if the property is `null` or `undefined`. it prevents the application from being crashed if the key that we are trying to access is not present.

### Example:

```js
const user = { profile: { name: "John" } };
console.log(user.profile?.name); // John
console.log(user.address?.street); // undefined (No error)
```

Without optional chaining, accessing `user.address.street` would cause an error if `address` is missing.

## Ques): What is `Shimmer UI`?

**Ans:** `Shimmer UI` is a placeholder effect that gives users an idea of how the content will look before it fully loads. It improves user experience by displaying a preview instead of a blank screen.d.<br/>
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

## Ques): What is the difference between `JS expression and JS statement`?

**Ans:**

- A `JS expression` returns a value that we use in the application.
- A `JS statement`, does not return a value.

### Example:

```js
// Expression
console.log(2 + 3); // 5

// Statement
let x = 10; // No returned value
```

Expressions can be used inside JSX, but statements cannot.

If we want to use `JS expression` in JSX, we have to wrap in `{/* expression slot */}` and if we want to use `JS statement` in JSX, we have to wrap in `{(/* statement slot */)}`;

## Ques): What is `Conditional Rendering`? explain with a code example.

**Ans:** `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for Example:

```js
  // Using Ternary operator as a shorthand way or writing an if-else statement
  {isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
  // Using an if…else Statement
  {
    (if (isLoggedIn) {
      return <UserGreeting />;
    }else {
      return <GuestGreeting />;
    })
  }
  // Using Logical &&
  {isLoggedIn && <button>Logout</button>}
```

## Ques): What is `CORS`?

**Ans:** CORS (**Cross-Origin Resource Sharing**) is a security feature that prevents websites from making unauthorized requests to different domains. It allows servers to specify which origins are permitted to access their resources.

## Ques): What is `async and await`?

**Ans:** `Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.<br/>
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
for example:

### Example:

```js
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const json = await response.json();
  console.log(json);
}
```

This function waits for data to be fetched before moving to the next step.


## Ques): What is the use of `const json = await data.json()`; in `fetchData()`?

**Ans:** The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats.
so we can extract the `JSON object` from a `fetch` response by using `await data.json()`.<br/>
`data.json()` is a method on the data object that lets you extract a `JSON object` from the data or response. The method returns a promise because we have used `await` keyword.<br/>
So, `data.json()` returns a promise resolved to a `JSON object`.

When we fetch data, the response is returned as a generic object. Using `await data.json()` converts it into a JSON object that can be used in our application.

### Example:

```js
const data = await fetch("https://api.example.com/data");
const json = await data.json();
console.log(json); // Now we can access JSON properties
```

This step is necessary to extract the actual data from the response.
