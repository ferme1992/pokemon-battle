
# Poke Battle Server

This is a Nest.js server for managing and simulating Pokémon battles. It utilizes TypeORM with SQLite3 for database management and includes basic CRUD operations for Pokémon data, as well as battle simulations.

## Table of Contents

- [Poke Battle Server](#poke-battle-server)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
  - [Scripts](#scripts)
  - [Database Migrations](#database-migrations)
  - [Testing](#testing)
  - [Dependencies](#dependencies)
    - [Dev Dependencies](#dev-dependencies)
  - [Future Improvements](#future-improvements)
  - [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ferme1992/pokemon-battle.git
   cd poke-battle-server
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

## Running the Server

To start the server in development mode with hot-reloading:

```bash
npm run start:dev
```

For production mode:

```bash
npm run start:prod
```

The server will be running on `http://localhost:3000` by default.

## Scripts

- **Build the project:**

  ```bash
  npm run build
  ```

- **Start the server:**

  ```bash
  npm run start
  ```

- **Start the server in development mode:**

  ```bash
  npm run start:dev
  ```

- **Start the server in production mode:**

  ```bash
  npm run start:prod
  ```

- **Run ESLint to fix linting issues:**

  ```bash
  npm run lint
  ```

- **Format the code with Prettier:**

  ```bash
  npm run format
  ```

## Database Migrations

The database.sqlite file should be created with the project setup, but you can still perform operations with the following scripts.

To run the latest database migrations:

```bash
npm run migration:run
```

To generate a new migration:

```bash
npm run migration:generate -- -n MigrationName
```

To create a new migration file:

```bash
npm run migration:create -- -n MigrationName
```

## Testing

This project uses Jest for testing. To run the tests:

```bash
npm run test
```

To watch for changes and re-run tests:

```bash
npm run test:watch
```

To generate a coverage report:

```bash
npm run test:cov
```

## Dependencies

- [Nest.js](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
- [TypeORM](https://typeorm.io/) - An ORM for TypeScript and JavaScript (ES7, ES6, ES5) that supports various databases like MySQL, PostgreSQL, SQLite, and more.
- [SQLite3](https://www.sqlite.org/index.html) - A C library that provides a lightweight, disk-based database.

### Dev Dependencies

- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.
- [ESLint](https://eslint.org/) - A tool for identifying and fixing problems in JavaScript code.
- [Prettier](https://prettier.io/) - An opinionated code formatter.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.

## Future Improvements

Given the time constraints some tasks were left for the future.

1. Create tests for all server files
2. Dockerize the server

## License

[MIT](https://choosealicense.com/licenses/mit/)
