helloworld = require('./helloworld.js');

function hello(name) {
  return helloworld.getMessage(name);
};

exports.hello = hello;