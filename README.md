# Getting started

Install dependencies by running:

```sh
npm install
```

## Running the app in development

You don't need to build just run `npm start`.

```sh
npm start # Run in development mode
```

## Running the app in production

Starting in production relies on your code being built first, simply run:

```sh
npm run build
npm run start:prod
```

## Running in Docker

Another way to run the app in production is to use docker just try the following:

```sh
docker build -t boiler .
docker run --rm -it -p 8080:8080 boiler
```

After running this you should be able to visit the production build via `http://localhost:8080`
you can map port 8080 to any port available in your machine.


# Where is everything?

Every part of the app's boilerplate is organized in it's own folder, here's a quick rundown of how things are organized:

1. Webpack configuration is in the `config/webpack` folder.
1. All code live in the `src/` folder.
1. Server code specifically can ben found at `src/server`.
1. ReasonML tests live inside `__tests__` folder, tests are suffixed by *_test.re* and flat directory structure at the module level.
1. TypeScript and Javascript tests are at the same folder the file they're testing is, tests are suffixed by *.test*.

## TypeScript

You can check existing types by running:

```sh
npm run check-types # Check all TypeScript files
```

You can still access `tsc` directly via `npx` like so:

```sh
npx tsc
```

## Run eslint

Even if we're sure we haven't introduced anything new, it can't hurt to lint check our files, you can lint your whole project by running:

```sh
npm run lint # Runs eslint against the whole codebase (except compiled code)
```

You can access `eslint` directly via `npx` like so:

```sh
npx eslint --ext .tsx src/components/TypeAhead.tsx # Lint a single file
npx eslint --fix --ext .tsx src/components/TypeAhead.tsx # Lint and try to fix a single file
```

## Run tests

To run the test suite simple run `npm test` and it will run the whole test suite with coverage report.
