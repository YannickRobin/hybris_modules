function helloYou(name) {
    return "Hello you!";
};

function hello(name) {
    return "Hello " + name;
};

module.exports.helloYou = helloYou;
module.exports.hello = hello;