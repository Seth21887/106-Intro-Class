//object constructor: allows reusability. It's a function that normally starts with cap letter.
function Dog(name,age){
    this.name = name;
    this.age = age;
}

class Cat{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

function runTests(){
    console.log("Tests");

    //creating objects

    //object literal: easiest way to create an object, should be used when you need just one of that type, not multiple. Doesn't allow reusability.
    let dog = {name: "Fido", age: 3};
    console.log(dog);

    //object constructor
    let dog3 = new Dog("Einstein", 9);
    console.log(dog3);

    let dog4 = new Dog("donky", 1);
    console.log(dog4);

    //classes: newest way. We use it exactly the same way as object constructors.
    let cat1 = new Cat("Luna", 2);
    console.log(cat1);


}



//why not window.onload?? Because that can only be ran once.
runTests();