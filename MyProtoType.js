function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName;
}

var john = new Person("john", "Doe");
var jane = new Person("Jane", "OneMore");

Person.prototype.greet = function(){
    console.log("Inside proto : " + this.firstName + "  and " + this.lastName);
}

john.greet();
jane.greet();
console.log(john.firstName + " " + john.lastName);