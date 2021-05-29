# Demo Price

## Overview
The goal of this demo is to show example of runtime Spring bean customization.
We will change NetPriceService.getPriceInformationsForProduct to convert USD price into EUR price using an external currency converter service. 

## How to configure

- Add to local.properties
```
dynamics.NetPriceService.getPriceInformationsForProduct=model://dynamics.NetPriceService.getPriceInformationsForProduct
```
- Add the following script *dynamics.NetPriceService.getPriceInformationsForProduct* with JAVASCRIPT as Script engine type:
```javascript
demoPrice = require('./demo_price/main.js');
demoPrice.execute(pjp, sessionService, i18NService);

## How to test

```
- Run the following script in HAC to execute
```javascript
catVersion = catalogVersionService.getCatalogVersion("Default", "Staged")
product = productService.getProductForCode(catVersion, "Test")
netPriceService.getPriceInformationsForProduct(product);
```

GET /converter.asmx/GetCurrencyRate?Currency=string&RateDate=string