# hybris_modules

## Setup 

- Add the following property in *local.properties*
```
dynamics.javascript_modules.uri=https://github.com/YannickRobin/hybris_modules.git
```

- Run the following script in HAC to install modules
```javascript
gitService.pullRepo();
```

## How to execute

- Run the following script in HAC to execute
```javascript
user = require('./test/user.js');
user.hello("Yannick");
```