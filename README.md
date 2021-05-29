# hybris_modules

## CommonJS

CommonJS module is a reusable piece of JavaScript that exports specific objects made available to any dependent code

We are using CommonJS for Nashorn: https://github.com/malaporte/nashorn-commonjs-modules that adds support for CommonJS modules (aka `require`) inside a Graaljs script engine. It is based on the specification for [NodeJS modules](https://nodejs.org/api/modules.html) and it supports loading modules from the `node_modules` folder just as Node does. Of course, it doesn't provide an implementation for Node's APIs, so any module that depends on those won't work.


## Setup 

- Add the following property in *local.properties*
```
dynamics.javascript_modules.uri=https://github.com/YannickRobin/hybris_modules.git
```

- Run the following script in HAC to install modules
```javascript
gitService.pullRepo();
```

## Demos

- [helloworld](/helloworld): How to import a JS module and execute a function
- [cat](/cat): Show you cannot import an object
- [require](/require): How to import a library inside another library
- [moment](/moment): How to use a NPM library (https://www.npmjs.com/package/moment)
- [flexibleSearchService](/flexibleSearchService): How to call a hybris Spring bean inside a Javascript module
- [demo_price](/demo_price): How to customize hybris Spring bean customization at runtime.

## Know issues

- When you excute into a model and not in HAC, for JS modules modification to be considered, you need to update the timestamp of the script object so the module is reloaded
- Nashorn is an implementation of ECMAScript 5.1, you cannot use the latest of ECMAScript 6

## GraalVM JavaScript
- Nashorn implements ECMAScript 5.1 specification with some limited ECMAScript 6 features including template strings; let, const, and block scope; iterators and for..of loops; Map, Set, WeakMap, and WeakSet data types; symbols; and binary and octal literals.
- GraalVM JavaScript supports ECMAScript 2019/ES10
- Context vs ScriptEngine (JSR 223 Scripting API)
- CommonJS module vs ES6 modules: With GraalVM, we could use ES6 module. The modules used in Node.js follow a module specification known as the CommonJS specification. The recent updates to the JavaScript programming language, in the form of ES6, specify changes to the language, adding things like new class syntax and a module system. This module system is different from Node.js modules.
- We can still use CommonJS for Graal: https://github.com/transposit/graal-commonjs-modules
- In ES6m you use import in placee of require, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import