# Express.js with EJS Backend Development

This repository demonstrates backend development using Express.js with the EJS templating engine. Below are the key concepts, features, and instructions for setting up and using the project.

---

## Table of Contents
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Key Concepts](#key-concepts)
  - [Routing](#routing)
  - [Template Engine (EJS)](#template-engine-ejs)
  - [Views](#views)
  - [Static Files](#static-files)
  - [Create Server](#create-server)
  - [Middleware](#middleware)
  - [Error Handling](#error-handling)
  - [Dynamic Routing](#dynamic-routing)
  - [Parsers](#parsers)
- [Usage](#usage)
- [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm start
   ```

---

## Project Structure
```
project-directory/
├── public/                # Static files (CSS, JS, images)
├── views/                 # EJS templates
├── routes/                # Application routes
├── middlewares/           # Custom middleware
├── app.js                 # Main application file
└── package.json           # Project dependencies and metadata
```

---

## Key Concepts

### Routing
Routing in Express.js is used to define application endpoints. Example:
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

module.exports = router;
```

### Template Engine (EJS)
EJS (Embedded JavaScript) is used to render dynamic content in HTML templates. Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>Welcome to <%= title %></h1>
</body>
</html>
```

### Views
Views are stored in the `views/` directory and rendered using EJS. Example:
```javascript
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
```

### Static Files
Serve static files (e.g., CSS, JS) using the `express.static` middleware:
```javascript
app.use(express.static(path.join(__dirname, 'public')));
```

### Create Server
The server is created using the `app.listen` method:
```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Middleware
Middleware functions execute during the request-response cycle. Example:
```javascript
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});
```

### Error Handling
Handle application errors using middleware:
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

### Dynamic Routing
Dynamic routes use parameters for flexible endpoint definitions:
```javascript
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

### Parsers
Use parsers for processing incoming requests:
- Body parser:
  ```javascript
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  ```
- Query string parsing:
  ```javascript
  const query = req.query;
  console.log(query);
  ```

---

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open a browser and navigate to `http://localhost:3000`.

3. Modify files in `views/`, `routes/`, or `public/` to customize the project.

---

## License
This project is licensed under the [MIT License](LICENSE).
