# React Scaffolding - Clean Architecture ❤️

This project was born to be a scaffold for a new React.js projects.

- Clean Architecture Ready 🏛
- Typescript 🔒
- Webpack 5 ⏩

## How to install

- Clone this repository
- Run `yarn install` for install all dependencies
- Run `yarn run start:development` for start the application in development mode
- Have fun 🎉

## Commands available

- Run `yarn run start:development` to start the application in development mode
- Run `yarn run start:staging` to start the application in staging mode
- Run `yarn run start:production` to start the application in production mode
- Run `yarn run build:development` to build the application in development mode
- Run `yarn run build:staging` to build the application in staging mode
- Run `yarn run build:production` to build the application in production mode
- Run `yarn run start:dist` to build the application and serve it on localhost:3001
- Run `yarn run test:unit` to run the unit tests
- Run `yarn run cypress:open` to open Cypress Test E2E shell
- Run `yarn run lint:check` to run Rome lint check
- Run `yarn run lint:fix` to allow Rome to fix lint errors (Safe Mode)

env:

- development
- staging
- production

## Docker

Build docker image

env:

- development
- staging
- production

`docker build --build-arg env=${env} -t react:latest -f Docker/Dockerfile .'