# Request demo

## Overview
This demo shows how to browserify to execute 'request' NodeJS library.

## How to install
Run the following command line:
```
npm install request

npm install -g browserify
npm install babelify
npm install babel-preset-es2015

browserify -t babelify --presets [ es2015 ] request.js > bundle.js
```

## How to execute

Execute the following script in HAC (script type: javascript):
```javascript
request = require('./request/bundle');
request.test();
```

It will fail due to 'Expected an operand but found const' becayse const is not supported in ECMAScript 5. Not sure why babelify is not enough to solve.