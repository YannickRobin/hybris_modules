class Cat {
  makeSound() {
    return `${this.constructor.name}: Meowww`;
  }
}

exports.Cat = Cat;