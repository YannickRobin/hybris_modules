# Cat demo

## Overview
This demo shows how to import an object and execute a function.

## How to execute

Execute the following script in HAC (script type: javascript):
```javascript
cats = require('./cat/cat');
Cat = cats.Cat;

// creates some cats
cat1 = new Cat("Brad", "Pitt");
cat2 = new Cat("Angelina", "Jolie");

print(cat2.fullName()  + " is legally separated from " + cat1.fullName());
```

## ES6 Object does not work
CommonJS does not support object method without adding a function using prototype.
The following script will fail:

```javascript
Cat = require('./cat/catES6');
cat = new Cat();
print(cat.makeSound());
```javascript