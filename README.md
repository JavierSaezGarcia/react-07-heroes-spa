# <b>Aplication Heroes-Spa 

## With private and public routes, searching, testing with Jest, hooks, authentication, and much more...
<hr>

## Install:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```
## Optional:
```
yarn add --dev whatwg-fetch
```
## Update scripts <b>package.json</b>:
```
"scripts: {
  ...
  "test": "jest --watchAll"
  ...
}
```
## Create babel file config <b>babel.config.cjs<b>
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```
## Create Jest config file <b>jest.config.cjs</b>
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```
## It is not necessary but if you need it...
```
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```
## Init yarn
```
yarn 
```

## Run, build and test

```
$ yarn dev
$ yarn build
$ yarn test
```

## Happy coding 😉


