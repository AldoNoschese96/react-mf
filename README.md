# React Microfrontend Starter Project

This is a starter project for building a React application with microfrontends. It is designed as a monorepo and includes four microfrontends: Shell, Header, Footer, and State. The project is pre-configured with basic dependencies such as Material-UI (@mui), Keycloak Provider, Recoil, React Router DOM, and many others to help you get started quickly.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Microfrontends](#microfrontends)
- [Dependencies](#dependencies)
- [License](#license)

## Getting Started

Follow these steps to get started with this project:

1. Clone the repository to your local machine:

   ```shell
    git clone https://github.com/AldoNoschese96/react-mf.git
    cd react-mf
    yarn install
    npx lerna run start:development
    ```
This will start the development server for all microfrontends. You can access the apps at http://localhost:3000 || http://localhost:3001 || http://localhost:3002 || http://localhost:3003.

## Project Structure

The project follows a monorepo structure and consists of the following directories:

- [packages/shell]: The main application Shell microfrontend.
- [packages/header]: The Header microfrontend.
- [packages/footer]: The Footer microfrontend.
- [packages/state]: The State microfrontend.

## Microfrontends

### Shell

The Shell microfrontend is the main application that orchestrates and loads the other microfrontends. It provides routing and integration of the Header, Footer, and State microfrontends.

### Header

The Header microfrontend is responsible for rendering the application's header.

### Footer

The Footer microfrontend is responsible for rendering the application's footer.

### State

The State microfrontend manages global application state using Recoil or another state management library of your choice.

## Dependencies

The project includes some basic dependencies to help you get started:

-   [React](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [React Router DOM](https://reactrouter.com/): Routing for React applications.
-   [Material-UI](https://mui.com/): A popular React UI framework.
-   [Keycloak Provider](https://www.npmjs.com/package/react-keycloak): Integration with Keycloak for authentication.
-   [Recoil](https://recoiljs.org/): State management library.
-   [... and many more](https://chat.openai.com/package.json)


License

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/LICENSE) file for details.

