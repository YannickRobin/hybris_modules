# hybris_modules

## How to execute

- Add to local.properties
```
dynamics.NetPriceService.getPriceInformationsForProduct=model://dynamics.NetPriceService.getPriceInformationsForProduct
```
- Add the following Groovy script *dynamics.NetPriceService.getPriceInformationsForProduct*
```javascript
demoPrice = require('./demo_price/main.js');
demoPrice.execute(pjp, sessionService, i18NService);
```
- Run the following script in HAC to execute
```javascript
catVersion = catalogVersionService.getCatalogVersion("Default", "Staged")
product = productService.getProductForCode(catVersion, "Test")
netPriceService.getPriceInformationsForProduct(product);
```

GET /converter.asmx/GetCurrencyRate?Currency=string&RateDate=string