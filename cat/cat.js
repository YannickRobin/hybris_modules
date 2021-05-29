function Cat(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;  
}

Cat.prototype.fullName = function () {
    return this.firstname + " " + this.lastname;
};
 
// now we export the class, so other modules can create Cat objects
module.exports = {
    Cat: Cat
}