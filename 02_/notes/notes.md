## Igniting our App

### Q: What is NPM?
**A:** It is a tool used for package management and the default package manager for Node projects.
NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.

NPM alternative is Yarn.

### How to initialize npm?
```sh
npm init
```

`npm init -y` can be used to skip the setup step, npm takes care of it and creates the package.json file automatically, but without configurations.

---

### Q: What is Parcel/Webpack? Why do we need it?
**A:** Parcel/Webpack is a type of web application bundler used for development and production purposes to power applications with different functionalities and features.

Parcel offers blazing-fast performance utilizing multicore processing and requires zero configuration. It can take any file as an entry point, but an HTML or JavaScript file is a good place to start.

#### Parcel Features:
- HMR (Hot Module Replacement) - Keeps track of file changes via a file watcher algorithm and renders the changes in the files
- File watcher algorithm - Made with C++
- Minification
- Cleaning our code
- Development and Production Build
- Super-fast building algorithm
- Image optimization
- Caching during development
- Compression
- Compatible with older versions of browsers
- HTTPS in dev
- Port Number management
- Consistent hashing algorithm
- Zero Configuration
- Automatic code splitting

### Installation Commands:

#### Install:
```sh
npm install -D parcel
```

#### Parcel Commands:
- For development build:
  ```sh
  npx parcel <entry_point>
  ```
- For production build: `"main": "App.js"` remove this from `package.json` before creating prod build
  ```sh
  npx parcel build <entry_point>
  ```

---

### Q: What is `.parcel-cache`?
**A:** `.parcel-cache` is used by Parcel (bundler) to reduce build time.
It stores information about your project when Parcel builds it so that when it rebuilds, it doesn’t have to re-parse and re-analyze everything from scratch. It’s a key reason why Parcel is so fast in development mode.

---

### Q: What is `npx`?
**A:** `npx` is a tool used to execute packages.
It comes with npm, and when you install npm version 5.2.0 or later, `npx` is installed automatically. It allows executing any package from the npm registry without installing it globally.

---

### Q: What is the difference between `dependencies` vs `devDependencies`?
**A:**
- **Dependencies:** Contain libraries and frameworks required for the app to function in production (e.g., React, Vue, Angular, Express).
- **DevDependencies:** Contain modules/packages needed only during development (e.g., Parcel, Webpack, Vite, Mocha).

To save a dependency as a `devDependency` on installation:
```sh
npm install --save-dev
```
instead of:
```sh
npm install --save
```

---

### Q: What is Tree Shaking?
**A:** Tree shaking is the process of removing unused code during the build process. It helps optimize the final bundle size by eliminating dead code, ensuring only necessary modules are included.

---

### Q: What is Hot Module Replacement (HMR)?
**A:** HMR exchanges, adds, or removes modules while an application is running, without a full reload. This significantly speeds up development by:
- Retaining application state during updates
- Avoiding full reloads
- Enhancing the developer experience

---

### Q: List your favorite 5 superpowers of Parcel and describe any 3 of them.

#### Parcel Superpowers:
1. HMR (Hot Module Replacement) - Updates only modified modules without a full page reload.
2. File watcher algorithm - Monitors directories on the file system and performs specific actions on file changes.
3. Minification - Reduces file size by eliminating unnecessary characters and whitespace.
4. Image optimization
5. Caching during development

---

### Q: What is `.gitignore`? What should we add and not add to it?
**A:** The `.gitignore` file tells Git which files or folders to ignore when committing a project to a repository.

#### Files to include in `.gitignore`:
- `node_modules/`
- `dist/`
- `.env`
- `.DS_Store`
- `.sass-cache/`

#### Files **not** to ignore:
- `package.json`
- `package-lock.json`

#### Example `.gitignore` file:
```sh
# Ignore node_modules folder
node_modules/

# Ignore environment variables
.env

# Ignore Mac system files
.DS_Store
```

---

### Q: What is the difference between `package.json` and `package-lock.json`?

#### **`package.json`**:
- Mandatory for every project
- Contains project metadata
- Defines application name, version, scripts, dependencies

#### **`package-lock.json`**:
- Auto-generated when npm modifies `node_modules`
- Locks dependency versions
- Ensures consistent installs across environments

#### **Versioning symbols:**
- `~`: Updates to the latest patch version (tilde)
- `^`: Updates to the latest minor version (caret)

#### Example:
```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

---

### Q: Why should I not modify `package-lock.json`?
**A:** `package-lock.json` tracks dependencies and their versions. Modifying it manually can lead to inconsistencies in dependency resolution, potentially causing issues in production.

---

### Q: What is `node_modules`? Should we push it to Git?
**A:** `node_modules/` is a folder containing installed packages for a project. It is not recommended to push it to Git because:
- It contains many files (often 100+ MB)
- It can be regenerated using `package.json`

To prevent it from being committed, add `node_modules/` to `.gitignore`.

---

### Q: What is the `dist` folder?
**A:** The `dist/` (distribution) folder contains the production-ready, minified version of the source code. It includes compiled modules and optimized assets used in deployed applications.

---

### Q: What is `browserslist`?
**A:** Browserslist is a tool that defines which browsers should be supported in frontend applications. It is used by frameworks and tools like React, Angular, and Vue to ensure compatibility across targeted browsers.
