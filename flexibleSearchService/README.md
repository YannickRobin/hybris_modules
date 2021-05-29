# FlexibleSearchService example

## Overview
The goal of this example is to show you can call a hybris Spring bean inside a Javascript module.

## How to execute

- Execute the following script in HAC (script type: javascript):
```javascript
flexibleSearchService = require('./flexibleSearchService/getProductTotalCount');
flexibleSearchService.getProductTotalCount(spring);
```


```javascript
Cat = require('./flexibleSearchService/cat');
cat = new Cat();
print(cat.makeSound());
```