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

## Demos

- [helloworld](/helloworld): How to export a JS module and execute a function
- [moment](/moment): How to use a NPM library (https://www.npmjs.com/package/moment)
- [flexibleSearchService](/flexibleSearchService): How to call a hybris Spring bean inside a Javascript module
- [demo_price](/demo_price): How to customize hybris Spring bean customization at runtime.