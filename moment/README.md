# Moment demo

## Overview
This demo shows how to use a NPM library (https://www.npmjs.com/package/moment) and how we support loading modules from the `node_modules` folder just as Node does.

## How to install
Run the following command line:
```
npm install
```

## How to execute

Execute the following script in HAC (script type: javascript):
```javascript
moment = require('./moment/moment');
moment.fromNow('2016-11-23');
```