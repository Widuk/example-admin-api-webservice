# Administration API

This is a template project for creating a Node.js API with Express and TypeScript. It includes a modular project structure with routers, controllers, services, database connection, API documentation using Swagger, and unit tests.

## Project Structure

```
├── docs/
├── node_modules/
├── src/
│ ├── app/
│ ├── controllers/
│ ├── database/
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── utils/
│ └── index.ts
├── test/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── tslint.json
```

- `node_modules/`: Contains the installed dependencies for the project.
- `docs/`: Contains the Swagger API documentation.
  - `swagger.json`: The Swagger API documentation file.
- `src/`: Contains the source code for the project.
  - `controllers/`: Contains the controllers for handling HTTP requests.
  - `database/`: Contains the database configuration.
  - `models/`: Contains the models for the data entities used in the project.
  - `routes/`: Contains the router for handling HTTP requests.
  - `services/`: Contains the services for handling business logic.
  - `utils/`: Contains utility functions used throughout the project.
  - `app.ts`: The main entry point for the application.
- `test/`: Contains the unit tests for the project.
- `index.ts`: Imports and starts the server.
- `.env`: Contains environment variables for the project.
- `.env.example`: An example `.env` file with placeholder values.
- `.gitignore`: Specifies which files and directories Git should ignore.
- `package.json`: Contains information about the project and its dependencies.
- `package-lock.json`: Contains the exact versions of the dependencies installed in `node_modules/`.
- `README.md`: Contains information about the project and its usage.
- `tsconfig.json`: Contains configuration options for the TypeScript compiler.
- `tslint.json`: Contains rules for the TSLint linter.

## API Documentation

This project includes API documentation using Swagger. You can access the documentation by navigating to `http://localhost:3000/api/docs` when the server is running.

The API documentation is generated from the `swagger.json` file, which is located in the project root directory. You can edit this file to customize the documentation for your API.


## Running the Project

1. Install dependencies:
   > npm install
2. Copy the example .env file and update the values as needed:
    > cp .env.example .env
3. Start the server:
    > npm run start
4. Navigate to http://localhost:3000/api/users to access the API.

## Running Unit Tests

This project includes unit tests using Jest. You can run the tests using the following command:
> npm run test

The tests are located in the test/ directory and are named with the .test.ts extension.

# Database
This project uses PostgreSQL as its database. To use PostgreSQL, you need to have it installed locally or have access to a PostgreSQL server.

## Setting up the Database
1: Install PostgreSQL
- For macOS: brew install postgresql
- For Ubuntu: sudo apt-get install postgresql
- For Windows: download and install from PostgreSQL website

2: Start the PostgreSQL server
- For macOS: brew services start postgresql
- For Ubuntu: sudo systemctl start postgresql
- For Windows: open the PostgreSQL command prompt and run pg_ctl start

3: Create a new database and user
```sql
CREATE DATABASE postgres;
CREATE USER postgres WITH PASSWORD '1234';
GRANT ALL PRIVILEGES ON DATABASE postgres TO postgres;
```
Note: You can change the database name, username, and password to your own preferences.

4: Create a new schema
```sql
CREATE SCHEMA example;
```

5: Create a "users" table in the example schema
```sql
CREATE TABLE example.users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);
```

6: Set the environment variables for the database connection:
```makefile
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=1234
```